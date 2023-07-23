import React from "react";
import './ProgressBar.css';

function ProgressBar () {
   return (
       <div className="container">
           <h2 className="title-text">League Progress Bar</h2>

           <div className="skill-box">
               <span className="title">House League (Female)</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">95%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Competitive League (Male) </span>
               <div className="skill-bar">
                   <span className="skill-per comp">
                       <span className="tooltip">80%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Competitive League (Female)</span>
               <div className="skill-bar">
                   <span className="skill-per compf">
                       <span className="tooltip">60%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Beginner's League (Mixed)</span>
               <div className="skill-bar">
                   <span className="skill-per beg">
                       <span className="tooltip">40%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">House League (Male)</span>
               <div className="skill-bar">
                   <span className="skill-per house">
                       <span className="tooltip">70%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Beginner's League (Male)</span>
               <div className="skill-bar">
                   <span className="skill-per begm">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>
       </div>
   )
}

export default ProgressBar;