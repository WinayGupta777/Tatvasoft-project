import TitleBar from "./TitleBar";
import InputBox from "./inputBox";
import styles from "./RegisterPage.css"
import { useState } from "react";
import axios from "axios";
import ShowMsg from "./showMsg";

const RegisterPage = () => {
    const [fname,setFname]= useState("");
    const [lname,setLname]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPasswd]= useState("");
    const [Cpassword,setCpasswd]= useState("");
    const [msg, setMsg] = useState(null);
    const [status, setStatus] = useState(false);
    
    const setValues=(verb,e)=>{
        if(verb=="fname"){setFname(e.target.value)}
        if(verb=="lname"){setLname(e.target.value)}
        if(verb=="email"){setEmail(e.target.value)}
        if(verb=="pass"){setPasswd(e.target.value)}
        if(verb=="cpass"){setCpasswd(e.target.value)}
    }
    const onSubmited=(e)=>{
        e.preventDefault();
        console.log("submitted");
        if (password == Cpassword){
            console.log("True");
            axios.post("http://localhost:8080/signup",{
                fname:fname, 
                lname:lname,
                email:email, 
                password:password
            }).then((r)=>{
                setStatus(r.data.status);
                setMsg(r.data.message);
                console.log(r.data);
            })
            .catch((e)=>console.log(e));
        }else{
            setMsg("Password are not matching");
        }
    }
    const putError=()=>{
        setTimeout(() => {
            setMsg(null)
        }, 4000);
        return(<ShowMsg msg={msg} />);
    }
    return (
        <div className="Register">
            <TitleBar title="Login or Create an Account"></TitleBar>
            <div className="Register-content">
                <div className="titles">
                    <p>Personal Information</p>
                    <span></span>
                    <p id="title2">Please enter the following details to create your account.</p>
                </div>
                <form onSubmit={onSubmited}>
                    <div className="inboxes">
                        <div id="oneRow">
                            <InputBox label="First Name *" type="text" width="590px" onChangeMethod={(e)=>setValues("fname",e)}/>
                            <InputBox label="Last Name *" type="text" width="590px" onChangeMethod={(e)=>setValues("lname",e)}/>
                        </div>
                        <div id="twoRow">
                            <InputBox label="Email Address *" type="email" width="91%" onChangeMethod={(e)=>setValues("email",e)}/>
                        </div>
                    </div>
                    <div className="titles">
                        <p>Login Information</p>
                        <span></span>
                    </div>
                    <div id="oneRow">
                        <InputBox label="Password *" type="password" width="590px" onChangeMethod={(e)=>setValues("pass",e)}/>
                        <InputBox label="Confirm Password *" type="password" width="590px" onChangeMethod={(e)=>setValues("cpass",e)}/>
                    </div>
                    {msg ? putError() : null}
                    <button type="submit" id="register">Register</button>
                </form>
            </div>
        </div>
    );
}
export default RegisterPage;