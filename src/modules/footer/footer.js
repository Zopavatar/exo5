import React from 'react'
import './public/css/footer.css'

const Footer = ({image_profil,prenom,nom}) => {
  let footer_style = {
    backgroundImage: `url(${image_profil})`,
  }

  return (
    <footer>
        <div style={footer_style} id="profil"></div>
        <p>Creation of </p><a href="">{prenom} {nom}</a>
    </footer>
  )
}

export default Footer;