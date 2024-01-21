"use client";
import { useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { WorkedHours } from "@prisma/client";

type ChartProps = {
  workedHours: WorkedHours[];
};

const formatWorkedHours = (workedHours: WorkedHours[]) =>
  workedHours.map((workedHour) => ({
    hours: workedHour.hours.toNumber(),
    dateLabel: `${workedHour.date.getDate()}/${workedHour.date.getMonth() + 1}`,
  }));

const Chart = (props: ChartProps) => {
  const theme = useTheme();

  return (
    <LineChart
      xAxis={[
        {
          scaleType: "point",
          dataKey: "dateLabel",
        },
      ]}
      series={[
        {
          dataKey: "hours",
          color: theme.palette.primary.main,
        },
      ]}
      dataset={formatWorkedHours(props.workedHours)}
      sx={{
        "& .MuiChartsAxis-root, & .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
          opacity: 0.5,
        },
      }}
    />
  );
};

export default Chart;
