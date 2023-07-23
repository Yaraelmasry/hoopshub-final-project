import React from "react";
import { useRef } from 'react';
import Court1 from "../assets/court1.jpg";
import Court2 from "../assets/court2.jpg";
import Court3 from "../assets/court3.jpg";
import Court4 from "../assets/court4.jpg";
import LocationData from "./LocationData";


const Location = () => {
  const ref = useRef(null);

  return (
    <>
    
      <div ref={ref} className="location">
        <h1>Gym Locations</h1>
        <p>HoopsHub uses the following courts for team practices, drop-ins, and home games.</p>
        <LocationData
          className="first-loc"
          heading="Saint Laurent Court"
          text="Open: Monday-Sunday"
          text2="10:00AM-4:00PM"
          text3="Phone Number: 613000444"
          text4="Email:saintlaurent@gmail.com"
          img1={Court1}
          img2={Court2}
        />
        <div className="lol">
        <a href="https://goo.gl/maps/tqZDVpx3Ns8rL4dN7">
          <button>St.Laurent Blvd, Ottawa</button>
          </a>
        </div>
        

       

        <LocationData
          className="first-loc-reverse"
          heading="Geegees Court"
          text="Open: Monday-Sunday"
          text2="10:00AM-9:00PM"
          text3="Phone Number: 613000333"
          text4="Email:geegees@gmail.com"
          img1={Court3}
          img2={Court4}
        />
         <div className="lol1">
        <a href="https://goo.gl/maps/vVeec4t1yChkzsYm8">
          <button>Lees Ave, Ottawa</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Location;


