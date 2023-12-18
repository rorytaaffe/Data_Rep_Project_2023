// Import React and useState hook from 'react'
import React, { useState } from "react";
import axios from "axios";

// Functional component representing the form for adding a new fighter
function New() {
  // State variables to track input values and display messages
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [picture, setPicture] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any input box is empty
    if (!name || !age || !picture) {
      setErrorMessage("All fields are required. Please fill them in.");
      return;
    }

    // Clear previous messages
    setSuccessMessage("");
    setErrorMessage("");

    // Prepare fighter object with input values
    const fighter = {
      name: name,
      age: age,
      picture: picture,
    };

    // Send POST request to add a new fighter
    axios.post("http://localhost:4000/api/fighter", fighter)
      .then(() => {
        // Display success message and reset input values
        setSuccessMessage("Fighter inserted successfully");
        setName("");
        setAge("");
        setPicture("");
      })
      .catch((error) => {
        // Display error message on request failure
        setErrorMessage("Error inserting fighter. Please try again.");
        console.error("Error inserting fighter:", error);
      });
  };

  // Render the New component
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Hello from the New Component!</h2>

      {/* Form for adding a new fighter */}
      <form onSubmit={handleSubmit}>
        {/* Fighter Name input */}
        <div className="mb-3">
          <label className="form-label">Insert Fighter Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Fighter Age input */}
        <div className="mb-3">
          <label className="form-label">Insert Fighter Age:</label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* Fighter Picture input */}
        <div className="mb-3">
          <label className="form-label">Insert Fighter Picture:</label>
          <input
            type="text"
            className="form-control"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Insert Fighter
        </button>
      </form>

      {/* Display success message if any */}
      {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage}
        </div>
      )}

      {/* Display error message if any */}
      {errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

// Export the New component to make it available for use in other parts of the application
export default New;
