import { Box, Typography } from "@mui/material";
import { ClientComponent } from "./components";

export default function Home() {
  return (
    <Box
      height="100vh"
      display="grid"
      gridTemplateRows="auto 1fr auto"
      bgcolor="background.default"
      sx={{ transitionDuration: ".5s" }}
    >
      <Typography variant="h5" textAlign="center" py={2}>
        Worked Hours of Last 40 Days
      </Typography>

      <ClientComponent />
    </Box>
  );
}
