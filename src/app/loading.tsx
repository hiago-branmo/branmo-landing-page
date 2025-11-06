export default function Loading() {
  return (
  <div className="min-h-screen bg-background flex items-center justify-center">
  <div className="text-center text-foreground">
  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
  <h2 className="text-xl font-semibold">Loading Branmo CRM...</h2>
      </div>
    </div>
  );
}