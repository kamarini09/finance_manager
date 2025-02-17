const API_URL = "http://localhost:3000/categories";

// fetch all categories
export const fetchCategories = async () => {
  try {
    console.log("Fetching categories from:", API_URL);
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

//add a new category
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

//delete category
export const deleteCategory = async (id: number) => {
  try {
    console.log(`Deleting category with ID: ${id}`);

    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    return await response.json();
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};
