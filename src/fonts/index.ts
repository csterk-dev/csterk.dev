import { Anta as AntaFont, Open_Sans } from "next/font/google";

const Anta = AntaFont({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anta",
  display: "swap"
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap"
});

export { Anta, OpenSans };
