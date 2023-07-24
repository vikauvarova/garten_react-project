import React from 'react'
import CounterComponent from '../Counter/CounterComponent'
import { useDispatch} from 'react-redux'
import { deleteFromBasket } from '../../Actions/basketAction';

function ProductsInBasket(product) {
    const dispatch = useDispatch();


  return (
      <div className="basket__product-wrapper">
        <img src={`http://localhost:3333/${product.product.image}`} alt="" />
        <div className="title-wrapper">
            <h2>{product.product.title}</h2>
            <CounterComponent product={product.product} />
        </div>
        <div className='right-item'>

        <div className="product__price-wrapper">
                <p className="product__discont-price">{product.product.discont_price ? product.product.discont_price : product.product.price} $</p>
                <p className="product__price">{product.product.discont_price ? `${product.product.price}$` : null} </p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={() => dispatch(deleteFromBasket(product.product.id))}>
          <path d="M8.6438 7.79999L7.80005 8.64374L14.175 15L7.80005 21.3562L8.6438 22.2L15.0375 15.8437L21.4125 22.2L22.2563 21.3562L15.8813 15L22.2563 8.64374L21.4125 7.79999L15.0375 14.1562L8.6438 7.79999Z" fill="black"/>
        </svg>
        </div>
    </div>
  )
}

export default ProductsInBasket