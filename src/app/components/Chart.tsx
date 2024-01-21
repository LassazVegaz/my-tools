"use client";
import { useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { WorkedHours } from "@prisma/client";
import { useMemo } from "react";

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

  const dataset = useMemo(
    () => formatWorkedHours(props.workedHours),
    [props.workedHours]
  );

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
      dataset={dataset}
      sx={{
        "& .MuiChartsAxis-root, & .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
          opacity: 0.5,
        },
      }}
    />
  );
};

export default Chart;
