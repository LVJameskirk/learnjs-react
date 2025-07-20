import { restaurants } from "../../constants/mock";
import { Layout } from "../layout/Layout";
import { RestaurantsPage } from  "../restaurants-page/RestaurantsPage";

import "./reset.css";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage restaurants={restaurants} />
    </Layout>
  );
};