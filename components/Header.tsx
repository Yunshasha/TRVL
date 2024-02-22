import React, { useState } from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.nav_logo}>
          <Link href="/">
            <span>TRVL</span>
            <TravelExploreIcon />
          </Link>
        </div>

        <ul className={styles.navMenu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/products">Product</Link>
          </li>
          <li>
            <Link href="/signin">Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
