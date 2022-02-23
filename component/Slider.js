import Image from "next/image";
import { useState } from "react";

import styles from "../styles/Slider.module.css";

export default function Slider() {
  const slides = [
    [
      "Scopes and Cones",
      "Feel inside cool with our delicious ice-creams",
      "/img/milkcone.png",
    ],
    ["a", "b", "/img/cupscoops.png"],
    ["c", "d", "/img/cones.png"],
  ];

  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "1") {
      setIndex(index !== 0 ? index - 1 : 2);
    } else {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("1")}
      >
        <Image src="/img/arrow.png" alt="img" layout="fill" />
      </div>

      <div className={styles.wrapper}>
        {slides.map((info, i) => (
          <div key={i} className={styles.wrapperContainer}>
            <div className={styles.text}>
              <h1 className={styles.head}>{info[0]}</h1>
              <p className={styles.subhead}>{info[1]}</p>
              <button className="cta">Buy Now</button>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={info[2]}
                alt="icecream"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("0")}
      >
        <Image src="/img/arrowr.png" alt="img" layout="fill" />
      </div>
    </div>
  );
}
