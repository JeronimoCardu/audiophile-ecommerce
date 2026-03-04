
export async function createOrderToAPI(orderData) {
  try {
    const response = await fetch(`/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("Failed to create order");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
