import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopAppBar from './components/TopAppBar';
import PageAbout from './pages/PageAbout'; // Pastikan impor halaman "Tentang Kami" sudah sesuai
import MidleBar from './components/MidleBar';

function App() {
  return (
    <div>
      <TopAppBar />
      <MidleBar/>
      <Routes>
        <Route path="/about" element={<PageAbout />} />
        {/* Tambahkan rute lainnya di sini jika diperlukan */}
      </Routes>
      
    </div>
  );
}

export default App;
