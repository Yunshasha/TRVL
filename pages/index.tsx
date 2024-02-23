import HeroSection from "@/components/HeroSection";
import styles from "@/styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />

      <div className={styles.card_container}>
        this is product
        <div>this is product part</div>
        <div>
          <span>title</span>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </div>
        <div>
          <span>title</span>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </div>
        <div>
          <span>title</span>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </div>
      </div>
    </div>
  );
}
