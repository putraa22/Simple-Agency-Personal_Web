import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#01c686" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>Twenty2.Corp </span>
          DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>Create live segments and target the right people for message based on their behaviors.</p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image src="/img/Avocado.png" width="100%" height="100%" layout="fill" objectFit="cover" alt="intro" />
      </div>
    </div>
  );
};

export default Intro;
