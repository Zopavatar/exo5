import React from 'react';
import "./public/css/section.css";

const Section = ({intitule,number,prix,device,days}) => {
  return (
    <section>
        <h1>{intitule} <a href="">#{number}</a></h1>
        <p>Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.</p>
        <div>
            <div>
                <div id="icone_a"></div>
                <p>{prix}{device}</p>
            </div>

            <div>
                <div id="icone_b"></div>
                <p>{days} days left</p>
            </div>
        </div>
    </section>
  )
}

export default Section;