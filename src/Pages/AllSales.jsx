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

    useEffect(() => {
      dispatch(getProducts())
    }, []);


    const priceFrom = useSelector((state) => state.filter.filterPriceFrom);
    const priceTo = useSelector((state) => state.filter.filterPriceTo);
    const sortType = useSelector((state) => state.filter.sortType);

    const [filteredProducts, setFilteredProducts] = useState(products);


    useEffect(() => {
      let filtered = products;
  
      if(priceFrom){
          filtered = filtered.filter((product) => product.price >= Number(priceFrom));
  
      }
      if(priceTo){
          filtered = filtered.filter((product) => product.price <= Number(priceTo));
      }

      setFilteredProducts(filtered);
  
    }, [priceFrom, priceTo, sortType])
  
      // sorted by sortType
  useEffect(() => {
    if(filteredProducts.length > 0 ){
      let sortFilteredProducts = [...filteredProducts];
      if (sortType === "asc") {
        sortFilteredProducts.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceA - priceB;
        });

      } else if (sortType === "desc") {
        sortFilteredProducts.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceB - priceA;
        });

      }
      setFilteredProducts(sortFilteredProducts);

    } else {
      let sortFilteredProducts = [...products];
      if (sortType === "asc") {
        sortFilteredProducts.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceA - priceB;
        });
      } else if (sortType === "desc") {
        sortFilteredProducts.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceB - priceA;
        });
      }
      setFilteredProducts(sortFilteredProducts);
    }
  }, [sortType]);
    
  let productsWithSale 
  if(filteredProducts.length > 0){
    productsWithSale = filteredProducts.filter(product => product.discont_price !== null);
  } else {
    productsWithSale = products.filter(product => product.discont_price !== null);
  }
    

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