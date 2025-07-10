export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>{dish.name}</li>
      ))}
    </ul>
  );
};