"use client";
import React from "react";
import { useParams } from "next/navigation";
import RecipeGrid from "@/components/RecipeGrid";
import { getMealsByArea } from "@/actions/mealdb.actions";


function CuisineRecipesPage() {
  const params = useParams();
  const cuisine = params.cuisine;
  return (
     <RecipeGrid
      type="cuisine"
      value={cuisine}
      fetchAction={getMealsByArea}
      backLink="/dashboard"
    />
  )
}

export default CuisineRecipesPage