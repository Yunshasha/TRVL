import React from "react";
import styles from "@/styles/Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact_card}>
          <div className={styles.content}>
            <div className={styles.table}>
              <h2>About Us</h2>
              <Link href="/sign-up">How it works</Link>
              <Link href="/">Testimonials</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Inveshrefrs</Link>
              <Link href="/">Terms of Service</Link>
            </div>
            <div className={styles.table}>
              <h2>Contact Us</h2>
              <Link href="/">Contact</Link>
              <Link href="/">Support</Link>
              <Link href="/">Destinations</Link>
              <Link href="/">Sponsorships</Link>
            </div>
            <div className={styles.table}>
              <h2>Social Media</h2>
              <Link href="/">Instagram</Link>
              <Link href="/">Facebook</Link>
              <Link href="/">Youtube</Link>
              <Link href="/">Twitter</Link>
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
