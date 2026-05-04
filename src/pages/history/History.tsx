import { themeMaterial, type ColDef, type Theme } from "ag-grid-community";
import { useMemo } from "react";
import HeaderHistory from "../../components/layout/headerHistory";
import BoxContainer from "../../components/ui/BoxContainer";
import DefaultTemplate from "../../template/DefaultTemplate";
import style from "./history.module.css";
import { useTask } from "../../hooks/useTask";
import { formatTime } from "../../utils/formatTime";
import { AgGridReact } from "ag-grid-react";
import { AG_GRID_LOCALE_BR } from "@ag-grid-community/locale";
import getStatusTask from "../../utils/getStatusTask";

interface IRow {
  id: string | number;
  tarefa: string;
  duracao: string;
  data: string;
  satus: string;
  tipo: string;
}

const labelTypeTask = {
  work: "Foco",
  shortBreak: "Descanso",
  longBreak: "Descanso Longo",
};

export default function History() {
  const { taskState } = useTask();
  const rows: IRow[] =
    taskState?.tasks?.map((task) => {
      return {
        id: task.id,
        tarefa: task.name,
        duracao: formatTime(task.duration),
        data:
          task.completeDate?.toString() ||
          task.startDate.toString() ||
          task.interruptDate.toString(),
        satus: getStatusTask(task, taskState.activeTask),
        tipo: labelTypeTask[task.type],
      };
    }) || [];

  // Column Definitions: Defines the columns to be displayed.
  const colDefs: ColDef<IRow>[] = [
    { field: "tarefa", headerName: "Tarefa" },
    { field: "duracao", headerName: "Duração" },
    {
      field: "data",
      headerName: "Data",
    },
    { field: "satus", headerName: "Status", width: 169 },
    { field: "tipo", headerName: "Tipo", width: 169 },
  ];

  const myTheme = themeMaterial.withParams({
    backgroundColor: "var(--gray-700)",
    foregroundColor: "var(--text-default)",
    headerTextColor: "var(--gray-100)",
    headerBackgroundColor: "var(--gray-800)",
    headerColumnResizeHandleColor: "var(--gray-700)",
    headerColumnResizeHandleHeight: "100%",
    headerColumnResizeHandleWidth: 1,

    rowBorder: { style: "solid", width: 1, color: "var(--gray-900)" },
    // columnBorder: { style: "solid", width: 1, color: "var(--gray-900)" },
    // // borderColor: "var(--gray-100)",
    headerRowBorder: "var(--gray-500)",
    // borderRadius: 10,
    // borderColor: "var(--gray-900)",
  });

  const theme = useMemo<Theme | "legacy">(() => {
    return myTheme;
  }, []);
  return (
    <DefaultTemplate>
      <BoxContainer textId="history">
        <HeaderHistory />
        <div className={style.ag_theme_alpine}>
          <AgGridReact
            rowData={rows}
            columnDefs={colDefs}
            className={style.ag_theme_alpine}
            theme={theme}
            localeText={AG_GRID_LOCALE_BR}
          />
        </div>
      </BoxContainer>
    </DefaultTemplate>
  );
}
