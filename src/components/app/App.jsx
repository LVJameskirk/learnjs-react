import { restaurants } from "../../constants/mock";
import { Layout } from "../layout/Layout";
import { RestaurantsPage } from  "../restaurants-page/RestaurantsPage";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage restaurants={restaurants} />
    </Layout>
  );
};