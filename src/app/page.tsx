import { Box } from "@mui/material";
import { AddForm, Chart } from "./components";

export default function Home() {
  return (
    <Box height="100vh" display="grid" gridTemplateRows="1fr auto">
      <Box display="flow-root" alignItems="center" py={10} px={30}>
        <Chart />
      </Box>

      <AddForm />
    </Box>
  );
}
