import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Component/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './Context/addProduct';
import UpdateProduct from './Context/updateProduct';
import ProductList from './Context/productList';
import SearchProduct from './Context/searchProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes> 
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/search" element={<SearchProduct />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
