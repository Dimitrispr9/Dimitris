import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './pages/Menu';
import AdminPanel from './pages/AdminPanel';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { PizzaProvider } from './context/PizzaContext';
import { ThemeProvider } from './context/ThemeContext';



function App() {
  return (
    <ThemeProvider>
      <PizzaProvider>
        <CartProvider>
          <Router>
            <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
              <Header />
              <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
              <Cart />
            </Box>
          </Router>
        </CartProvider>
      </PizzaProvider>
    </ThemeProvider>
  );
}

export default App;
