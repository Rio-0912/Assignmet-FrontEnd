import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  // const [namer, setNamer] = useState('');
  // const [formVisible, setFormVisible] = useState(true);

  const handleClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert(' In upper case', 'success  ')
  };

  const lowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert(' In Lower case', 'success  ')
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // const nametaker = (event) => {
  //   setNamer(event.target.value);
  // };

  const highlightKeyword = () => {
    let newtext = text.trimEnd();
    setText(newtext);
    props.showAlert(' here are the exact words', 'success  ')
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   // Hide the first form after capturing the name
  //   setFormVisible(false);
  // };

  // const mrStyle = {
  //   display: formVisible ? 'block' : 'none',
  // };

  return (
    <>
      {/* <form action="post" style={mrStyle} onSubmit={handleFormSubmit}>
        <input type="text" name="names" id="names" onChange={nametaker} />
        <button type="submit" className='btn btn-sm btn-dark'>Name</button>
      </form> */}

      <form className='container p-4 py-4'>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">{props.heading} - Welcome </label>
          <textarea
            rows={8}
            className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}
            onChange={handleOnChange}
            value={text}
            id="myBox"
            name='myBox'
          />
        </div>

        <button disabled={text.length === 0 } type="button" className={`btn btn${props.butn}  my-1`} onClick={handleClick}>
          Convert To uppercase
        </button>
        <button disabled={text.length === 0 } type="button" className={`btn btn${props.butn} mx-2 my-1`} onClick={lowClick}>
          Lower case
        </button>
        <button disabled={text.length === 0 } type="button" className={`btn btn${props.butn} mx-2 my-1`} onClick={highlightKeyword}>
          Get Exact words
        </button>

      </form>

      <div className="container my-2">
        <h1>Your Text summary</h1>
        <p>{text.length > 0 ? text.split(/\s\w+/).length : 0} words and {text.length} characters</p>

        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter Text '}</p>
      </div>
    </>
  );
}
