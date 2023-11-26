import { c } from "../utils";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={c("content", styles.HomePage)}>
      <h1>home</h1>
      <p>sick</p>
    </div>
  );
}
