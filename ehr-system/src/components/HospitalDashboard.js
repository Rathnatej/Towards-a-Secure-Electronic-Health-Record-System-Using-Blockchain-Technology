import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HospitalDashboard = () => {
  const [sharedRecords, setSharedRecords] = useState([]);

  useEffect(() => {
    const fetchSharedRecords = async () => {
      try {
        const response = await axios.get('/api/hospital/records', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setSharedRecords(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSharedRecords();
  }, []);

  return (
    <div className="dashboard">
      <h2>Shared Patient Records</h2>
      <ul>
        {sharedRecords.map(record => (
          <li key={record.id}>
            <p>{record.patientName}: {record.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalDashboard;
