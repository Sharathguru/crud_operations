import React, { useState } from 'react';
import axios from 'axios';
import './Insert.css';

const Fetch = () => {
  const [code, setCode] = useState('');
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8083/fetch/${code}`);
      setEmployee(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching employee. Check backend.');
      console.error(err);
      setEmployee(null);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Fetch Employee</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div>
            <label className="form-label">Employee Code</label>
            <input
              type="text"
              value={code}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="button button-fetch">Fetch</button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {employee && (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Code</th>
                <th className="py-2">Name</th>
                <th className="py-2">Address</th>
                <th className="py-2">Date of Birth</th>
                <th className="py-2">Phone No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{employee.code}</td>
                <td className="border px-4 py-2">{employee.name}</td>
                <td className="border px-4 py-2">{employee.address}</td>
                <td className="border px-4 py-2">{employee.dateOfBirth}</td>
                <td className="border px-4 py-2">{employee.phoneNo}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Fetch;