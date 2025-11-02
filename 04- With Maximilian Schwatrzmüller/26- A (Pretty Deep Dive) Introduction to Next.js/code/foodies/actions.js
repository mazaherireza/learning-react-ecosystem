"use server";

import { revalidatePath } from "next/cache";
import { saveMeal } from "./lib/meals";
import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(_, FormData) {
  const meal = {
    title: FormData.get("title"),
    summary: FormData.get("summary"),
    instructions: FormData.get("instructions"),
    image: FormData.get("image"),
    creator: FormData.get("name"),
    creator_email: FormData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.meal.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input",
    };
  }

  await saveMeal(meal);

  revalidatePath("/meals");
  
  redirect("/meals");
}
