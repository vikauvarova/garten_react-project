import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Actions/productsAction';
import ProductItem from '../Producs/ProductItem';
import { allProducts } from '../../Actions/basketAction';
import PopUpSuccessAdd from '../PopUps/PopUpSuccessAdd';

function SaleBlock() {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products.products)
    const productsWithSale = products.filter(product => product.discont_price !== null);

    useEffect(() => {
        dispatch(getProducts());
        dispatch(allProducts())
    }, [])




  return (
    <div>
        <div className="container main__sale-block">
            <h2>Sale</h2>
            <div className="sale__sale-products">
                {productsWithSale.slice(0, 4).map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
            <PopUpSuccessAdd />
        </div>
    </div>
  )
}

export default SaleBlock;