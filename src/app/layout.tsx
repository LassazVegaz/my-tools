import "react-toastify/ReactToastify.min.css";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

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
      <body className={inter.className + " bg-black text-white"}>
        {children}

        <ToastContainer />
      </body>
    </html>
  );
}
