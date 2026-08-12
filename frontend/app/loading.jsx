import LoadingSpinner from "@/components/LoadingSpinner";

export default function GlobalLoading() {
  return (
    <div className="pt-20">
      <LoadingSpinner
        title="Servd is loading..."
        message="Gathering fresh recipe data and chef recommendations"
      />
    </div>
  );
}
