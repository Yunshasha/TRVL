import React from "react";
import styles from "@/styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact_card}>
          <div className={styles.content}>
            <div className={styles.table}>
              <span>title</span>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </div>
            <div className={styles.table}>
              <span>title</span>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </div>
            <div className={styles.table}>
              <span>title</span>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          {" "}
          <span>&#169; copyright</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
