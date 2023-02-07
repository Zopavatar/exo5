import React from 'react';
import './public/css/header.css';




//rafcp
const Header = ({image,background_header}) => {

  function Cliquer() {
    if(document.getElementById("icone").style.background == "none" ){
      document.getElementById("icone").style.background=`${background_header}`;
    } else {
      document.getElementById("icone").style.background= "none";
    }
      
  }

  let header_style = {
    backgroundImage: `url(${image})`,
  }

  return (
    <header>
        <div id="image" style={header_style}>
            <button href="" id="icone" onClick={Cliquer}><div id="el_icone"></div></button>
        </div>
    </header>
  )

}

export default Header;