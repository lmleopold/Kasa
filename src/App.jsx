import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";
import Header from "./components/Header";

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
