import "./others.css"

let Other=()=>{
    return(
        <div className="other">
            <a className="Forgot" href="https://www.netflix.com/in/LoginHelp">Forgot Password?</a>
            <div className="remember">
                <div className="check">
                    <input className="checkbox" type="checkbox" ></input>
                    </div>
                <div className="rememberme">Remember me</div>
            </div>
            <div className="newuser">
                New to Netflix? <a href="https://www.netflix.com/in/"> Sign up now</a>
            </div>
            <div className="copyright">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.<a className="learn"> Learn more.</a>
            </div>
        </div>
        
    )
};

export {Other};