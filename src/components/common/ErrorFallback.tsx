import React from "react";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="p-4 border border-red-400 bg-red-100 rounded-lg text-red-800">
      <h2 className="text-lg font-semibold">Something went wrong.</h2>
      <pre className="mt-2 whitespace-pre-wrap break-all text-sm">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorFallback;
