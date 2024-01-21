import "react-toastify/ReactToastify.min.css";
import CssBaseline from "@mui/material/CssBaseline";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work Times",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <CssBaseline />

          {children}

          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
