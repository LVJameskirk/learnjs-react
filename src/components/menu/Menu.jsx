import { Dish } from "./dish/Dish";

import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3 className={styles.h3}>Меню</h3>
      <ul className={styles.ul}>
        {menu.map((dish) => (
          <li key={dish.id}><Dish dish={dish}/></li>
        ))}
      </ul>
    </>
  );
};