import LoadingSpinner from "@/components/LoadingSpinner";

export default function PantryLoading() {
  return (
    <div className="pt-20">
      <LoadingSpinner
        title="Opening your pantry..."
        message="Fetching your ingredients and scanning saved items"
      />
    </div>
  );
}
