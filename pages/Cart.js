import styles from "../styles/Cart.modules.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.left}>
        <div className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Cart;
