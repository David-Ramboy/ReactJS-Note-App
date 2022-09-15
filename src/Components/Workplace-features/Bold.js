import React, { useEffect } from "react";

export default function Bold(props){
    const [textArea, settextInput] = props.textArea;
  
    let textArea1= document.getElementsByTagName('textarea')
    function setCaretPosition(ctrl) {
        // IE >= 9 and other browsers
        if (ctrl.setSelectionRange) {
            console.log(true)
            ctrl.focus();
            ctrl.setSelectionRange(4, 2);

        }
        // IE < 9 
        // else if (ctrl.createTextRange) {
        //     var range = ctrl.createTextRange();
        //     range.collapse(true);
        //     range.moveEnd('character', end);
        //     range.moveStart('character', start);
        //     range.select();
        // }
    }
    useEffect(()=>{
        console.log(true,"d")
        setCaretPosition(textArea1[0])
        console.log(true)
    },[0])
    function handleBold(event){
        const wordPicked = props.offset;
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