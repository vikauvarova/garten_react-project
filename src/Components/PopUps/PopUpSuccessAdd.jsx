import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeShowingSuccessAddFalse } from '../../Actions/popUpsAction';


function PopUpSuccessAdd() {

  const state = useSelector(state => state.popUps.addProductPopUp);

  const dispatch = useDispatch();

  if(!state) return null;

  return (
    <div className="pop-ups_container">
        <div className={`pop-up main__pop-up `}>
            <p>This product has been successfully added to your cart</p>
            <button className="close_btn" onClick={() => dispatch(changeShowingSuccessAddFalse())}>Close</button>
        </div>
    </div>
  )
}

export default PopUpSuccessAdd;