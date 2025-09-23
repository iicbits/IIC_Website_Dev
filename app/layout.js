import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff",
  variable: "--font-cal-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IIC BIT Sindri",
  description: "Institution's Innovation Council, BIT Sindri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${calSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
