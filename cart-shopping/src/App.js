import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Products from './components/shared/Products';
import ProductDetails from './components/shared/ProductDetails';
import Navbar from './components/shared/Navbar';
import Cart from './components/shared/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </div>
  );
}

export default App;
