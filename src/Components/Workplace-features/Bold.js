import React from "react";

export default function Bold(props){
    const [textArea, settextInput] = props.textArea;


 
    function handleBold(event){
        const wordPicked = props.offset;

        const ctrl = document.getElementsByTagName('textarea')[0]

        ctrl.focus();

        settextInput(prev => {
            let newString = textArea.replace(wordPicked, `**${wordPicked}**`)
           if(textArea.length === 0){

            const text = `****`

            return text;
           }else{
            return newString
           }
        })
       
    }

    return(
        <h1 onClick={handleBold}><b>B</b></h1>
    )
}