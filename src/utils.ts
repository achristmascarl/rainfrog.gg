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
  imgPath: string;
  imgAlt: string;
}

export const flashsheets: Flashsheet[] = [
  {
    imgPath: "flashsheets/compressed-IMG_0964.jpeg",
    imgAlt: "a tattoo flashsheet by @rainfrog.gg",
  },
];
