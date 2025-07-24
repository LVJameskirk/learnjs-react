import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { ReviewForm } from "../review-form/ReviewForm";

import styles from "./restaurant.module.css";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!menu) {
    return null;
  }
  
  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews}/>
      <ReviewForm />
    </div>
  );
};