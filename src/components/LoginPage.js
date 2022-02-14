import InputBox from "./inputBox";
import TitleBar from "./TitleBar";
import styles from "./LoginPage.css";

const LoginPage = () => {
    return (
        <div className="Login">
            <TitleBar title="Login or Create an Account" />
            <div className="Main-content">
                <div className="lpart">
                    <div>
                        <div className="titles">
                            <p>New Customer</p>
                            <span></span>
                            <p id="title2">Registration is free and easy.</p>
                        </div>
                        <ul id="ul">
                            <li>Faster checkout</li>
                            <li>Save multiple shopping address</li>
                            <li>View and track orders and more</li>
                        </ul>
                    </div>
                    <div><button id="newbtn">Create an Account</button></div>
                </div>
                <div className="rpart">
                    <div className="titles">
                        <p>Registered Customers</p>
                        <span></span>
                        <p id="title2">If you have an account with us, please log in.</p>
                    </div>
                    <form>
                        <div>
                            <InputBox label="Email Address *" type="email" width="90%" />
                            <InputBox label="Password *" type="password" width="90%" />
                            <a href="#" id="resetlink">Forgot Password?</a>
                        </div>
                        <button id="newbtn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;