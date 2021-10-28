import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("")
    // text = "new text"  // Wrong way to change the text.
    // settext("new text")  // Correct way to change the text.
    
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked! " + text);
        let newText1 = text.toUpperCase();
        setText(newText1);
    }
    
    const handleLoClick= ()=>{
        let newText2 = text.toLowerCase();
        setText(newText2);
    }

    const handleClearClick= ()=>{
        // let temp = text;
        // handleRecoverClick(temp);
        let newText3 = "";
        setText(newText3);
    }
    
    // const handleRecoverClick= (temporary)=>{
    //     let newText4 = temporary;
    //     setText(newText4);
    // }


    const handleOnChange= (event)=>{
        // console.log("On change!");
        setText(event.target.value);  // To target value in textarea and modify it.
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="my_box" rows="7"></textarea>
                <button className={`btn btn-${props.mode} mt-3`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode} mt-3 mx-3`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode} mt-3`} onClick={handleClearClick}>Clear Text</button>
                {/* <button className={`btn btn-${props.mode} mt-3 mx-3`} onClick={handleRecoverClick}>Recover Text</button> */}

            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read.</p>
            <h4>Preview...</h4>
            <p>{text.length>0?text:"ENTER SOMETHING IN TEXTBOX TO PREVIEW IT HERE..."}</p>
        </div>
        </>
    )
}
