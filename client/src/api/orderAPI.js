const API_URL = import.meta.env.VITE_API_URL;

export async function createOrderToAPI(orderData) {
  console.log(orderData);
  try {
    const response = await fetch(`${API_URL}/api/orders`, {
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
