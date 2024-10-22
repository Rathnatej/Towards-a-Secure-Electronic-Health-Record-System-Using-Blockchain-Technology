import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientDashboard = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('/api/patient/records', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setRecords(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecords();
  }, []);

  const handleShare = async (recordId, hospitalId) => {
    try {
      await axios.post(`/api/patient/share`, { recordId, hospitalId }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Record shared successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard">
      <h2>My Medical Records</h2>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            <p>{record.description}</p>
            <button onClick={() => handleShare(record.id, 'hospital123')}>Share with Hospital</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientDashboard;
