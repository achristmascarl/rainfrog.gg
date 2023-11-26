import { c } from "../utils";
import styles from "./index.module.scss";
import PageHead from "@/components/PageHead";

export default function Home() {
  return (
    <div className={c("content", styles.HomePage)}>
      <PageHead
        title="rainfroggg"
        description="a private tattoo studio in nyc"
      />
      <h1>home</h1>
      <p>sick</p>
    </div>
  );
}
