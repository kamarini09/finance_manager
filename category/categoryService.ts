const API_URL = "http://192.168.0.102:3000/categories"; // Replace with your actual API URL

export const addCategory = async (title: string) => {
  try {
    console.log("Sending request with:", { title });

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};
