import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src="/img/logo.png" alt="logo" height="50" width="50" />
        </div>
        <div className={styles.text}>Scoops & Cones</div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact Us</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="cart" height="30" width="30" />
          <div className={styles.counter}>3</div>
        </div>
      </div>
    </div>
  );
}
