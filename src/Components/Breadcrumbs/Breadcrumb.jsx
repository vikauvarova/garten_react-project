import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

function Breadcrumb() {

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((path) => path);

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