import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import AdminDashboard from './components/AdminDashboard';
import HospitalDashboard from './components/HospitalDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={PatientDashboard} />
        <Route path="/doctor" component={DoctorDashboard} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/hospital" component={HospitalDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
