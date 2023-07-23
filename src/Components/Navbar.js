/* global google */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbarstyle.css"

export const Navbar = () => {
  const consoles = ['Home', 'Club', 'Programs','Gym Locations','Contact Us'];


  

  


  const handleTranslateClick = (lang) => {
    let url = window.location.href.split('#')[0];
    url += lang === 'fr' ? '#googtrans(en|fr)' : '#googtrans(fr|en)';
    window.location.href = url;
    window.location.reload(true);
  };

  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    jqueryScript.async = true;
    jqueryScript.addEventListener('error', function(e) {
      console.error('Error loading jQuery script: ', e);
    });
    document.body.appendChild(jqueryScript);

    const translateScript = document.createElement('script');
    translateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    translateScript.async = true;
    translateScript.addEventListener('error', function(e) {
      console.error('Error loading Google Translate script: ', e);
    });
    document.body.appendChild(translateScript);

    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
    }
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#033a14',
          padding: '7px',
          color: 'white',
        }}
      >
        <div className="texth" style={{color:'white',}}>HoopsHub</div>

       
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
           
          </Link>
        
          <Link to="./">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="/Club">
            <button className="nav-button">Club</button>
          </Link>
          <Link to="/Program">
            <button className="nav-button">Programs</button>
          </Link>
          <Link to="/GymLocation">
            <button className="nav-button">Gym Locations</button>
          </Link>
          <Link to="/Contact">
            <button className="nav-button">Contact Us </button>
          </Link>
          
        
        </div>
        <div>
          <button
            className="lang-select nav-button"
            data-lang="en"
            onClick={() => handleTranslateClick('en')}
          >
            Eng
          </button>
          <button
            className="lang-select nav-button no-translate"
            data-lang="fr"
            onClick={() => handleTranslateClick('fr')}
          >
            Fr
          </button>
        </div>
      </div>
     
    </>
  );
};
export default Navbar;
