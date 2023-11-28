import React, { useEffect, useState } from 'react';

export default function TextForm(props) {
    const handleClick = () => {
        console.log("Uppercase was clicked ");
        let newtext = text.toUpperCase();
        setText(newtext );
    };

    const handleOnChange = (event) => {
        console.log("on change ");
        setText(event.target.value)
    };

    const [text, setText] = useState("Enter text here");

    return (
        <>
       
            <form className=' container p-4 py-4'>
                <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.heading} - {text}</label>
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
            </form>
        </>
    );
}
