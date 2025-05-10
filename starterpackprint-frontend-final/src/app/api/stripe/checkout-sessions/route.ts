import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure STRIPE_SECRET_KEY is defined
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("La variable d'environnement STRIPE_SECRET_KEY n'est pas définie.");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10", // Use the latest API version or your preferred one
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, success_url, cancel_url } = body;

    if (!items || !success_url || !cancel_url) {
      return NextResponse.json(
        { success: false, message: "Données manquantes pour la création de la session de paiement." },
        { status: 400 }
      );
    }

    // Transformer les items pour Stripe
    const line_items = items.map((item: any) => ({
      price_data: {
        currency: "eur", // ou la devise de votre choix
        product_data: {
          name: item.name,
          // images: [item.imageUrl], // Optionnel : ajouter des images si elles sont accessibles publiquement
        },
        unit_amount: Math.round(item.price * 100), // Prix en centimes
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: success_url, // URL de redirection en cas de succès
      cancel_url: cancel_url,   // URL de redirection en cas d'annulation
      // automatic_tax: { enabled: true }, // Optionnel: pour la gestion automatique des taxes
    });

    return NextResponse.json({ success: true, sessionId: session.id, url: session.url });

  } catch (error) {
    console.error("Erreur lors de la création de la session de paiement Stripe:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { success: false, message: "Erreur serveur lors de la création de la session de paiement.", details: errorMessage },
      { status: 500 }
    );
  }
}

// TODO: Ajouter une route pour gérer les webhooks Stripe (confirmation de paiement, etc.)
// par exemple, /api/stripe/webhooks/route.ts

