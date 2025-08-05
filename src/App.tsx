// resman-ui-host/src/App.tsx
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "./app/routes/AppRoutes";
import LoadingScreen from "./components/common/LoadingScreen";
import "./App.css";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error loading remote components</div>}>
      <Suspense fallback={<LoadingScreen />}>
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;