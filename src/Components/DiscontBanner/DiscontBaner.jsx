import React, { useState } from 'react';
import gnom from "../../images/gnome_sale_baner.png";
import { useDispatch } from "react-redux";
import { getDiscount } from '../../Actions/actionDiscount';
import DiscountPopUp from '../PopUps/DiscountPopUp';
import { changeShowingDiscountTrue } from '../../Actions/popUpsAction';
import { useForm } from 'react-hook-form';

function DiscontBaner() {

  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");


  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const handleOnSubmit = (data) => {

    setPhone(data.phone);
    reset();

    const discount = {
      id: Date.now(),
      phone,
    }
 
    dispatch(getDiscount(discount))
    dispatch(changeShowingDiscountTrue());
  }

  return (
    <div>
      <section className="main__discount">
        <div className="container main__discount-container">
          <div className="main__discount-left">
            <img src={gnom} alt="discount-gnom" />
          </div>
          <div className="main__discount-right">
            <h3 className="discount__sale">5% off</h3>
            <p>on the first order</p>
            <form className='discount__form' onSubmit={handleSubmit(handleOnSubmit)}>
              <input type="tel" placeholder='+49' {...register("phone", {
                required: "Please, enter your number",
                pattern: {
                  value: /^(\+)((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
                  message: "Please enter number in international format"
                }
                })}/>
              <div>
                {errors?.phone && (errors?.phone?.message || <p>Please, enter your number</p>)}
            </div>
              <button className='discount__btn'>Get a discount</button>
            </form>
          </div>
        </div>
        <DiscountPopUp />
      </section>

    </div>
  )
}

export default DiscontBaner;
