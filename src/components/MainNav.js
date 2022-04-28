import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar=()=>{
    var navigate = useNavigate();
    const navigateMe=(flag)=>{
        if (flag === "login") {
            navigate("/login");
        }
        else {
            navigate("/register");
        }
    }
    const citems = useSelector(
        (state)=>state.items
    );
    return(
        <div className="navbar">
            <div className="lside logo">
                <img src={logo} alt="NavLogo"></img>
            </div>
            <div className="rside">
                <a id="link" onClick={()=>navigateMe("login")}>Login</a><span id="liti"></span>
                <a id="link" onClick={()=>navigateMe("register")}>Register</a>
                <div className="cartbox">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="itemTxt">{citems}</span>
                    <span className="cartTxt">Cart</span>
                </div>
            </div>
        </div>
    );
}
export default NavBar;