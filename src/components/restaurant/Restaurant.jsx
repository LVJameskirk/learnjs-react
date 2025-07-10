import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    return (
        <div>
          <h2>{name}</h2>
          <h3>Меню</h3>
          <Menu menu={menu} />
          {reviews?.length ? (
            <>
              <h3>Отзывы</h3>
              <Reviews reviews={reviews} />
            </>
          ) : <h3>Нет отзывов</h3>}
        </div>
      );
};