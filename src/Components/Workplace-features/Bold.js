import React from "react";

export default function Bold(props){
    const [textArea, settextInput] = props.textArea;
 

    console.log(textArea)
    function handleBold(event){
        console.log(event)

    settextInput("hi im david")
    }

    return(
        <h1 onClick={handleBold}><b>B</b></h1>
    )
}