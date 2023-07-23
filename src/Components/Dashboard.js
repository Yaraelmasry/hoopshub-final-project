import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
    
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
   

    return (
        <div>
            <body id="page-top">
                <div id="wrapper">
                    <ul className={style} id="accordionSidebar">
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                            </div>
                            <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div>
                        </a>
                        <hr className="sidebar-divider my-0" />
                    </ul>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="dash font-weight-bold mb-0">Dashboard</h1>
                                    <div className="rp">
                                    <a href="https://bleacherreport.com/nba" className="d-none d-sm-inline-block btn btn-sm shadow-sm" style={{backgroundColor: "#094723"}} ><i
                                        className="fas fa-download fa-sm text-white"></i> Generate Report</a>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text1 text-uppercase mb-1"> 
                                                            Total Games</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">244</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fa-brands fa-dribbble fa-2x text-gray-300" style={{color: "#094723",}}></i>
            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-success shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text1 text-uppercase mb-1">
                                                            Montly Winnings Ratio</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">60.12%</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fa-solid fa-trophy fa-2x text-gray-300" style={{color: "#094723",}}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-info shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        
                                                        <div className="text1 text-uppercase mb-1">Loss Percentage
                            
                                                        </div>
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col-auto">
                                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">45%</div>
                                                            </div>
                                                            <div className="col">
                                                            <div className= "teez" >
                                                                    <div className="progress" style={{backgroundColor: "#094723"}} role="progressbar"
                                                                    ></div>
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"style={{color: "#094723",}}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-warning shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text1 text-uppercase mb-1">
                                                            Pending Requests</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">10</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-comments fa-2x text-gray-300" style={{color: "#094723",}}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                     
 </div>
   </div>
 </div>
  </div>
 </body>
 </div>
    )
}

export default Dashboard;
