import { ImageSlider } from "./imageSlider";
import { Navigation } from "./Navigation/navigation";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {

  return (
    <main
      className="overflow-x-hidden"
      data-scroll-container
    >
      <ImageSlider />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
