import React from "react";
import styles from "./index.module.scss";
import { c } from "@/utils";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { DesktopMenu } from "../Menu";
import SVG from "../SVG";

interface NavbarProps {
  className: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
  className,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavbarProps) {
  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav className={c(className, styles.Navbar)}>
      <div className={styles.MobileMenuButton}>
        <div
          className={c(styles.MenuIconWrapper, mobileMenuOpen ? "hidden" : "")}
        >
          <Bars3Icon
            className={c(styles.MenuIcon, styles.OpenIcon)}
            onClick={toggleMobileMenu}
          />
        </div>
        <div
          className={c(styles.MenuIconWrapper, mobileMenuOpen ? "" : "hidden")}
        >
          <XMarkIcon
            className={c(styles.MenuIcon, styles.CloseIcon)}
            onClick={toggleMobileMenu}
          />
        </div>
      </div>
      <h5>
        <SVG name="daisy-logo" className={styles.logoOrnament} />
        rainfroggg
      </h5>
      <DesktopMenu />
    </nav>
  );
}
