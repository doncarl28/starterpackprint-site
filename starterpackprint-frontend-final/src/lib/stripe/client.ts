import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

/**
 * Returns a Stripe.js instance, creating it if it doesn't already exist.
 * Uses a singleton pattern to avoid reinstantiating Stripe on every render.
 */
export const getStripe = () => {
  if (!stripePromise) {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key is not configured in environment variables.");
    }
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

/**
 * Creates a Stripe Checkout session and redirects the user to the Stripe-hosted checkout page.
 * @param items - An array of items to include in the checkout. Each item should have `priceId` and `quantity`.
 *                Example: [{ priceId: "price_123", quantity: 1 }]
 */
export async function redirectToCheckout(items: Array<{ priceId: string; quantity: number }>) {
  if (!items || items.length === 0) {
    console.error("No items provided for checkout.");
    // You might want to show an error message to the user here
    return { error: { message: "Votre panier est vide." } };
  }

  try {
    // Create a Checkout Session on your server
    const response = await fetch("/api/stripe/checkout-sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to create Stripe Checkout session:", errorData.error);
      // Display error to user, e.g., using a toast notification
      return { error: { message: errorData.error || "Impossible de démarrer le paiement. Veuillez réessayer." } };
    }

    const { sessionId } = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await getStripe();
    if (!stripe) {
      console.error("Stripe.js has not loaded yet.");
      return { error: { message: "Erreur lors du chargement du module de paiement. Veuillez réessayer." } };
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    // If `redirectToCheckout` fails due to a browser issue (e.g., pop-up blocker),
    // display the localized error message to your customer.
    if (error) {
      console.error("Stripe redirectToCheckout error:", error.message);
      // Display error to user
      return { error };
    }
    // If redirection is successful, this part of the code might not be reached
    // as the browser will navigate away to Stripe's page.
  } catch (error: any) {
    console.error("Client-side error during redirectToCheckout:", error);
    return { error: { message: error.message || "Une erreur inattendue est survenue. Veuillez réessayer." } };
  }
}

