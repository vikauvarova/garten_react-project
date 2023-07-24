import React from 'react';
import { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import Logo from "../../images/logo.png";
import basket from "../../images/basket.png";
import burger from "../../images/icons-burger-menu.png";
import {useSelector} from "react-redux";

function Nav() {
  const [isNavShowing, setNavShowing] = useState(false);

    const links = [
    {
        name: "Main Page",
        path: "/"
    },
    {
        name: "All products",
        path: "/all-products",
    },
    {
        name: "All sales",
        path: "/all-sales",
    },
];

  const productsInBasket = useSelector(state => state.basket.basket);

  const showCounts = () => {
    const count = productsInBasket.reduce((acc, product) => acc + product.quantity, 0);
    return count;
  } 
  
  return (
    <nav>
      <div className="container nav__container">
        <div className="logo__block">
          <Link to="/" className='logo'>
            <img src={Logo} alt="Nav Logo" />
          </Link>
          <div className="btn__catalog">
            <Link to="/categories">Catalog</Link>
          </div>
        </div>
        
        <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <div className="btn__basket">
          <Link to="/basket">
            <img src={basket} alt="basket" />
          </Link>
          <div className={`round ${productsInBasket.length > 0 ? "show_count" : ""} `} >{showCounts()}</div>
        </div>
        <button className="nav__toogle-btn" onClick={() => setNavShowing(!isNavShowing)}>
          <img src={burger} alt="burger menu" />
        </button>

      </div>
        
      </nav>
  )
}

export default Nav