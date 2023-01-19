import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const ErrorFallback = () => {
    return <>There is an error</>;
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
