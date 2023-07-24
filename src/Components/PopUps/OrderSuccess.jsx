import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { orderSuccessClose } from '../../Actions/popUpsAction';


function OrderSuccess() {

  const success = useSelector(state => state.popUps.orderSuccess);

  const dispatch = useDispatch();

  if(!success) { return null}

  
  return (
    <div className="pop-ups_container">
        <div className={`pop-up main__pop-up `}>
            <p>Order success</p>
            <button className="close_btn" onClick={() => dispatch(orderSuccessClose())}>Close</button>
        </div>
    </div>
  )
}

export default OrderSuccess;