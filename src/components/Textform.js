import React, { useState } from "react";
export default function TextForm(props) {

    const onchangehandle = (event) => {
    setText(event.target.value);
  };

  const onCicked = () => {
    let newText = text.toUpperCase();
    setCText(newText);
  };
  const onCickedlower = () => {
    let newText = text.toLowerCase();
    setCText(newText);
  };

  const copyHandler = ()=>{
    var text = document.getElementById("pText").value
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success")
  }
  const removeExtraSpaces = ()=>{
    let noSpace = text.split(/[ ]+/);
    setCText(noSpace.join(" "))
    props.showAlert("Extra spaces removed","success")
  }
  const reset = ()=>{
    setCText("")
    setText("")
    props.showAlert("Reset complete","success")
  }

  const [text, setText] = useState("");
  const [Ctext, setCText] = useState("");
  return (
    <>
      <div className="mb-3 mainDiv">
        <label className="htmlform-label my-1">
          <strong>Enter you text here</strong>
        </label>
        <br />
        <textarea
          className="form-control my-2"
          id="myBox"
          rows="8"
          value={text}
          onChange={onchangehandle}
          style={props.mode==="light"?{backgroundColor:"white",color:"black"}:{backgroundColor:"grey",color:"white"}}
        ></textarea>
        <button className="btn btn-primary my-2" onClick={onCicked} style={props.mode==="dark"?{backgroundColor:props.darkcolor}:null}>
          Convert to Upercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={onCickedlower} style={props.mode==="dark"?{backgroundColor:props.darkcolor}:null}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={copyHandler} style={props.mode==="dark"?{backgroundColor:props.darkcolor}:null}>
          Copy Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={removeExtraSpaces} style={props.mode==="dark"?{backgroundColor:props.darkcolor}:null}>
          Remove Extra spaces
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={reset} style={props.mode==="dark"?{backgroundColor:props.darkcolor}:null}>
          Reset
        </button>
        <div>
          {text.length !== 0 ? (
            <p>
              {text.split(/\s+/).filter((arrelement)=>{return arrelement.length!==0}).length} Words and {text.length} Characters
            </p>
          ) : (
            <p>Your words count here!!</p>
          )}
        </div>
        <h3>Your Result-</h3>
        <textarea rows="8" id="pText" defaultValue={Ctext} 
        style={props.mode==="dark"? {backgroundColor:"transparent",color:"white",border:"none",outline:"none",width:"100%"}:{backgroundColor:"transparent",border:"none",outline:"none",width:"100%"}}
        ></textarea>
      </div>
    </>
  );
}