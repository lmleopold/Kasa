import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/notFound/NotFound";
import SingleProduct from "../pages/singleProduct/SingleProduct";

import "../app/base.scss";
import "../app/normalize.scss";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
