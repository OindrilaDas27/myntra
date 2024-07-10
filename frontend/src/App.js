import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import InspoPage from './pages/InspoPage/InspoPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Account from './pages/Account/Account';
import AppBar from './components/AppBar/AppBar';
import BottomNavBar from './components/BottomNavbar/BottomNavBar';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/inspo' element={<InspoPage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
