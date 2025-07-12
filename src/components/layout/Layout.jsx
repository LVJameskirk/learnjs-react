export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Рестораны</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h2>Подвал ресторана</h2>
      </footer>
    </>
  );
};