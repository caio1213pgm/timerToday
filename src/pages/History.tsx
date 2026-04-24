import type { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import BoxContainer from "../components/ui/BoxContainer";
import DefaultTemplate from "../template/DefaultTemplate";

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

export default function History() {
  const [rowData, setRowData] = useState<IRow[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "make", flex: 1 },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);
  return (
    <DefaultTemplate>
      <BoxContainer textId="history">
        <h1>Histórico</h1>
        <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      </BoxContainer>
    </DefaultTemplate>
  );
}
