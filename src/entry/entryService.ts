const API_URL = "http://169.254.164.87:3000/entries";

// fetch all entries
export const fetchEntries = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
};

// add new entry
export const addEntry = async (entry: { title: string; amount: number; categoryId: number }) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    return await response.json();
  } catch (error) {
    console.error("Error adding entry:", error);
    throw error;
  }
};

// update existing entry
export const updateEntry = async (id: number, entry: Partial<any>) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    return await response.json();
  } catch (error) {
    console.error("Error updating entry:", error);
    throw error;
  }
};

// delete entry
export const deleteEntry = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    return await response.json();
  } catch (error) {
    console.error("Error deleting entry:", error);
    throw error;
  }
};
