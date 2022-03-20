import React, { useState } from "react";
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  
  const changetouprcase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To UpperCase!","success");
  };
  
  const changetolwrcase = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert("Converted To LowerCase!","success");

  };

  const clear = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!","success");

  };
  
  const copy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard!","success");

  };
  const writtentxt = (event) => {
    let newtext = "";
    setText(newtext);
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={writtentxt}
            style={{
              backgroundColor: props.mode === "dark" ? "#7c7f8d" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="textarea"
            rows="3"
          ></textarea>
        </div>
        <button className={`btn btn-${props.color} mx-1`} onClick={changetouprcase}>
          Convert To Uppercase
        </button>
        <button className={`btn btn-${props.color} mx-1`} onClick={changetolwrcase}>
          Convert To Lowercase
        </button>
        <button className={`btn btn-${props.color} mx-1`} onClick={clear}>
          Clear
        </button>
        <button className={`btn btn-${props.color} mx-1`} onClick={copy}>
          Copy to ClipBoard
        </button>
      </div>
      <div
        className={`container my-5 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.006 * text.split(" ").length} Minutes Read</p>
      </div>
      <div
        className={`container my-5 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Preview Text </h2>
        <p>{text.length>0 ?text:"Type Something Above To Preview it Here"}</p>
      </div>
    </>
  );
}
