import React, { useEffect, useState } from 'react';

import Filter from '../Components/Filter/Filter';

import { getProductsFromCategory, getSingleCategory } from "../Actions/SingleCategoryAction";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../Components/Producs/ProductItem';
import PopUpSuccessAdd from '../Components/PopUps/PopUpSuccessAdd';


function ProductsFromCategory() {
  const dispatch = useDispatch();

let {categoryId} = useParams();


useEffect(() => {
  dispatch(getSingleCategory(categoryId));
  dispatch(getProductsFromCategory(categoryId))
}, [categoryId]);
  
const category = useSelector(state => state.singleCategory.category);
const products = useSelector(state => state.singleCategory.products)
const priceFrom = useSelector((state) => state.filter.filterPriceFrom);
const priceTo = useSelector((state) => state.filter.filterPriceTo);
const isShow = useSelector((state) => state.filter.showDiscount);
const sortType = useSelector((state) => state.filter.sortType);
const [newProducts, setNewProducts] = useState(products);



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
    
    if(sortType === "asc"){
        filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "desc"){
        filtered = filtered.sort((a, b) => b.price - a.price);
    } 


    setNewProducts(filtered);

  }, [priceFrom, priceTo, isShow, sortType])

  return (
    <div className="container category-container">
      <h1>{category.title}</h1>
      <Filter />
      <div className="category__products-container">
        {
          newProducts.map(product => (
            <ProductItem key={product.id} product={product}/>
          ))
        }
      </div>
      <PopUpSuccessAdd />
    </div>
  )
}

export default ProductsFromCategory