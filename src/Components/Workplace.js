import React, {useState}from "react";
import Bold from "./Workplace-features/Bold";
export default function Workplace(){

    // Main text 
const  [textInput, settextInput] = useState("")

    // Onclick Header 
    function textAdjust(event){
        let textTarget = event.target.textContent
        

        if(textTarget === "H"){
            settextInput(prev => {   
                    return " ### " + prev 
            })
            
        }
        
    }

    // Handle the first letter must be Capital
    function handleChange(event){
        let textValue = event.target.value
        let firstText;
        if(event.key === 13 ){
            console.log(true)}
        if(textValue.length === 1 ){
            firstText = textValue.toUpperCase()
        }
        settextInput(prev => {
            if(textValue.length === 1){
                return firstText
            }else{
                return textValue
            }
        })

    
        
    }

    // The Write and Preview Button to display both
    const [displayPreview, setDisplayPreview] = useState(true)

    function HandleEdit(event){
        let target = event.target.textContent
        if(target === "Write"){
            setDisplayPreview(true)            
        }else if(target === "Preview"){
            setDisplayPreview(false)            
            handlePreview(textInput)
        }
    }
    const [previewVar, setPreviewVar] = useState("");

    // Handle the Header if theres ### make in Header 1
    function handlePreview(textInput){
        setPreviewVar(prev =>{
            console.log(textInput.slice(0,3))
            if(textInput.slice(0,4) === " ###"){
                return <div className="preview"><h1>{textInput.slice(4)}</h1></div>  
            }
            return <div className="preview">{textInput}</div>  
        })
    }

  
    return(
        <div className="workplace--container">
            <nav className="workplace--nav"> 
                <div className="text-button">
                    <button onClick={HandleEdit}>Write</button>
                    <button onClick={HandleEdit}>Preview</button>
                </div>
                <div className="text--adjust text">
                    <h1 onClick={textAdjust}><b>H</b></h1>
                    <Bold  textArea={[textInput,settextInput]}/>
                    <h1><b><i>I</i></b></h1>
                    <h1><b><s>S</s></b></h1>
                </div>
                <div className="text--adjust--two text">
                    <h1><b>🔗</b></h1>
                    <h1><b>❞</b></h1>
                    <img src="./Logos/code.png" alt="codes" className="code--icon icon"/>
                    <img src="./Logos/photo.png" alt="photos" className="photo--icon icon"/>
                </div>
                <div className="text--list text">
                    <img src="./Logos/list.png" alt="list" className="list--icon icon"/>
                    <img src="./Logos/number.png" alt="number" className="number--icon icon"/>
                    <img src="./Logos/square.png" alt="square" className="square--icon icon"/>
                </div>
               
            </nav>
            <div style={{display:"",position:"relative", height:"100%"}}>
                {displayPreview ?
                <textarea className="textarea--workplace" onChange={handleChange} value={textInput}/> :
                previewVar               
                }
            </div>
        </div>
    )
}