import { c, flashsheets } from "../utils";
import PageHead from "@/components/PageHead";
import Image from "next/image";
import styles from "./index.module.scss";

export default function Flash() {
  return (
    <>
      <div className={c("content")}>
        <PageHead
          title="rainfroggg - Flash"
          description="Featured tattooo flash sheets"
        />
        <h1>flash sheets</h1>
        <p>check out some of my flash sheets~</p>
      </div>
      <div className={c(styles.FlashsheetsContainer)}>
        {flashsheets.map((flashsheet, i) => (
          <div key={i} className={c(styles.FlashsheetImgContainer)}>
            <Image
              src={flashsheet.imgSrc}
              alt={flashsheet.imgAlt}
              style={{ width: "100%", height: "auto" }}
              placeholder="blur"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}
