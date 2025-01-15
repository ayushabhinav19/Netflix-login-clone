import { Button } from "../button/button";
import { Other } from "../other components/others";
import { Input } from "./input";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import "./signin.css"


let Signin=()=>{
    
    
    //  username error
        const[username,setusernamevalue]=useState("")

        let Showusername=(event)=>{
            setusernamevalue(event.target.value)
        }


    // error message for username
    
    const[usernameerror,setusernameerror]=useState("")

    let Showusererror=()=>{
        if(username.length>=5){
            setusernameerror("")
        }
        else{
            setusernameerror("Username must constain atleast 5 character")
        }
    }
        
   
   
    // to see the password
    const [password,setpassword]=useState("password")

    let Showpassword=()=>{
        if(password==="password"){
            setpassword("text")
        }
        else{
            setpassword("password")
        }
    };



    // to see the value and store it
    const [passwordValue,setValue]=useState("");

    let setpasswordValue=(e)=>{
        setValue(e.target.value);
    };


    // Giving error
    const[error,seterror]=useState("")

    let Showerror=()=>{
    
        if(username.length < 5){
            setusernameerror("Username must constain atleast 5 character")
        }
        else{
            setusernameerror("")
        }
        if(passwordValue.length <=8 ){
            seterror(<i>❌ Password must contain atleast 8 character</i>)
        }
        else{
            seterror("")
        }
    }


    return(
        <div className="mainbox">
            <div className="innerbox">
                <div className="inputbox">
                    <div className="signinword">
                        Sign In
                    </div>
                    
                    <Input placeholder={"Email or mobile number"} onChange={Showusername} type={"text"}></Input>

                        <div className="usernameerror">
                            {usernameerror}
                        </div>

                        <Input placeholder={"Password"}  type={password} onChange={setpasswordValue}></Input>

                    <div className="eye">
                        {password ==="password"?<FaEye onClick={Showpassword} className="eyeimage"/>:<IoIosEyeOff onClick={Showpassword} className="eyeimage"/>}
                    </div>

                    <div className="passworderror">
                            {error}
                            
                    </div>
                    
                    <Button onclick={Showerror}  type={"primary"} buttonName={"Sign in"}></Button>
                            <div className="text">
                                OR
                            </div>

                    <Button type={"secondary"} buttonName={"Use a sign-in code"}></Button>
                    
                    <Other></Other>
            </div>
        </div>
    </div>
    )
}


export {Signin};