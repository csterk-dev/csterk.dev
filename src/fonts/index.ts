import { Anta as AntaFont, Open_Sans } from "next/font/google";

/** Bebas Neue font family for headings. */
const Anta = AntaFont({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anta",
  display: "swap"
});

/** Open Sans font family for body text. */
const OpenSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap"
});

export { Anta, OpenSans };
