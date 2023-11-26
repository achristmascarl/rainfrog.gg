import styles from "./index.module.scss";
import { c, menuLinks } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SVG from "../SVG";

function MenuItem({ label, href }: { label: string; href: string }) {
  const pathname = usePathname();
  const isActivePath = pathname === href;
  const selectedClass = isActivePath ? styles.selected : "";

  return (
    <Link className={c(styles.MenuItem, selectedClass)} href={href}>
      {label}
    </Link>
  );
}

export function MobileMenu({ mobileMenuOpen }: { mobileMenuOpen: boolean }) {
  return (
    <div className={c(styles.Menu, mobileMenuOpen ? "" : styles.collapsed)}>
      {menuLinks.map((link, index) => (
        <MenuItem key={index} label={link.name} href={link.path} />
      ))}
      <Link
        className={c(styles.MenuItem)}
        href="https://www.instagram.com/rainfrog.gg"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SVG name="instagram-logo" className={styles.InstagramLogo} />{" "}
        @rainfrog.gg
      </Link>
    </div>
  );
}

export function DesktopMenu() {
  return (
    <div className={c(styles.DesktopMenu)}>
      {menuLinks.map((link, index) => (
        <MenuItem key={index} label={link.name} href={link.path} />
      ))}
      <Link
        className={c(styles.MenuItem, styles.InstagramLink)}
        title="@rainfrog.gg"
        href="https://www.instagram.com/rainfrog.gg"
        target="_blank"
        rel="noreferrer noopener"
      >
        <SVG name="instagram-logo" className={styles.InstagramLogo} />
      </Link>
    </div>
  );
}
