'use client';
 
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
      >
        Try again
      </button>
    </div>
  );
}
