import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((path) => path);
    const categoryName = useSelector(state => state.categories.category.title);
    const productName = useSelector(state => state.products.product.title);

  console.log(productName);

    if(pathnames[0] === "categories" && pathnames.length > 1){
      return (

        <div className='breadcrumbs-container container'>
            {pathnames.length > 0 && (
              <>
               {""}
               <Link to="/">Home </Link> 
               <span> / </span>{""}
              </>
            )}
          {pathnames.map((pathname, index) => {
              const linkTo = `${pathnames.slice(0, index + 1).join("/")}`;
              const last = index === pathnames.length - 1;
              return (
                <div key={index}>
                  {last ? (
                      <span>{categoryName}</span>) : (<Link to={linkTo}>{pathname}</Link>
                    )
                  }
                  {!last && <span> / </span>}
                </div>
              )
            })
          }
        </div>
      )
    }
    if(pathnames[0] === "products" && pathnames.length > 1){
      return (

        <div className='breadcrumbs-container container'>
            {pathnames.length > 0 && (
              <>
               {""}
               <Link to="/">Home </Link> 
               <span> / </span>{""}
              </>
            )}
          {pathnames.map((pathname, index) => {
              const linkTo = `${pathnames.slice(0, index + 1).join("/")}`;
              const last = index === pathnames.length - 1;
              return (
                <div key={index}>
                  {last ? (
                      <span>{productName}</span>) : (<Link to="all-products">{pathname}</Link>
                    )
                  }
                  {!last && <span> / </span>}
                </div>
              )
            })
          }
        </div>
      )
    }

  return (

    <div className='breadcrumbs-container container'>
        {pathnames.length > 0 && (
          <>
           {""}
           <Link to="/">Home </Link> 
           <span> / </span>{""}
          </>
        )}
      {pathnames.map((pathname, index) => {
          const linkTo = `${pathnames.slice(0, index + 1).join("/")}`;
          const last = index === pathnames.length - 1;
          return (
            <div key={index}>
              {last ? (
                  <span>{pathname}</span>) : (<Link to={linkTo}>{pathname}</Link>
                )
              }
              {!last && <span> / </span>}
            </div>
          )
        })
      }
    </div>
  )
}

export default Breadcrumb