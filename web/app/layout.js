import localFont from "next/font/local";
import "./globals.css";
import HealthMateChat from "@/components/HealthMateChat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HealthMate",
  description: "Centralized Healthcare Platform for Doctor and Patient",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
          <HealthMateChat/>
      </body>
    </html>
  );
}
