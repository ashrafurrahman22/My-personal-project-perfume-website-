import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
        {/* 
      <h2>Make it easy man</h2>
      <h1>this will be cart</h1> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
