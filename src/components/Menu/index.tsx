import styles from "./index.module.scss";
import { c, menuLinks } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Menu({ mobileMenuOpen }: { mobileMenuOpen: boolean }) {
  return (
    <div className={c(styles.Menu, mobileMenuOpen ? "" : styles.collapsed)}>
      {menuLinks.map((link, index) => {
        return <MenuItem key={index} label={link.name} href={link.path} />;
      })}
    </div>
  );
}
