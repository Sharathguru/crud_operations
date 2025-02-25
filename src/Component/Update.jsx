import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Insert.css';

const Update = () => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    address: '',
    stateName: '',
    gender: '',
    dateOfBirth: '',
    phoneNo: ''
  });

  const { code, name, address, stateName, gender, dateOfBirth, phoneNo } = formData;

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
      const response = await axios.put(`http://localhost:8083/update/${code}`, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Data updated successfully!');
      setFormData({ code: '', name: '', address: '', stateName: '', gender: '', dateOfBirth: '', phoneNo: '' });
    } catch (err) {
      console.error('Error updating data:', err);
      alert('Error updating data. Check backend.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Update Employee</h2>
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
            <label className="form-label">State Name</label>
            <select
              name="stateName"
              value={stateName}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select State</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Kerala">Kerala</option>
              <option value="Tumkur">Tumkur</option>
            </select>
          </div>
          <div>
            <label className="form-label">Gender</label>
            <div className="form-radio-group">
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={handleChange}
                  className="form-radio-input"
                  required
                />
                Male
              </label>
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={handleChange}
                  className="form-radio-input"
                  required
                />
                Female
              </label>
            </div>
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
            <button type="submit" className="button button-update">Update</button>
            <Link to="/">
              <button type="button" className="button button-save">Insert</button>
            </Link>
            <Link to="/delete">
              <button type="button" className="button button-delete">Delete</button>
            </Link>
            <Link to="/">
              <button type="button" className="button button-exit">Exit</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;