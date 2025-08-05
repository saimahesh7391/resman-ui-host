import { Suspense } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "./app/routes/AppRoutes";
 
function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Button variant='contained' color='primary'>
        Host App Button
      </Button>
      <ErrorBoundary fallback={<div>Error loading remote components</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
