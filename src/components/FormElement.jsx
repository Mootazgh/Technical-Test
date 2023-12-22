// FormElement.jsx
import React, { useState } from "react";
import { useDrag } from "react-dnd";

const FormElement = ({ type, id, label, onDelete }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "form",
    item: { id, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const inputStyles = {
    // width: "100%",
    // padding: "8px",
    //margin: "4px 0",
    //boxSizing: "border-box",
  };
  const [checkbox, setCheckbox] = useState("Checkbox");
  const [title, setTitle] = useState("Title");

  return (
    <div
      className="bloc"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        display: "inline-block",
        marginRight: "10px", // Adjust as needed
      }}
    >
      {type === "radio" && (
        <div>
          <label>
            <input type="radio" name={`radio-${id}`} />
            {label}
          </label>
        </div>
      )}
      {type === "text" && (
        <div>
          <label>
            {label}
            <input type="text" style={inputStyles} />
          </label>
        </div>
      )}
      {type === "email" && (
        <div>
          <label>
            {label}
            <input type="email" style={inputStyles} />
          </label>
        </div>
      )}
      {type === "phone" && (
        <div>
          <label>
            {label}
            <input type="tel" style={inputStyles} />
          </label>
        </div>
      )}
      {type === "firstName" && (
        <div>
          <label>
            {label}
            <input type="text" style={inputStyles} />
          </label>
        </div>
      )}
      {type === "date" && (
        <div>
          <label>
            {label}
            <input type="date" style={inputStyles} />
          </label>
        </div>
      )}
      {type === "address" && (
        <div>
          <label>
            {label}
            <textarea
              className="textarea"
              style={{ ...inputStyles, height: "40px" }}
            />
          </label>
        </div>
      )}
      {type === "title" && (
        <div className="Title">
          <label>
            <input
              className="Titleinput"
              type="text"
              value={title}
              style={inputStyles}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
      )}
      {type === "checkbox" && (
        <div className="check">
          <label>
            <input type="checkbox" className="click" />
            <input
              className="checkbox"
              type="text"
              value={checkbox}
              onChange={(e) => setCheckbox(e.target.value)}
            ></input>
          </label>
        </div>
      )}
      {type === "number" && (
        <div>
          <label>
            {label}
            <input type="number" style={inputStyles} />
          </label>
        </div>
      )}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default FormElement;
