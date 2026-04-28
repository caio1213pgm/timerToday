import { themeMaterial, type ColDef, type Theme } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
import HeaderHistory from "../../components/layout/headerHistory";
import BoxContainer from "../../components/ui/BoxContainer";
import DefaultTemplate from "../../template/DefaultTemplate";
import style from "./history.module.css";

interface IRow {
  tarefa: string;
  duracao: string;
  data: string;
  satus: string;
  tipo: string;
}

export default function History() {
  const [rowData, setRowData] = useState<IRow[]>([
    {
      tarefa: "Estudar",
      duracao: "50",
      data: "27/04/2026",
      satus: "Completa",
      tipo: "Foco",
    },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "tarefa", headerName: "Tarefa" },
    { field: "duracao", headerName: "Duração" },
    { field: "data", headerName: "Data" },
    { field: "satus", headerName: "Status" },
    { field: "tipo", headerName: "Tipo" },
  ]);

  const myTheme = themeMaterial.withParams({
    backgroundColor: "var(--gray-700)",
    foregroundColor: "var(--text-default)",
    headerTextColor: "var(--gray-100)",
    headerBackgroundColor: "var(--gray-800)",
    oddRowBackgroundColor: "var(--gray-100)",
    headerColumnResizeHandleColor: "var(--gray-700)",
    headerColumnResizeHandleHeight: "100%",
    headerColumnResizeHandleWidth: 1,

    rowBorder: { style: "solid", width: 1, color: "var(--gray-900)" },
    columnBorder: { style: "solid", width: 1, color: "var(--gray-900)" },
    // borderColor: "var(--gray-100)",
    headerRowBorder: "var(--gray-500)",
    borderRadius: 10,
    borderColor: "var(--gray-900)",
  });

  const theme = useMemo<Theme | "legacy">(() => {
    return myTheme;
  }, []);
  return (
    <DefaultTemplate>
      <BoxContainer textId="history">
        <HeaderHistory />
        <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            className={style.ag_theme_alpine}
            theme={theme}
          />
        </div>
      </BoxContainer>
    </DefaultTemplate>
  );
}
