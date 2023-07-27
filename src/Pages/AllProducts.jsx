import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductItem from '../Components/Producs/ProductItem';
import { getProducts } from '../Actions/productsAction';
import Filter from '../Components/Filter/Filter';
import PopUpSuccessAdd from "../Components/PopUps/PopUpSuccessAdd";

function AllProducts() {

  const dispatch = useDispatch();
 
  // get all products form reducer
  let allProducts = useSelector((state) => state.products.products);
  

  useEffect(() => {
    dispatch(getProducts());  
  }, [])

  // get filter's states
  const priceFrom = useSelector((state) => state.filter.filterPriceFrom);
  const priceTo = useSelector((state) => state.filter.filterPriceTo);
  const isShow = useSelector((state) => state.filter.showDiscount);
  const sortType = useSelector((state) => state.filter.sortType);
  
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  //filtered
  useEffect(() => {
    let filtered = allProducts;

    if(priceFrom){
        filtered = filtered.filter((product) => product.price >= Number(priceFrom));

    }
    if(priceTo){
        filtered = filtered.filter((product) => product.price <= Number(priceTo));
    }

    if(isShow) {
       filtered = filtered.filter((product) => product.discont_price !== null);
    }


    setFilteredProducts(filtered);

  }, [priceFrom, priceTo, isShow, sortType])

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
      let sortFilteredProducts = [...allProducts];
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

  return (
    <div className="container category-container">
      <h1>All products</h1>
      <Filter/>
      <div className="category__products-container">
        { filteredProducts.length > 0 ? 
            filteredProducts.map(product => (
            <ProductItem key={product.id} product={product}/>
          )) :
          allProducts.map(product => (
            <ProductItem key={product.id} product={product}/>
          )) 
        }
      </div>
      <PopUpSuccessAdd />
    </div>
  )
}

export default AllProducts;