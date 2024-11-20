import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="con1">
      <div className="con2">
        <div className="con3">
          <div className="logo">
            <div className="bo1">
              <div className="bo2"></div>
            </div>
            <h1 className="name">Untitled UI</h1>
          </div>
        </div>
        <div className="f1">
          <h1 className="n1">Home</h1>
        </div>
        <div className="f1">
          <h1 className="n1">Products</h1>
          <div className="u1">
            <div className="u"></div>
          </div>
        </div>
        <div className="f1">
          <h1 className="n1">Resources</h1>
        </div>
        <div className="f1">
          <h1 className="n1">Pricing</h1>
        </div>
      </div>
     <div className="bo11">
        <img
          alt="logo"
          className="bo21"
          src="https://res.cloudinary.com/dqura103a/image/upload/v1731990540/zync1_g0vf3l.png"
        />
      </div>        
    </div>  
  );
};

export default Header;
