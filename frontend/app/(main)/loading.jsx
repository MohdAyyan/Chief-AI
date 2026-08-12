import LoadingSpinner from "@/components/LoadingSpinner";

export default function MainLoading() {
  return (
    <div className="pt-16">
      <LoadingSpinner
        title="Preparing your workspace..."
        message="Loading your recipes, pantry, and chef recommendations"
      />
    </div>
  );
}
