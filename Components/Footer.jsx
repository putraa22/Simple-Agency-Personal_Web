import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Twenty2.Corp CREATIVE.</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref>
            <span className={styles.linkText}>WORK WITH US </span>
            <Image src="/img/link.png" className={styles.link} width="40" height="40" alt="" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Jl. Pancoran Timur IIe, Jakarta Selatan <br /> INDONESIA
        </div>
        <div className={styles.cardItem}>
          CONTACT@Twenty2.Corp <br /> 123 00012 1231
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US
          <br />
          <span className={styles.icon}>
            <a href="#">
              <Image src="/img/facebook.png" width="30" height="30" alt="icon1" />
            </a>
          </span>
          <span className={styles.icon}>
            <a href="#">
              <Image src="/img/github.png" width="30" height="30" alt="icon2" />
            </a>
          </span>
          <span className={styles.icon}>
            <a href="#">
              <Image src="/img/instagram.png" width="30" height="30" alt="icon3" />
            </a>
          </span>
        </div>
        <div className={styles.cardItem}>
          <span>
            <Image src="/img/copyright.png" width="13" height="13" />
          </span>{" "}
          2022 Twenty2.Corp <br /> ALL RIGHT RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
