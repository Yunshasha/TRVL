import Card from "@/components/Card";
import HeroSection from "@/components/HeroSection";
import styles from "@/styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />

      <div className={styles.card_container}>
        <Card />
      </div>
    </div>
  );
}
