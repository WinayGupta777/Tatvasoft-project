import TitleBar from "./TitleBar";
import InputBox from "./inputBox";
import styles from "./RegisterPage.css"

const RegisterPage = () => {
    return (
        <div className="Register">
            <TitleBar title="Login or Create an Account"></TitleBar>
            <div className="Register-content">
                <div className="titles">
                    <p>Personal Information</p>
                    <span></span>
                    <p id="title2">Please enter the following details to create your account.</p>
                </div>
                <form>
                    <div className="inboxes">
                        <div id="oneRow">
                            <InputBox label="First Name *" type="text" width="590px" />
                            <InputBox label="Last Name *" type="text" width="590px" />
                        </div>
                        <div id="twoRow">
                            <InputBox label="Email Address *" type="email" width="91%" />
                        </div>
                    </div>
                    <div className="titles">
                        <p>Login Information</p>
                        <span></span>
                    </div>
                    <div id="oneRow">
                        <InputBox label="Password *" type="password" width="590px" />
                        <InputBox label="Confirm Password *" type="password" width="590px" />
                    </div>
                    <button type="submit" id="register">Register</button>
                </form>
            </div>
        </div>
    );
}
export default RegisterPage;