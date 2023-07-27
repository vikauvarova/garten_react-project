import React, { useEffect, useState } from 'react';
import axios from "axios"

import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";

import { clearBasket } from '../../Actions/basketAction';
import {orderSuccess} from "../../Actions/popUpsAction";

function OrderDetails() {
    const [sum, setSum] = useState(0);
  
    const basket = useSelector(state => state.basket.basket);
    const dispatch = useDispatch();


  // calculate total price
    useEffect(() => {
      const count = basket.reduce((acc, product) => {
        if(product.discont_price) {
          return acc + product.discont_price * product.quantity
        }  else {
          return acc + product.price * product.quantity
        }
        
      }, 0);
      setSum(count);
    }, [basket]) 

    // validate and requered form
    const {
      register,
      handleSubmit,
      formState: {errors},
      reset,
    } = useForm();

    // send data
  const sendOrder = async (order) => {
    try {
      const response = await axios.post("http://localhost:3333/order/send", order);
      if(response.status === 200) {
        dispatch(orderSuccess());
      }
      return response.data;
    }
    catch (err) {
      alert(err.message)
    }
  };
  

    const handleSendOrder = async (data) => {
      const newOrder = {
        id: Date.now(),
        phone: data.phone,
        order: basket
      }
      sendOrder(newOrder)
      localStorage.clear();
      reset();
      dispatch(clearBasket());
    }
    

  return (
    <div className="order-details__container">
        <h3>Order details</h3>
        <div className="price-wrapper">
            <p>Total</p>
            <p>{`${sum} $`}</p>
        </div>
        <form className='form__make-an-order' onSubmit={handleSubmit(handleSendOrder)}>
                <input type="tel" placeholder='Phone number' {...register("phone", {
                required: "Please, enter your number",
                pattern: {
                  value: /^(\+)((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
                  message: "Please enter the number in international format"
                }
                })}/>
            <div>
                {errors?.phone && (errors?.phone?.message || <p>Please, enter your number</p>)}
            </div>
                <button>Order</button>
        </form>
    </div>
  )
}

export default OrderDetails