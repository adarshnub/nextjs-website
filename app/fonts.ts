import { Poppins, Volkhov } from "next/font/google";
import localFont from 'next/font/local'



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


 
// Font files can be colocated inside of `pages`
export const digital = localFont({ src: "../lib/fonts/DigitalNumbers-Regular.woff" })