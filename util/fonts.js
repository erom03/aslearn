import { Roboto, Dela_Gothic_One, Salsa } from "next/font/google";

export const titleFont = Salsa({
  weight: ["400"],
  subsets: ["latin"],
});

export const textFont = Roboto({//try Gill Sans
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const testFont = Dela_Gothic_One({
    weight: ["400"],
    subsets: ["latin"],
  });