"use client";
import { useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";

type ChartProps = {
  data: { dateLabel: string; hours: number }[];
};

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
      dataset={props.data}
      sx={{
        "& .MuiChartsAxis-root, & .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
          opacity: 0.5,
        },
      }}
    />
  );
};

export default Chart;
