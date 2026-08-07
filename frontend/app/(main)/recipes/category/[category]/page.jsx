"use client";

import React from "react";
import { useParams } from "next/navigation";
import RecipeGrid from "@/components/RecipeGrid";
import { getMealsByCategory } from "@/actions/mealdb.actions";


const CategoryRecipesPage = () => {

    const params = useParams();
      const category = params.category;

  return (
    
  <RecipeGrid 
    type="category"
    value={category}
    fetchAction={getMealsByCategory}
    backLink="/dashboard"
    
  />
  )
};

export default CategoryRecipesPage