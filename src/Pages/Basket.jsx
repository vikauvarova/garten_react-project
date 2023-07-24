import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allProducts } from '../Actions/basketAction';
import ProductsInBasket from '../Components/Basket/ProductsInBasket';
import OrderDetails from '../Components/Basket/OrderDetails';
import OrderSuccess from '../Components/PopUps/OrderSuccess';


function Basket() {
    const dispatch = useDispatch();
    let basket = useSelector((state) => state.basket.basket);

    useEffect(() => {
        dispatch(allProducts());

    }, [basket]);

    if (basket.length === 0) return ( 
    <div className="basket-container container" >
        <h1>Shopping cart</h1>
        <Link to="/all-products" className='back-link'>
            <p>Back to the store</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4.49653 1.19763C4.37465 1.19763 4.26567 1.27146 4.21879 1.38396C4.17309 1.49763 4.20004 1.62654 4.28793 1.71208L10.0758 7.49998L4.28793 13.2879C4.20942 13.3629 4.17778 13.4754 4.2059 13.5797C4.23286 13.6851 4.31489 13.7672 4.42036 13.7941C4.52465 13.8222 4.63715 13.7906 4.71215 13.7121L10.7122 7.71208C10.8293 7.5949 10.8293 7.40505 10.7122 7.28787L4.71215 1.28787C4.6559 1.22927 4.57856 1.19763 4.49653 1.19763Z" fill="black"/>
            </svg>
        </Link>
        <div className="empty-container">
            <h3>Basket is empty</h3>

        </div>
        <OrderSuccess/>
    </div>)
    

  return (
    <div className="basket-container container" >
        <h1>Shopping cart</h1>
        <Link to="/all-products" className='back-link'>
            <p>Back to the store</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M4.49653 1.19763C4.37465 1.19763 4.26567 1.27146 4.21879 1.38396C4.17309 1.49763 4.20004 1.62654 4.28793 1.71208L10.0758 7.49998L4.28793 13.2879C4.20942 13.3629 4.17778 13.4754 4.2059 13.5797C4.23286 13.6851 4.31489 13.7672 4.42036 13.7941C4.52465 13.8222 4.63715 13.7906 4.71215 13.7121L10.7122 7.71208C10.8293 7.5949 10.8293 7.40505 10.7122 7.28787L4.71215 1.28787C4.6559 1.22927 4.57856 1.19763 4.49653 1.19763Z" fill="black"/>
            </svg>
        </Link>
        <div className="details-container">
            <div className="products-wrapper">
                {
                    basket.map((product) => 
                        <ProductsInBasket key={product.id} product={product}/>
                    )
                }

            </div>

            <OrderDetails/>
        </div>
            <OrderSuccess/>
    </div>
  )
}

export default Basket