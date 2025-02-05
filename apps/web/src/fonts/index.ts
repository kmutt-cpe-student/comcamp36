import { Noto_Sans_Thai_Looped, Prompt } from "next/font/google";
import localFont from "next/font/local";

export const gameOfSquid = localFont({
  src: "./game-of-squids.ttf",
  display: "swap",
  variable: "--font-game-of-squid",
});

export const prompt = Prompt({
  weight: ["600", "500", "400", "300"],
  subsets: ["thai", "latin"],
});

export const notoSansThaiLooped = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["thai", "latin"],
});
