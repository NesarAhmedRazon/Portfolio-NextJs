import { Comfortaa, Poppins, Tiro_Bangla } from "next/font/google";
export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--poppins-font",
  display: "swap"
});

export const comfortaa = Comfortaa({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--comfortaa-font",
  display: "swap"
});

export const tiro = Tiro_Bangla({
  weight: ["400"],
  subsets: ["bengali", "latin"],
  style: ["normal"],
  variable: "--tiro-font",
  display: "swap"
});
// Add custom font form local file
export const sagor = {
  fontFamily: "Sagor",
  fontStyle: "normal",
  fontWeight: 400,
  src: `/fonts/sagor.ttf`,
  display: "swap",
  variable: "--sagor-font"
};
