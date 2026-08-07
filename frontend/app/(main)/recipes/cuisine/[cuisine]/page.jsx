"use client";
import React from "react";
import { useParams } from "next/navigation";


function CuisineRecipesPage() {
  const params = useParams();
  const cuisine = params.cuisine;
  return <div>CuisineRecipesPage</div>;
}

export default CuisineRecipesPage