import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './style.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="products" element={<h1>Product Crud</h1>} />
          <Route path="categories" element={<h1>Category Crud</h1>} />
          <Route path="users" element={<h1>User Crud</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
