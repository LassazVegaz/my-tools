import { Box, Typography } from "@mui/material";
import { ClientComponent } from "./components";
import Link from "next/link";
import { isAuthenticated } from "@/lib/server/auth";
import { RedirectType, redirect } from "next/navigation";

export default function Home() {
  if (!isAuthenticated()) redirect("/auth", RedirectType.replace);

  return (
    <Box
      height="100vh"
      display="grid"
      gridTemplateRows="auto 1fr auto"
      bgcolor="background.default"
      position="relative"
      sx={{ transitionDuration: ".5s" }}
    >
      <Link
        href="/numbers"
        className="absolute right-2 top-2 border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
      >
        1
      </Link>

      <Typography variant="h5" textAlign="center" py={2}>
        Worked Hours of Last 40 Days
      </Typography>

      <ClientComponent />
    </Box>
  );
}
