import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/NavBar/Nav";
import Contacts from "./Components/Contact/Contacts";
import HomePage from "./Pages/HomePage";
import AllProducts from "./Pages/AllProducts";
import AllSales from "./Pages/AllSales";
import AllCategories from "./Pages/AllCategories";
import SingleCategory from "./Pages/SingleCategory";
import SingleProduct from "./Pages/SingleProduct";
import Basket from "./Pages/Basket";
import NotFoundPage from "./Pages/NotFoundPage";
import Breadcrumb from "./Components/Breadcrumbs/Breadcrumb";

function App() {
  return (
    <Router>
    <Nav />
    <Breadcrumb />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/all-sales" element={<AllSales />} />
      <Route path="/categories" element={<AllCategories />} />
      <Route path="/categories/:categoryId" element={<SingleCategory />}/>
      <Route path="/products/:productId" element={<SingleProduct />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    <Contacts />
  </Router>
  );
}

export default App;