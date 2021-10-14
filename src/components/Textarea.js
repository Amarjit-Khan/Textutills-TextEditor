import React, { useState } from "react";

export default function Textarea(props) {
  const handleupclck = () => {
    const newtext = text.toUpperCase();
    setText(newtext);
    console.log("Upper Case was clicked");
    props.showalert("Changed to Upper Case", "primary");
    };

  const handledwnclck = () => {
    const newtext = text.toLowerCase();
    setText(newtext);
    console.log("Lower Case was clicked");
    props.showalert("Changed to Lower Case", "primary");
  };

  const handleclrclck = () => {
    setText("");
  };

  const handlecpyclck = () => {
    navigator.clipboard.writeText(text)
    props.showalert("Text copied to clipboard", "primary");
  };

  const [text, setText] = useState("");

  const handleonchng = (event) => {
    console.log("Change has been made");
    setText(event.target.value);
  };

  return (
    <>

      <p className="my-2 mx-5" style={{ color: props.mode === "light" ? "black" : "white" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil
        dfgdfgdfhfgnn jhjghjgh hjhjtur necessitatibus. Alias, dolorem inventore
        quas fugitam omnis obcaecati dolores mollitia at, a Lorem ipsum dolor.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Eligendi repellendus
        ullam dolore? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
      </p>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white"
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Text
          </label>
          <textarea
            className="form-control"
            id="mybox"
            rows="3"
            value={text}
            onChange={handleonchng}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white"
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclck}>
          Convert to Upper Case
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-secondary mx-1 my-1"
          onClick={handledwnclck}
        >
          Convert to Lower Case
        </button>
        <button
         disabled={text.length===0}
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={handlecpyclck}
        >
          Copy Text
        </button>
        <button
         disabled={text.length===0}
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handleclrclck}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>Read in {text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} mins</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text in the above text box to preview"}</p>
      </div>
    </>
  );
}
