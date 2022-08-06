import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo-2.svg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src={Logo} className={styles.image} />
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/Contact">CONTACT</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul onClick={() => setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={styles.menuItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
