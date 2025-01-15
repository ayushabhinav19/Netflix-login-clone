import "./footer.css"

let Footer=()=>{
    return(
        <div className="footer">
             <p className="contact">Questions? Call 000-800-919-1743</p>
        <div className="foot">
            <a href="https://help.netflix.com/support/412">FAQ</a>
            <a href="https://help.netflix.com/">Help Center</a>
            <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
            <a href="https://help.netflix.com/legal/privacy">Privacy</a>
        </div>
        <div className="foot2">
            <a href="https://www.netflix.com/login#">Cookies Preferences</a>
            <a id="footer2" href="https://help.netflix.com/legal/corpinfo">Coporate Information</a>
        </div>
        <div className="minename">
            Made with ❤️ by Abhinav Shukla
        </div>
        </div>
    )
}

export {Footer};