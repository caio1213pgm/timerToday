import dayjs from "dayjs";
export const dateComparator = (date1: string, date2: string): number => {
  if (!date1 && !date2) return 0;
  if (!date1) return -1;
  if (!date2) return 1;

  const parseDate = (dateStr: string) => {
    // Expected format: "DD/MM/YYYY - HH/mm"
    // Converting to "YYYY-MM-DD HH:mm" for dayjs native parsing
    const [datePart, timePart] = dateStr.split(" - ");
    const [day, month, year] = datePart.split("/");
    return dayjs(`${year}-${month}-${day}T${timePart.replace("/", ":")}`);
  };

  const d1 = parseDate(date1);
  const d2 = parseDate(date2);

  if (!d1.isValid()) return -1;
  if (!d2.isValid()) return 1;

  return d1.valueOf() - d2.valueOf();
};
