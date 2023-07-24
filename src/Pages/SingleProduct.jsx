import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { addProduct } from '../Actions/basketAction';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SingleProduct() {
    let {productId} = useParams();

    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    function addToBasket (id) {
        // dispatch(addProduct(id));
    }

    useEffect (() => {
        try {
            axios.get(`http://localhost:3333/products/${productId}`).then (res => setProduct(res.data[0]));
        } catch (err) {
            setError(err.messege)
        }
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
                <button className="add-to-cart" onClick={() => addToBasket(product.id)}> To cart</button>
                <div className="linie"></div>
                <div className="product__decription-wrapper">
                    <h3>Description</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct