import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harry Potter Quiz",
  description: "Test your Potter knowledge!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Harry Potter Quiz</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
