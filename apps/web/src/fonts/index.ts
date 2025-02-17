import { Gemunu_Libre, Noto_Sans_Thai_Looped, Prompt } from "next/font/google";
import localFont from "next/font/local";

export const gameOfSquid = localFont({
  src: "./game-of-squids.ttf",
  display: "swap",
  variable: "--font-game-of-squid",
});

export const prompt = Prompt({
  weight: ["600", "500", "400", "300"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
});

export const notoSansThaiLooped = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai-looped",
});

export const gemunuLibre = Gemunu_Libre({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-gemunu-libre",
});
