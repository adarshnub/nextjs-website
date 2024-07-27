import { Poppins, Volkhov } from "next/font/google";


// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#reusing-fonts


export const poppins = Poppins({
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

// Volkhov
export const volkhov = Volkhov({
  weight: ["400", "700"],
  subsets: ["latin"]
});