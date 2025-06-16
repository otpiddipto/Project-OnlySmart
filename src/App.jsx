import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';

import ProfilePage from './pages/ProfilePage';
import CheckoutPage from './pages/CheckoutPage';
import TransactionPage from './pages/TransactionPage';
import AddCoursePage from './pages/AddCoursePage';
import './App.css';



function App() {
  
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<LoginPage />} />
              
              {/* Protected routes - require authentication */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute requireAuth={true}>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/checkout" 
                element={
                  <ProtectedRoute requireAuth={true}>
                    <CheckoutPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/transaction" 
                element={
                  <ProtectedRoute requireAuth={true}>
                    <TransactionPage />
                  </ProtectedRoute>
                } 
              />
              
              {/* Instructor-only routes */}
              <Route 
                path="/add-course" 
                element={
                  <ProtectedRoute requireAuth={true} requiredRole="instructor">
                    <AddCoursePage />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
