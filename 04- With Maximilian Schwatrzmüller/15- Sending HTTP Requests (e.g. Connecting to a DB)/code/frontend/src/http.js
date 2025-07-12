const BASE_URL = "http://localhost:3000/";

export const fetchAvailablePlaces = async () => {
  const response = await fetch(`${BASE_URL}places`);
  if (!response.ok) throw new Error("Failed to fetch places.");
  const { places } = await response.json();
  return places;
};

export const updateUserPlaces = async (places) => {
  const respnse = await fetch(`${BASE_URL}user-places`, {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!respnse.ok) throw new Error("Failed to update user data.");
  const { message } = await respnse.json();
  return message;
};

export const fetchUserPlaces = async () => {
  const response = await fetch(`${BASE_URL}user-places`);
  if (!response.ok) throw new Error("Failed to fetch user places.");
  const { places } = await response.json();
  return places;
};
