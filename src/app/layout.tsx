import type { Metadata } from "next";
import { Poppins, Roboto_Serif } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Les Alpes D’Azur | Holiday Accommodation",
  description:
    "Your retreat in the heart of the mountains — holiday accommodation in the French Southern Alps, Alpes-Maritimes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
