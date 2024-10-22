import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorDashboard = () => {
  const [patientRecords, setPatientRecords] = useState([]);

  useEffect(() => {
    const fetchPatientRecords = async () => {
      try {
        const response = await axios.get('/api/doctor/patients', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setPatientRecords(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPatientRecords();
  }, []);

  return (
    <div className="dashboard">
      <h2>Patient Records</h2>
      <ul>
        {patientRecords.map(record => (
          <li key={record.id}>
            <p>{record.patientName}: {record.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;
