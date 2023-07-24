import { changeShowingDiscountFalse } from '../../Actions/popUpsAction';
import {useDispatch, useSelector} from "react-redux";

function DiscountPopUp() {

  const dispatch = useDispatch();

  const state = useSelector(state => state.popUps.getDiscountPopUp)

  return (
    <div className="pop-ups_container">
      <div className={`pop-up ${state ? "" : "hide_pop-up" }`}>
        <p>Your discount will be applied automatically when you order.</p> 
        <button className="close_btn" onClick={() => dispatch(changeShowingDiscountFalse())}>Thanks</button>
      </div>
    </div>

  )
}

export default DiscountPopUp;