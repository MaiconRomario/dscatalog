import Navbar from 'components/Navbar';
import Admin from 'Pages/Admin';
import Catalog from 'Pages/Catalog';
import Home from 'Pages/Home';
import ProductDatails from 'Pages/productDatails';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDatails />} />
      <Route
        path="/admin"
        element={<Navigate to="/admin/products" replace />}
      />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
