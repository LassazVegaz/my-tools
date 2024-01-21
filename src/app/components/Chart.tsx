"use client";
import { useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { useMemo } from "react";
import { ChartData } from "../helpers";

type ChartProps = {
  chartData: ChartData;
};

const formatWorkedHours = (workedHours: ChartData) =>
  workedHours.map((workedHour) => ({
    hours: workedHour.hours,
    dateLabel: `${workedHour.date.getDate()}/${workedHour.date.getMonth() + 1}`,
  }));

const Chart = (props: ChartProps) => {
  const theme = useTheme();

  const dataset = useMemo(
    () => formatWorkedHours(props.chartData),
    [props.chartData]
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
