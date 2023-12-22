// DragDrop.jsx
import React, { useState } from "react";
import FormElement from "./FormElement";
import "../App.css";
import { useDrop } from "react-dnd";
import axios from "axios";

const FormList = [
  { id: 1, type: "radio", label: "Option 1" },
  { id: 2, type: "text", label: "Text " },
  { id: 3, type: "email", label: "Email " },
  { id: 4, type: "phone", label: "Phone Number " },
  { id: 5, type: "firstName", label: "First Name " },
  { id: 6, type: "date", label: "Date Field" },
  { id: 7, type: "address", label: "Address " },
  { id: 8, type: "title", label: "Title" },
  { id: 9, type: "checkbox", label: "Checkbox" }, // Add checkbox form element
  { id: 10, type: "number", label: "Number" }, // Add number form element
  // Add more form elements as needed
];

const DragDrop = () => {
  const [forms, setForms] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "form",
    drop: (item) => addFormToFormList(item.id, item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addFormToFormList = (id, type) => {
    const formElement = FormList.find(
      (form) => form.id === id && form.type === type
    );
    setForms((currentForms) => [...currentForms, formElement]);
  };

  const deleteForm = (id) => {
    setForms((currentForms) => currentForms.filter((form) => form.id !== id));
  };
  const formConfig = forms.map((form) => ({
    id: form.id,
    type: form.type,
    label: form.label,
  }));
  const [formName, setFormname] = useState("teste");
  const handleFormnamechange = (name) => {
    setFormname(name);
  };
  const handleCreateForm = async () => {
    await axios
      .post("http://localhost:6002/forms", { formName, formConfig })
      .then((response) => {
        if (response.status === 201) {
          console.log("data saved");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [textColor, setTextColor] = useState("red");
  const [fontSize, setFontSize] = useState(16);

  const handleTextColorChange = (color) => {
    setTextColor(color);
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const styles = {
    color: textColor,
    fontSize: `${fontSize}px`,
  };

  return (
    <>
      <div className="FormElements">
        {FormList.map((form) => (
          <FormElement
            key={form.id}
            id={form.id}
            type={form.type}
            label={form.label}
            onDelete={deleteForm}
          />
        ))}
      </div>
      <div className="reglage">
        <h1>Edit Text Color and Size</h1>
        <label>
          Text Color:
          <input
            type="color"
            onChange={(e) => handleTextColorChange(e.target.value)}
          />
        </label>
        <label>
          Font Size:
          <input
            type="number"
            onChange={(e) => handleFontSizeChange(e.target.value)}
          />
        </label>
        <label>
          Form Name
          <input
            type="text"
            onChange={(e) => handleFormnamechange(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="Forms" ref={drop} style={styles}>
        {forms.map((form) => (
          <FormElement
            key={form.id}
            id={form.id}
            type={form.type}
            label={form.label}
            onDelete={deleteForm}
          />
        ))}
        <button className="CreateButton" onClick={handleCreateForm}>
          Create
        </button>
      </div>
    </>
  );
};

export default DragDrop;
