import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimeListPage from './pages/AnimeListPage';
// import AnimeDetailPage from './pages/AnimeDetailPage';
// import WikiPage from './pages/WikiPage';
// import UserProfilePage from './pages/UserProfilePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/anime" element={<AnimeListPage />} />
                {/* <Route path="/anime/:id" element={<AnimeDetailPage />} />
                <Route path="/wiki" element={<WikiPage />} />
                <Route path="/profile" element={<UserProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} /> */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
