import flashsheet1 from "public/flashsheets/IMG_0835.jpeg";
import flashsheet2 from "public/flashsheets/IMG_1133.jpeg";
import flashsheet3 from "public/flashsheets/IMG_1136.jpeg";
import flashsheet4 from "public/flashsheets/IMG_1191.jpeg";
import flashsheet5 from "public/flashsheets/IMG_1193.jpeg";
import flashsheet6 from "public/flashsheets/IMG_1628.jpeg";
import flashsheet7 from "public/flashsheets/compressed-IMG_0964.jpeg";
import flashsheet8 from "public/flashsheets/compressed-IMG_0969.jpeg";
import flashsheet9 from "public/flashsheets/compressed-IMG_0974.jpeg";
import flashsheet10 from "public/flashsheets/compressed-IMG_1293.jpeg";
import flashsheet11 from "public/flashsheets/compressed-IMG_1298.jpeg";
import flashsheet12 from "public/flashsheets/compressed-IMG_1299.jpeg";
import flashsheet13 from "public/flashsheets/compressed-IMG_1345.jpeg";
import flashsheet14 from "public/flashsheets/compressed-IMG_1346.jpeg";
import flashsheet15 from "public/flashsheets/compressed-IMG_1389.jpeg";
import flashsheet16 from "public/flashsheets/compressed-IMG_1391.jpeg";
import flashsheet17 from "public/flashsheets/compressed-IMG_1533.jpeg";
import flashsheet18 from "public/flashsheets/compressed-IMG_1535.jpeg";
import flashsheet19 from "public/flashsheets/compressed-IMG_1601.jpeg";
import flashsheet20 from "public/flashsheets/compressed-IMG_1627.jpeg";
import flashsheet21 from "public/flashsheets/compressed-IMG_1628.jpeg";
import { StaticImageData } from "next/image";

/**
 * concatenate provided classnames into
 * a single string
 *
 * @param args array of classname strings
 * @returns single string with all classnames
 */
export function c(...args: string[]): string {
  return args.join(" ");
}

export const menuLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Flash",
    path: "/flash",
  },
  {
    name: "Newsletter",
    path: "/newsletter",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];

interface Flashsheet {
  imgSrc: StaticImageData;
  imgAlt: string;
}

export const flashsheets: Flashsheet[] = [
  { imgSrc: flashsheet1, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet2, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet3, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet4, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet5, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet6, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet7, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet8, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet9, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet10, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet11, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet12, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet13, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet14, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet15, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet16, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet17, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet18, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet20, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet21, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
  { imgSrc: flashsheet19, imgAlt: "a tattoo flashsheet by @rainfrog.gg" },
];
