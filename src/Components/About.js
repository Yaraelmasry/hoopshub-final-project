import React from "react";
import Ball from "../assets/ball.jpg";
import Ball2 from "../assets/ball2.jpg";
import Ball3 from "../assets/ball3.jpg";
import Ball4 from "../assets/ball4.jpg";
import AboutData from "./AboutData";



const About = () => {
    return (
      <>
        <div className="about">
          <h1>About Us</h1>
          <AboutData
            className="first-des"
            heading="Our History"
            text="We are a Basketball club founded in 2018. Our league has grown to become a hub for basketball enthusiasts, players, and fans. Our mission is to provide an exceptional and unforgettable basketball experience, promoting sportsmanship, camaraderie, and personal growth both on and off the court."
            
            img1={Ball}
            img2={Ball3}
          />
  
          <AboutData
            className="first-des-reverse"
            heading="What we Offer!"
            text="HoopsHub offers a wide range of programs for basketball athletes looking to join a league. We also offer recreational drop-ins and programs for our athletes!
            Whether you're a player looking for a place to showcase your talent, a fan eager to support your favorite team, or simply someone who loves the sport, HoopsHub invites you to be part of our family."
            img1={Ball2}
            img2={Ball4}
          />
        </div>
      </>
    );
  };
  
  export default About;