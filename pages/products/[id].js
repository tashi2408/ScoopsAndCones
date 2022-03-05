import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
  const icecream = {
    id: 1,
    img: "/img/berryblast.png",
    name: "berry blast",
    price: [19.34, 23.0, 27.9],
    desc: "bla bla vla blljhuiguy, hvkbvhvhg bkjbjkef lorennm kikn ipsem",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={icecream.img}
            layout="fill"
            alt={icecream.name}
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{icecream.name}</h1>
        <span className={styles.price}> $ {icecream.price[size]}</span>
        <p className={styles.desc}>{icecream.desc}</p>
        <h3>Choose your quantity</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/cone.png" layout="fill" alt="cone" />
            <span className={styles.number}>Cone</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/cup.png" layout="fill" alt="cup" />
            <span className={styles.number}>Cup</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/tub.png" layout="fill" alt="tub" />
            <span className={styles.number}>Tub</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose Additional toppings</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="chocosyrup"
              name="chocosyrup"
              className={styles.checkbox}
            />
            <label htmlFor="chocosyrup">Choco Syrup</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="sprinkles"
              name="sprinkles"
              className={styles.checkbox}
            />
            <label htmlFor="chocosyrup">Sprinkles</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="chocochips"
              name="chocochips"
              className={styles.checkbox}
            />
            <label htmlFor="chocosyrup">Choco Chips</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="nuts"
              name="nuts"
              className={styles.checkbox}
            />
            <label htmlFor="chocosyrup">Butterscotch Nuts</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className="cta">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
