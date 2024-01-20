import { Box } from "@mui/material";
import { AddForm, Chart } from "./components";
import { workedHoursService } from "@/services";

const getChartData = async () => {
  const chartData = await workedHoursService.getAllWorkedHours();

  return chartData.map((d) => {
    const dateLabel = `${d.date.getMonth() + 1}/${d.date.getDate()}`;

    return {
      dateLabel,
      hours: d.hours.toNumber(),
    };
  });
};

export default async function Home() {
  const chartData = await getChartData();

  return (
    <Box height="100vh" display="grid" gridTemplateRows="1fr auto">
      <Box display="flow-root" alignItems="center" py={10} px={30}>
        <Chart data={chartData} />
      </Box>

      <AddForm />
    </Box>
  );
}
