import React from 'react';
import plant from "../../images/baner.png";
import { Link } from 'react-router-dom';

function Baner() {
  return (
    <header className="main__header">
     <div className="container main__header-container">
      <div className="main__header-left">
        <div className="main__header-h">
          <h1>Sale</h1>
          <h2>New season</h2>
        </div>
        <Link to="/all-sales" className="btn__sale">Sale</Link>
        </div>
        <div className="main__header-right">
          <img src={plant} alt="plants" />          
        </div>

    </div>     
    </header>

  )
}

export default Baner