import styles from "@/styles/Hero.module.css";

function HeroSection() {
  return (
    <div className={styles.hero_container}>
      <video
        src="/videos/video-1.mp4"
        autoPlay
        loop
        muted
        className={styles.video}
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default HeroSection;
