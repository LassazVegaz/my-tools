"use client";
import { useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";

const Chart = () => {
  const theme = useTheme();

  return (
    <LineChart
      xAxis={[
        {
          scaleType: "point",
          data: ["30/1", "31/1", "1/2", "2/2", "3/2", "4/2"],
        },
      ]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          color: theme.palette.primary.main,
        },
      ]}
      sx={{
        "& .MuiChartsAxis-root, & .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
          opacity: 0.5,
        },
      }}
    />
  );
};

export default Chart;
