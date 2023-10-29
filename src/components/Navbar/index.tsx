import styles from "./index.module.scss";
import { c } from "@/utils";

export default function Navbar({ className }: { className: string }) {
  return (
    <nav className={c(className, styles.Navbar)}>
      <p>yo</p>
    </nav>
  );
}
