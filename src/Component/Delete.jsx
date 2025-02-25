import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Insert.css';

const Delete = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    if (!code.trim()) {
      alert("Please enter an Employee Code to delete.");
      return;
    }

    try {
      await axios.delete(`http://localhost:8083/delete/${code}`);
      setMessage(`Employee with code "${code}" deleted successfully!`);
      setCode('');
    } catch (err) {
      setMessage("Error deleting employee. Check backend.");
      console.error("Delete Error:", err);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Delete Employee</h2>
        <div className="form-grid">
          <div>
            <label className="form-label">Employee Code</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button onClick={handleDelete} className="button button-delete">Delete</button>
        </div>
        <br/>
        <Link to="/">
        <button type="button" className="button button-exit1">Exit</button>
        </Link>
        {message && <p className="text-red-500">{message}</p>}
        <div className="button-container">
          
        </div>
      </div>
    </div>
  );
};

export default Delete;