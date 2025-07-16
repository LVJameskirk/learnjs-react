import { Counter } from "../counter/Counter";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setName, setReview, incrementRating, decrementRating, clear } = useForm();

  const { name, review, rating } = form;

  return (
    <>
      <h3>Оставьте отзыв: </h3>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <div>
          <label htmlFor="name">Имя</label><br />
          <input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="reviewText">Отзыв</label><br />
          <input type="text" name="reviewText" id="reviewText" value={review} onChange={(event) => setReview(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Оцените ресторан</label>
          <Counter 
            value = {rating}
            decrement = {decrementRating}
            increment = {incrementRating}
          />
        </div>
        <div>
          <button onClick={clear}>Clear</button>
        </div>
      </form>
    </>
  );
};