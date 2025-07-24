import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews?.length ? (
        <>
          <h3 className={styles.h3}>Отзывы</h3>
          <ul className={styles.ul}>
          {reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
            ))}
          </ul>
        </>
      ) : <h3>Нет отзывов</h3>
      }
    </>
  );
};