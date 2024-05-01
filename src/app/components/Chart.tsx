"use client";
import { useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { WorkedHours } from "@prisma/client";
import { useMemo } from "react";

type ChartProps = {
  chartData: WorkedHours[];
};

const formatWorkedHours = (workedHours: WorkedHours[]) =>
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
          tickLabelStyle: {
            fill: "rgb(98 98 201)",
          },
        },
      ]}
      yAxis={[
        {
          tickLabelStyle: {
            fill: "rgb(98 98 201)",
          },
        },
      ]}
      series={[
        {
          dataKey: "hours",
          color: theme.palette.primary.main,
        },
      ]}
      dataset={dataset}
    />
  );
};

export default Chart;
