// resman-ui-host/src/App.tsx
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "./app/routes/AppRoutes";
import LoadingScreen from "./components/common/LoadingScreen";
import "./App.css";
import ErrorFallback from "./components/common/ErrorFallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingScreen />}>
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;