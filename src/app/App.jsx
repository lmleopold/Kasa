import "../app/base.scss";
import "../app/normalize.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/notFound/NotFound";
import SingleProduct from "../pages/singleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
