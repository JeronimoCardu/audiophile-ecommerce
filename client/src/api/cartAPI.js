const API_URL = import.meta.env.VITE_API_URL;

export async function getCart() {
  try {
    const response = await fetch(`${API_URL}/api/cart`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
}

export async function addToCart(productId, quantity, price) {
  try {
    const response = await fetch(`${API_URL}/api/cart/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ productId, quantity, price }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

export async function updateCart(product, quantity) {
  try {
    const response = await fetch(`${API_URL}/api/cart/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ product, quantity }),
    }); 
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {    console.error("Error updating cart:", error);
    throw error;
  } 
}

export async function removeFromCart(product) {
  try {
    const response = await fetch(`${API_URL}/api/cart/remove`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ product }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
}

export async function clearCart() {
  try {
    const response = await fetch(`${API_URL}/api/cart/clear`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error removing all from cart:", error);
    throw error;
  }
}
