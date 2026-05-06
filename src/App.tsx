import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import AppRoutes from "./routes";
import "./styles/global.css";
import "./styles/theme.css";

const modules = [AllCommunityModule];

function App() {
  return (
    <>
      <AgGridProvider modules={modules}>
        <AppRoutes />
      </AgGridProvider>
    </>
  );
}

export default App;
