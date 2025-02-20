import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Insert.css';

const Insert = () => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    address: '',
    dateOfBirth: '',
    phoneNo: ''
  });

  const { code, name, address, dateOfBirth, phoneNo } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8083/insert', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Data inserted successfully!');
      setFormData({ code: '', name: '', address: '', dateOfBirth: '', phoneNo: '' });
    } catch (err) {
      console.error('Error inserting data:', err);
      alert('Error inserting data. Check backend.');
    }
  };

  const handleRefresh = () => {
    setFormData({ code: '', name: '', address: '', dateOfBirth: '', phoneNo: '' });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Employee Index</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div>
            <label className="form-label">Employee Code</label>
            <input
              type="text"
              name="code"
              value={code}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">Employee Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">Address</label>
            <textarea
              name="address"
              value={address}
              onChange={handleChange}
              className="form-textarea"
              rows="3"
              required
            ></textarea>
          </div>
          <div>
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label">Phone No.</label>
            <input
              type="text"
              name="phoneNo"
              value={phoneNo}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" className="button button-save">Save</button>
            <button type="button" onClick={handleRefresh} className="button button-refresh">Refresh</button>
            <Link to="/fetch">
              <button type="button" className="button button-fetch">Fetch</button>
            </Link>
            <Link to="/update">
              <button type="button" className="button button-update">Update</button>
            </Link>
            <Link to="/delete">
              <button type="button" className="button button-delete">Delete</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Insert;
