import React from 'react'

export const Header = () => {
  return (
    <div className="shapka">
        <div className="logo">
            <i className="fa-solid fa-wind"></i>
            SK8SHOES
          </div>
                                <div className="search-box">
                                    <input className="search-txt" type="text" name="" placeholder="Type to search" />
                                        <a className="search-btn" href="google.com">
                                             <i className="fa-solid fa-magnifying-glass"></i>
                                        </a>
                                </div>
                            
    <div className="textvshapke">
            <div className="text2 korzinka">
              <i className="fa-solid fa-cart-shopping"></i> 
            
            </div>
            <div className="text1">
              <i className="fa-solid fa-door-open"></i>
            </div>
    </div>    
    </div>
  );
};
