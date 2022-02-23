import Head from "next/head";
import Image from "next/image";
import Slider from "../component/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scoops&Cones</title>
        <meta name="description" content="An IceCream Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
    </div>
  );
}
