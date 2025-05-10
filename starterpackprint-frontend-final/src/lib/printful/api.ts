// This file will contain client-side functions to interact with your Printful API routes.

/**
 * Fetches products from your Printful store via your Next.js API route.
 */
export async function getPrintfulProducts() {
  try {
    const response = await fetch("/api/printful/products");
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to fetch Printful products from API route:", errorData.details || errorData.error);
      throw new Error(errorData.details?.message || errorData.error || "Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Client-side error fetching Printful products:", error);
    // Depending on how you want to handle errors, you might re-throw, or return a specific error object/message
    throw error;
  }
}

// You can add more client-side functions here as you build out Printful API routes
// e.g., getProductById, createPrintfulOrder, etc.

