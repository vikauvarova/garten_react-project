import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { changeShowingSuccessAddTrue } from "../../Actions/popUpsAction";
import { addToBasket } from "../../Actions/basketAction";



function ProductItem({product}) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate(`/products/${product.id}`)
    }

    const handleClickToCart = (product) => {
        dispatch(addToBasket(product));
        dispatch(changeShowingSuccessAddTrue())
    }

    const [isShow, setIsShow] = useState(false);

    return (
        <div className="product-item-wrapper" onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)} >
            <img src={`http://localhost:3333/${product.image}`} alt={product.title} />
            <div className="product__price-wrapper">
                <p className="product__discont-price">{product.discont_price ? product.discont_price : product.price} $</p>
                <p className="product__price">{product.discont_price ? `${product.price}$` : null} </p>
                <p className={`product__sale-procent ${product.discont_price !== null ? "show-discount" : "hide-discount"} `}> - {Math.round(100 - (product.discont_price * 100 / product.price ))} %</p>
            </div>
            <p className="product__name" onClick={handleProductClick}>{product.title}</p>
            <button className={`category__add-to-cart-btn ${isShow ? "show-btn" : "hide-btn"}`} onClick={() => handleClickToCart(product)}>Add to card</button>
        </div>
    )
}

export default ProductItem