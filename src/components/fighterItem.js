import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function FighterItem(props) {
  // State to manage the message displayed after performing actions
  const [message, setMessage] = useState('');

  // Function to handle the deletion of a fighter
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      // Send a request to delete the fighter
      await axios.delete(`http://localhost:4000/api/fighter/${props.myFighter._id}`);
      setMessage('Fighter deleted successfully!');

      // Reload the page after successful deletion
      window.location.reload();
    } catch (error) {
      console.error('Error deleting fighter:', error);
      setMessage('Error deleting fighter. Please try again.');
    }
  };

  // Function to handle the click event on the "Change" button
  const handleLinkClick = () => {
    setMessage('Change button clicked!');
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myFighter.picture} alt={props.myFighter.name} />
            <footer>{props.myFighter.name}</footer>
          </blockquote>
        </Card.Body>
        <div className="card-buttons">
          {/* Link to the "Change" page with click event handler */}
          <Link to={`/change/${props.myFighter._id}`} className="btn btn-primary" onClick={handleLinkClick}>
            Change
          </Link>
          {/* Button to delete the fighter with click event handler */}
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <br></br><br></br>
        </div>
      </Card>
      <br />
      {/* Display the message after performing actions */}
      <div>{message}</div>
      <br />
    </div>
  );
}

export default FighterItem;
