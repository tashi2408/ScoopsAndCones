import styles from "../styles/IceCreamList.module.css";
import IceCreamCard from "./IceCreamCard";

const IceCreamList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best ice cream in town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className={styles.wrapper}>
        <IceCreamCard />
        <IceCreamCard />
        <IceCreamCard />
        <IceCreamCard />
        <IceCreamCard />
        <IceCreamCard />
        <IceCreamCard />
        <IceCreamCard />
        <IceCreamCard />
        <IceCreamCard />
      </div>
    </div>
  );
};

export default IceCreamList;
