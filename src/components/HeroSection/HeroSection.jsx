import Image from "next/image";
import styles from "./herosection.module.scss";

const HeroSection = ({ children, src, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Image
        fill
        sizes="100vw"
        src={src}
        alt="Balcão Cristal"
        className={styles.image}
        priority
      />
      <div className={styles.bodyContainer}>{children}</div>
    </div>
  );
};

export default HeroSection;
