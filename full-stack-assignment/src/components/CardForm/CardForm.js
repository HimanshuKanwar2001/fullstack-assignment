import React, { useState } from "react";
import axios from "axios";
import "./CardForm.css";

const CardForm = (toggleForm) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData); 
      const response = await axios.post(
        "http://localhost:8000/cards",
        formData
      );
      console.log(response.data);
      alert("Card created successfully");
    } catch (error) {
      console.error(
        "Error creating card",
        error.response ? error.response.data : error
      );
      alert("Failed to create card");
    }
  };

  return (
    <div className="card-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          {" "}
          Title
          <input
            id="title"
            type="text"
            onChange={handleChange}
            value={formData.title}
            name="title"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            type="text"
            onChange={handleChange}
            value={formData.description}
            name="description"
          />
        </label>
        <label htmlFor="link">
          Link
          <input
            id="link"
            type="url"
            onChange={handleChange}
            value={formData.link}
            name="link"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CardForm;
