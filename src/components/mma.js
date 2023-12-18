// Import React and necessary hooks from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Fighters from "./fighters"; // Import Fighters component

// Functional component representing the MMA section
function Mma() {
  // State to store the fetched data
  const [fighters, setFighters] = useState([]);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      // Make an API call to get the fighters data
      const response = await axios.get('http://localhost:4000/api/fighters');
      // Update the state with the fetched data
      setFighters(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount using useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // Function to reload data
  const reload = () => {
    fetchData();
  };

  // Render the MMA component
  return (
    <div className="mma-container">
      <br></br><br></br>
      <h2 className="mma-title">Welcome to the MMA Component!</h2>
      <br></br><br></br>
      {/* Pass data and reload function to Fighters component */}
      <Fighters myFighters={fighters} reloadData={reload} />
    </div>
  );
}

// Export the Mma component to make it available for use in other parts of the application
export default Mma;
