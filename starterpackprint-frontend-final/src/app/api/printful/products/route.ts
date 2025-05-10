import { NextRequest, NextResponse } from "next/server";

const PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY;
const PRINTFUL_API_URL = "https://api.printful.com";

// Example: Get a list of products from your store
// This is a basic example and might need adjustments based on your specific Printful setup and needs.
export async function GET(_request: NextRequest) { // request prefixed with _ to avoid unused var warning
  if (!PRINTFUL_API_KEY) {
    return NextResponse.json({ error: "Printful API key is not configured." }, { status: 500 });
  }

  try {
    // You might want to get specific store products, so check Printful API docs for correct endpoint
    // For example, to get sync products from a specific store: /store/products
    // Or all products available to your account (might be very large): /products
    const response = await fetch(`${PRINTFUL_API_URL}/store/products`, { // Adjust endpoint as needed
      method: "GET",
      headers: {
        "Authorization": `Bearer ${PRINTFUL_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Printful API Error:", errorData);
      return NextResponse.json({ error: "Failed to fetch products from Printful", details: errorData }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data.result || data);

  } catch (error) {
    console.error("Error fetching Printful products:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: "Internal server error while fetching Printful products", details: errorMessage }, { status: 500 });
  }
}

