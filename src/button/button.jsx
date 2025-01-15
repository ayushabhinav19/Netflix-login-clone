import "./button.css"

let Button=(props)=>{

    let className="";
    if(props.type==="primary"){
        className="primary"
    }
    else{
        className="secondary"
    }

    return(
        <div className="buttonbox">
            <button onClick={props.onclick}  className={className}>
                {props.buttonName}
            </button>
        </div>
    )
};

export {Button};