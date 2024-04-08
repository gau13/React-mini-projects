import React from "react";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more";
import LightDark from "./components/change-theme";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalPage from "./components/custom-modal/ModalPage";
import Github from "./components/github-profile";
import Autocomplete from "./components/autocomplete";
import Pagination from "./components/pagination";
import Test from "./components/pagination/test";

const App = () => {
  return (
    <div>
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} /> */}
      {/* <LoadMore /> */}
      {/* No typescript conversion for LightDark component(Confusing)
      <LightDark /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalPage /> */}
      {/* <Github /> */}
      {/* <Autocomplete /> */}
      <Test />
    </div>
  );
};

export default App;
