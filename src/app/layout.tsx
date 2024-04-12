import "react-toastify/ReactToastify.min.css";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Tools",
  title: {
    default: "Lasindu's Tools",
    template: "%s - Tools",
  },
  description: "Tools of Lasindu Nuwanga",
  manifest: "/manifest.json",
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
