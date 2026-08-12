import LoadingSpinner from "@/components/LoadingSpinner";

export default function RecipesLoading() {
  return (
    <div className="pt-20">
      <LoadingSpinner
        title="Retrieving your recipe collection..."
        message="Loading saved recipes and culinary creations"
      />
    </div>
  );
}
