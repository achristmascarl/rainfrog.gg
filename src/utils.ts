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
    name: "Book",
    path: "/book",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];
