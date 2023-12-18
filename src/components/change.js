import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Change() {
  // Extracting the fighter ID from the URL using React Router's useParams
  const { id } = useParams();
  // Using React Router's useNavigate to programmatically navigate between pages
  const navigate = useNavigate();

  // State variables to manage the form input values
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [picture, setPicture] = useState('');

  // Fetching the fighter details from the API when the component mounts or when the ID changes
  useEffect(() => {
    axios.get(`http://localhost:4000/api/fighter/${id}`)
      .then((response) => {
        // Updating the state with the fetched fighter details
        setName(response.data.name);
        setAge(response.data.age);
        setPicture(response.data.picture);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // Handling form submission to update the fighter details
  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating a fighter object with the updated details
    const fighter = {
      name: name,
      age: age,
      picture: picture
    };

    // Making a PUT request to update the fighter details in the database
    axios.put(`http://localhost:4000/api/fighter/${id}`, fighter)
      .then(() => {
        // Navigating to the '/mma' page after successful update
        navigate('/mma');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h2 className="mb-4">Change Fighter Details</h2>
      {/* Form for changing fighter details */}
      <form onSubmit={handleSubmit}>
        {/* Input field for changing fighter name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Change Fighter Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
        </div>
        {/* Input field for changing fighter age */}
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Change Fighter Age:</label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => { setAge(e.target.value) }}
          />
        </div>
        {/* Input field for changing fighter picture */}
        <div className="mb-3">
          <label htmlFor="picture" className="form-label">Change Fighter Picture:</label>
          <input
            type="text"
            className="form-control"
            id="picture"
            value={picture}
            onChange={(e) => { setPicture(e.target.value) }}
          />
        </div>
        {/* Submit button for changing fighter details */}
        <div>
          <button type="submit" className="btn btn-primary">
            Change Fighter
          </button>
        </div>
      </form>
    </div>
  );
}
