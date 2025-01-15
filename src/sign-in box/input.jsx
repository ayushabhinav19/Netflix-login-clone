import "./input.css"
import TextField from '@mui/material/TextField';

let Input=(props)=>{
    return (

        <div className="username">

            {/* <input className="enterbox" onChange={props.onChange} type={props.type} placeholder={props.placeholder}></input> */}

            
            <TextField className="enterbox" color="success" sx={{
          "& .MuiInput-underline:before": {
            borderBottomColor: "#8ec6ff", // Default borderBottomColor
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "#ffffff", // Hover borderBottomColor
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#ffffff", // Focused borderBottomColor
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#8ec6ff", // Placeholder color
          },
        }}  InputProps={{
            style: {
              color: "white", // Text color
               borderBottomColor:"whitesmoke"
            },
          }}
          InputLabelProps={{
            style: {
              color: "#8ec6ff", // Label color
               borderBottomColor:"whitesmoke"
            },
          }} onChange={props.onChange} type={props.type}  label={props.placeholder} variant="standard"/> 
        </div> 
    )
};

export {Input};