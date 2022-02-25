import InputBox from "./inputBox";
import TitleBar from "./TitleBar";
import styles from "./LoginPage.css";
import { useState } from "react";
import axios from "axios";
import ShowMsg from "./showMsg";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const [email,setEmail]= useState("");
    const [password,setPasswd]= useState("");
    const [msg, setMsg] = useState(null);
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    const setValues=(verb,e)=>{
        if(verb=="email"){setEmail(e.target.value)}
        if(verb=="pass"){setPasswd(e.target.value)}
    }
    const onSubmited=(e)=>{
        e.preventDefault();
        console.log("submitted");
        axios.post("http://localhost:8080/signin",{
                email:email, 
                password:password
        }).then((r)=>{
                setStatus(r.data.status);
                setMsg(r.data.message);
                console.log(msg);
        })
        .catch((e)=>console.log(e));
    }
    const putError=()=>{
        setTimeout(() => {
            setMsg(null)
        }, 4000);
        return(<ShowMsg msg={msg} />);
    }
    const navigateMe=()=>{
        navigate("/register");
    }

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
                    <div><button id="newbtn" onClick={()=>navigateMe()}>Create an Account</button></div>
                </div>
                <div className="rpart">
                    <div className="titles">
                        <p>Registered Customers</p>
                        <span></span>
                        <p id="title2">If you have an account with us, please log in.</p>
                    </div>
                    <form onSubmit={onSubmited}>
                        <div>
                            <InputBox label="Email Address *" type="email" width="90%" onChangeMethod={(e)=>setValues("email",e)}/>
                            <InputBox label="Password *" type="password" width="90%" onChangeMethod={(e)=>setValues("pass",e)}/>
                            <a href="#" id="resetlink">Forgot Password?</a>
                            {msg ? putError() : null}
                        </div>
                        <button id="newbtn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;