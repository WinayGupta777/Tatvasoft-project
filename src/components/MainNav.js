import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

const NavBar=()=>{
    var navigate = useNavigate();
    const navigateMe=(flag)=>{
        if (flag == "login") {
            navigate("/login");
        }
        else {
            navigate("/register");
        }
    }
    return(
        <div className="navbar">
            <div className="lside logo">
                <img src={logo}></img>
            </div>
            <div className="rside">
                <a id="link" onClick={()=>navigateMe("login")}>Login</a><span id="liti"></span>
                <a id="link" onClick={()=>navigateMe("register")}>Register</a>
                <div className="cartbox">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="itemTxt">0</span>
                    <span className="cartTxt">Cart</span>
                </div>
            </div>
        </div>
    );
}
export default NavBar;