import './App.css';
import Header from './modules/header/header.js';
import Section from './modules/section_a/section.js';
import Footer from './modules/footer/footer.js';

import image_a from './modules/header/public/img/image-equilibrium.jpg';
import image_profil from './modules/footer/public/img/image-avatar.png';

function App() {

  let nft_a = {
    image_header: image_a,
    couleur_header: "hsla(178, 100%, 50%, 0.32)",
    
    intitule: "Equilibrium",
    nombre: "1423",
    prix: "0.041",
    devise: "ETH",
    days: "3",

    prenom: "Jules",
    nom:"Wyvern",
    image_profil: image_profil,
  }

  return (
    <div className="App">
      <Header image={nft_a.image_header} background_header={nft_a.couleur_header}/>
      <Section intitule={nft_a.intitule} number={nft_a.nombre} prix={nft_a.prix} device={nft_a.devise} days={nft_a.days}/>
      <Footer image_profil={nft_a.image_profil} prenom={nft_a.prenom} nom={nft_a.nom}/>
    </div>
  );
}

export default App;
