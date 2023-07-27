import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { addToBasket } from "../Actions/basketAction";
import { changeShowingSuccessAddTrue } from '../Actions/popUpsAction';
import PopUpSuccessAdd from "../Components/PopUps/PopUpSuccessAdd";
import { getSingleProduct } from '../Actions/productsAction';

function SingleProduct() {
    let {productId} = useParams();

    // const [product, setProduct] = useState([]);
    // const [error, setError] = useState(null);

    const product = useSelector(state => state.products.product)

    const dispatch = useDispatch();

    const handleClickToCart = (product) => {
        dispatch(addToBasket(product));
        dispatch(changeShowingSuccessAddTrue())
    }


    useEffect (() => {
        // try {
        //     axios.get(`http://localhost:3333/products/${productId}`).then (res => setProduct(res.data[0]));
        // } catch (err) {
        //     setError(err.messege)
        //     alert(error);
        // }
        dispatch(getSingleProduct(productId))
    }, [productId]);



  return (
    <div className="container product-container">
        <h1>{product.title}</h1>
        <div className="product-wrapper">
            <img src={`http://localhost:3333${product.image}`} alt={product.title} />
            <div className="product__info">
                <div className="product__price-wrapper">
                    <p className="product__discont-price">{product.discont_price ? product.discont_price : product.price} $</p>
                    <p className="product__price">{product.discont_price ? `${product.price}$` : null} </p>
                    <p className={`product__sale-procent ${product.discont_price !== null ? "show-discount" : "hide-discount"} `} >- {Math.round(100 - (product.discont_price * 100 / product.price ))} %</p>
                </div>
                <button className="add-to-cart" onClick={() => handleClickToCart(product)}> To cart</button>
                <div className="linie"></div>
                <div className="product__decription-wrapper">
                    
                    <h3>Description</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
        <PopUpSuccessAdd />
    </div>
  )
}

export default SingleProduct