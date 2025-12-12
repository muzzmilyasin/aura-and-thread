import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import CartModal from './components/CartModal';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Journal from './pages/Journal';

function AppRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </PageTransition>
  );
}

function App() {
  return (
    <BrowserRouter basename="/aura-and-thread">
      <CartProvider>
        <Layout>
          <AppRoutes />
        </Layout>
        <CartModal />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
