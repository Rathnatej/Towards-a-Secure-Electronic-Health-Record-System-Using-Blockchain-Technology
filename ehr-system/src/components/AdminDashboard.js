import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await axios.get('/api/admin/policies', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setPolicies(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPolicies();
  }, []);

  return (
    <div className="dashboard">
      <h2>Manage Access Policies</h2>
      <ul>
        {policies.map(policy => (
          <li key={policy.id}>
            <p>{policy.user}: {policy.accessLevel}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
