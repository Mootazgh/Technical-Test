// FormsIcreated.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormElement from "./FormElement"; // Make sure to import your FormElement component
import "../App.css";
const FormsIcreated = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // Fetch forms from the backend when the component mounts
    const fetchForms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:6002/forms/returnallforms"
        );
        if (response.data.success) {
          setForms(response.data.forms); // Update state with the fetched forms
        } else {
          console.error("Failed to fetch forms");
        }
      } catch (error) {
        console.error("Error fetching forms", error);
      }
    };

    fetchForms(); // Call the fetchForms function
  }, []); // Empty dependency array ensures this effect runs once on mount
  const handleDeleteAllForms = async () => {
    try {
      const res = await axios.delete("http://localhost:6002/forms/deleteall");
      if (res.data.success) {
        setForms([]);
        console.log("All forms deleted Successfully");
      } else {
        console.log("Failed to fetch forms");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="FormsIcreated">
      <h1>Forms I Created</h1>
      {forms.map((form) => (
        <div className="Forms" key={form._id}>
          <h2>{form.formName}</h2>
          {/* Render the formConfig as form elements */}
          {form.formConfig.map((element) => (
            <FormElement
              key={element.id}
              id={element.id}
              type={element.type}
              label={element.label}
            />
          ))}
        </div>
      ))}
      <button className="deleteForm" onClick={handleDeleteAllForms}>
        Delete Form
      </button>
    </div>
  );
};

export default FormsIcreated;
