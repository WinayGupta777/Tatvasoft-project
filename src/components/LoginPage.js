import TitleBar from "./TitleBar";

const LoginPage=()=>{
    return(
        <div className="Login">
            <TitleBar title="Login or Create an Account" />
            <div className="Main-content">
                <div className="newcust">
                    <div>
                        <p>New Customer</p>
                        <span id="liti2"></span>
                        <p id="title2">Registration is free and easy.</p>
                        <ul id="ul">
                            <li>Faster checkout</li>
                            <li>Save multiple shopping address</li>
                            <li>View and track orders and more</li>
                        </ul>
                    </div>
                    <button id="lrbtn">Create an Account</button>
                </div>
                <div className="regcust">
                    <div>
                        <p>Registered Customers</p>
                        <span id="liti2"></span>
                        <p id="title2">If you have an account with us, please log in.</p>
                        <form>
                            <p id="in">Email Address *</p>
                            <input type="email" required id="lpage"/>
                            <p id="in">Password *</p>
                            <input type="password" required  id="lpage"/>
                            <br></br>
                            <button type="submit" id="lbtn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;