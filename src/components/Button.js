import "../styles.css"
import React from "react"

const Button = ({onClick, text})=>{
    return(
        <button onClick = {onClick} className="primaryButton">{text}</button>
    )
}

export default Button