import Image from "next/image";
import styles from "../styles/IceCreamCard.module.css";

function IceCreamCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/cupscoops.png" alt="cream" width="500" height="500" />
      <h1 className={styles.title}>ICEEEEEEE</h1>
      <span className={styles.price}>$1999.00</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default IceCreamCard;
