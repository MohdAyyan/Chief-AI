import LoadingSpinner from "@/components/LoadingSpinner";

export default function RecipeLoading() {
  return (
    <div className="pt-20">
      <LoadingSpinner
        title="Cooking up your recipe..."
        message="Our AI chef is generating step-by-step instructions and ingredients"
      />
    </div>
  );
}
