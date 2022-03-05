import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/footerCone.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Taste that never fades from your taste buds ;)
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our restaurants</h1>
          <p className={styles.text}>
            1654 R. Mall Toad #304.
            <br /> Delhi, 110008
            <br /> (011) 2345-8765
          </p>
          <p className={styles.text}>
            1654 R. Mall Toad #304.
            <br /> Delhi, 110008
            <br /> (011) 2345-8765
          </p>
          <p className={styles.text}>
            1654 R. Mall Toad #304.
            <br /> Delhi, 110008
            <br /> (011) 2345-8765
          </p>
          <p className={styles.text}>
            1654 R. Mall Toad #304.
            <br /> Delhi, 110008
            <br /> (011) 2345-8765
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>workin hours</h1>
          <p className={styles.text}>
            MONDAY TILL FRIDAY
            <br /> 9:00 -22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 -23:00
          </p>
        </div>
      </div>
    </div>
  );
}
