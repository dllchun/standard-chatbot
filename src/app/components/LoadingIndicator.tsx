// components/LoadingIndicator.tsx
const LoadingIndicator = () => {
  return (
    <div className="loading-indicator flex justify-center items-center py-4">
      <div className="spinner border-t-4 border-blue-400 w-6 h-6 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingIndicator;
