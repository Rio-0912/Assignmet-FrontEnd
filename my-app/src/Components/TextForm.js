import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [namer, setNamer] = useState('');
  const [formVisible, setFormVisible] = useState(true);

  const handleClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const lowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const nametaker = (event) => {
    setNamer(event.target.value);
  };

  const highlightKeyword = () => {
    let newtext = text.trimEnd();
    setText(newtext);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Hide the first form after capturing the name
    setFormVisible(false);
  };

  const mrStyle = {
    display: formVisible ? 'block' : 'none',
  };

  return (
    <>
      <form action="post" style={mrStyle} onSubmit={handleFormSubmit}>
        <input type="text" name="names" id="names" onChange={nametaker} />
        <button type="submit" className='btn btn-sm btn-dark'>Name</button>
      </form>

      <form className='container p-4 py-4'>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">{props.heading} - Welcome {namer}</label>
          <textarea
            rows={8}
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            name='myBox'
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Convert To uppercase
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={lowClick}>
          Lower case
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={highlightKeyword}>
          Get Exact words
        </button>
      </form>

      <div className="container my-2">
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
