import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    {restaurants.map(({ id, name, menu, reviews }) => (
      <div key={id}>
        <h2>{name}</h2>
        <h3>Меню</h3>
        <ul>
          {menu.map((dish) => (
            <li key={dish.id}>{dish.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
          <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
