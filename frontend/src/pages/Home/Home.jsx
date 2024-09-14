import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import BackToTopBtn from "../../components/BackToTopBtn/BackToTopBtn";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <BackToTopBtn/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
