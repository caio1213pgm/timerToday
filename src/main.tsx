import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import TaskProvider from "./contexts/TaskContext.tsx";
import ToasterContainer from "./components/ui/ToasterContainer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskProvider>
      <ToasterContainer>
        <App />
      </ToasterContainer>
    </TaskProvider>
  </StrictMode>
);
