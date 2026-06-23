import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Error boundary for uncaught errors
if (import.meta.env.PROD) {
  window.addEventListener("error", (event) => {
    console.error("Uncaught error:", event.error);
    // Send to error tracking service (e.g., Sentry)
  });

  window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);
    // Send to error tracking service (e.g., Sentry)
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element with id 'root'");
}

createRoot(rootElement).render(<App />);
