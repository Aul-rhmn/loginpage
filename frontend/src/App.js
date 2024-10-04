import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed from Switch to Routes
import Login from './components/Login';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Use element prop instead of component */}
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;
