import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../Actions/productsAction";
import ProductItem from "../Components/Producs/ProductItem";
import Filter from "../Components/Filter/Filter";
import { useLocation } from "react-router-dom";
import PopUpSuccessAdd from "../Components/PopUps/PopUpSuccessAdd";

function ProductsWithSale() {
    const dispatch = useDispatch();
    const location = useLocation();
    const pathname = location.pathname

    const products = useSelector(state => state.products.products);
    const priceFrom = useSelector((state) => state.filter.filterPriceFrom);
    const priceTo = useSelector((state) => state.filter.filterPriceTo);
    const isShow = useSelector((state) => state.filter.showDiscount);
    const sortType = useSelector((state) => state.filter.sortType);

    const [newProducts, setNewProducts] = useState(products);

    useEffect(() => {
      dispatch(getProducts())
    }, []);

    useEffect(() => {
      let filtered = products;
  
      if(priceFrom){
          filtered = filtered.filter((product) => product.price >= Number(priceFrom));
  
      }
      if(priceTo){
          filtered = filtered.filter((product) => product.price <= Number(priceTo));
      }
  
      if(isShow) {
         filtered = filtered.filter((product) => product.discont_price !== null);
      }
      if(sortType === "desc"){
          filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (sortType === "asc"){
          filtered = filtered.sort((a, b) => b.price - a.price);
      }
  
      setNewProducts(filtered);
  
    }, [newProducts, priceFrom, priceTo, isShow, sortType])
  

    
    const productsWithSale = newProducts.filter(product => product.discont_price !== null);

  return (
    <div className="container category-container">
      <h1>Products with sale</h1>
      <Filter pathname={pathname}/>
      <div className="category__products-container">
        {
          productsWithSale.map(product => (
            <ProductItem key={product.id} product={product}/>
          ))
        }
      </div>
      <PopUpSuccessAdd />
    </div>
  )
}

export default ProductsWithSale