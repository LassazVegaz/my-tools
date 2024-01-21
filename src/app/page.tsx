import { Box } from "@mui/material";
import { ClientComponent } from "./components";

export default function Home() {
  return (
    <Box
      height="100vh"
      display="grid"
      gridTemplateRows="1fr auto"
      bgcolor="background.default"
      sx={{ transitionDuration: ".5s" }}
    >
      <ClientComponent />
    </Box>
  );
}
