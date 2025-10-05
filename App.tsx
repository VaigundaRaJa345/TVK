
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhotosPage from './pages/PhotosPage';
import VideosPage from './pages/VideosPage';
import ArticlesPage from './pages/ArticlesPage';
import ContributePage from './pages/ContributePage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-tvk-black text-tvk-white font-sans flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticlesPage />} />
            <Route path="/contribute" element={<ContributePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
