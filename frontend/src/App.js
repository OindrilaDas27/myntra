import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import InspoPage from './pages/InspoPage/InspoPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Account from './pages/Account/Account';
import AppBar from './components/AppBar/AppBar';
import BottomNavBar from './components/BottomNavbar/BottomNavBar';
import TakeInspo from './pages/TakeInspo/TakeInspo';
import MoodBoard from './pages/MoodBoard/MoodBoard';
import InspoDetail from './pages/InspoDetail/InspoDetail';
import BentoGrid from './components/BentoGrid/BentoGrid';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/inspo' element={<InspoPage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/account' element={<Account />} />
        <Route path='/inspo/:id' element={<InspoDetail />} />
        <Route path='/inspo/grid' element={<BentoGrid />} />
        <Route path='/inspo/moodboard' element={<MoodBoard />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
