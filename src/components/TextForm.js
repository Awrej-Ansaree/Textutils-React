import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const uppercaseTxt = () => {
    const newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Conveted the text to uppercase", "success");
  };

  const lowercaseTxt = () => {
    const newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Conveted the text to lowercase", "success");
  };

  const capitalizeTxt = () => {
    if (text) {
      let newText = text.split(" ");
      for (let i = 0; i < newText.length; i++) {
        newText[i] =
          newText[i][0].toUpperCase() + newText[i].slice(1).toLowerCase();
      }
      setText(newText.join(" "));
      // props.showAlert("Text has been capitalized", "success");
    }
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // props.showAlert("Extra spaces has been removed", "success");
  };

  const copyTxt = () => {
    if (text) {
      const textBox = document.getElementById("textBox");
      textBox.select();
      textBox.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(textBox.value);
      // props.showAlert("Copied the text to the clipboard", "success");
    }
  };

  const speakTxt = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    // props.showAlert("Speaking the given text", "success");
  };

  const clearTxt = () => {
    setText("");
    // props.showAlert("Text has been cleared", "success");
  };

  return (
    <div className="container mt-4">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control mb-3"
          id="textBox"
          rows="8"
          placeholder="Type your text here...."
          value={text}
          onChange={onChangeText}
          style={{
            backgroundColor: props.mode === "dark" ? "#495057" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>

        <div className="utilsBtn">
          <button
            type="button"
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "outline-primary"
            } me-2 my-md-0 my-1`}
            onClick={uppercaseTxt}
          >
            Uppercase
          </button>

          <button
            type="button"
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "outline-primary"
            } me-2 my-md-0 my-1`}
            onClick={lowercaseTxt}
          >
            Lowercase
          </button>

          <button
            type="button"
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "outline-primary"
            } me-2 my-md-0 my-1`}
            onClick={capitalizeTxt}
          >
            Capitalize
          </button>

          <button
            type="button"
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "outline-primary"
            } me-2 my-md-0 my-1`}
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>

          <button
            type="button"
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "outline-primary"
            } me-2 my-md-0 my-1`}
            onClick={speakTxt}
          >
            Speak
          </button>

          <button
            type="button"
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "outline-primary"
            } me-2 my-md-0 my-1`}
            onClick={copyTxt}
          >
            Copy
          </button>

          <button
            type="button"
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "outline-primary"
            } me-2 my-md-0 my-1`}
            onClick={clearTxt}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="container mb-3">
        <h3>Your Text Summary</h3>
        <p>
          Total Words: {text ? text.split(" ").length : 0} | Total Characters:{" "}
          {text.length} | Reading Time(WPM) :{" "}
          {text ? 0.008 * text.split(" ").length : 0}
        </p>
      </div>

      <div className="container mb-3">
        <h3>Preview</h3>
        <p>{text ? text : "Enter something to see the preview"}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Heading Here",
};
