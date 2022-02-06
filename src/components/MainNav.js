import logo from "./logo.png";

const NavBar=()=>{
    return(
        <div className="navbar">
            <div className="lside logo">
                <img src={logo}></img>
            </div>
            <div className="rside">
                <a id="link" href="#">Login</a><span id="liti"></span>
                <a id="link" href="#">Register</a>
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