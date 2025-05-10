import { NextRequest, NextResponse } from "next/server";

const PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY;
const PRINTFUL_API_URL = "https://api.printful.com";

export async function POST(request: NextRequest) {
  if (!PRINTFUL_API_KEY) {
    return NextResponse.json({ error: "Printful API key is not configured." }, { status: 500 });
  }

  try {
    const orderData = await request.json();

    // TODO: Validate orderData structure before sending to Printful

    const response = await fetch(`${PRINTFUL_API_URL}/orders`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PRINTFUL_API_KEY}`,
        "Content-Type": "application/json",
        "X-PF-Store-Id": process.env.PRINTFUL_STORE_ID || "", // Optional: if you need to specify a store ID
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Printful API Error (Create Order):", errorData);
      return NextResponse.json({ error: "Failed to create order with Printful", details: errorData }, { status: response.status });
    }

    const data = await response.json();
    // Return the Printful order confirmation
    return NextResponse.json(data.result || data);

  } catch (error) {
    console.error("Error creating Printful order:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: "Internal server error while creating Printful order", details: errorMessage }, { status: 500 });
  }
}

