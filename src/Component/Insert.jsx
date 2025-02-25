import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Insert.css';

const Insert = () => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    address: '',
    stateName: '',
    gender: '',
    dateOfBirth: '',
    phoneNo: ''
  });

  const [savedData, setSavedData] = useState([]);

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
      const response = await axios.post('http://localhost:8083/insert', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Data inserted successfully!');
      setSavedData([...savedData, response.data]);
      setFormData({ code: '', name: '', address: '', stateName: '', gender: '', dateOfBirth: '', phoneNo: '' });
    } catch (err) {
      console.error('Error inserting data:', err);
      alert('Error inserting data. Check backend.');
    }
  };

  const handleRefresh = () => {
    setFormData({ code: '', name: '', address: '', stateName: '', gender: '', dateOfBirth: '', phoneNo: '' });
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
            <button type="submit" className="button button-save">Save</button>
            <button type="button" onClick={handleRefresh} className="button button-refresh">Refresh</button>
            <Link to="/update">
              <button type="button" className="button button-update">Update</button>
            </Link>
            <Link to="/delete">
              <button type="button" className="button button-delete">Delete</button>
            </Link>
            <Link to="/logout">
              <button type="button" className="button button-delete">Logout</button>
            </Link>
            
          </div>
        </form>
        <div className="saved-data">
          <h3>Saved Employee Data</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Code</th>
                <th className="py-2">Name</th>
                <th className="py-2">Phone No.</th>
                <th className="py-2">Date of Birth</th>
                <th className="py-2">Address</th>
              </tr>
            </thead>
            <tbody>
              {savedData.map((data, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{data.code}</td>
                  <td className="border px-4 py-2">{data.name}</td>
                  <td className="border px-4 py-2">{data.phoneNo}</td>
                  <td className="border px-4 py-2">{data.dateOfBirth}</td>
                  <td className="border px-4 py-2">{data.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Insert;
