export default function Spinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-green-400"></div>
    </div>
  );
}
