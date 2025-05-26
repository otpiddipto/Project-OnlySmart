import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, BookOpen } from 'lucide-react';
import '../styles/pages/LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.password) {
      newErrors.password = 'Password harus diisi';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here you would typically handle the login logic
      console.log('Login attempt:', formData);
      alert('Login berhasil! (Demo)');
    }, 1500);
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          {/* Left Side - Form */}
          <div className="login-form-section">
            <div className="form-header">
              <Link to="/" className="logo">
                <BookOpen size={32} />
                <span>OnlySmart</span>
              </Link>
              <h1>Selamat Datang Kembali</h1>
              <p>Masuk ke akun Anda untuk melanjutkan pembelajaran</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <Mail size={20} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email Anda"
                    className={errors.email ? 'error' : ''}
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <Lock size={20} className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Masukkan password Anda"
                    className={errors.password ? 'error' : ''}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Ingat saya
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Lupa password?
                </Link>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary login-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Memproses...' : 'Masuk'}
              </button>

              <div className="divider">
                <span>atau</span>
              </div>

              <div className="social-login">
                <button type="button" className="btn btn-outline social-btn">
                  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
                  Masuk dengan Google
                </button>
                <button type="button" className="btn btn-outline social-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Masuk dengan Facebook
                </button>
              </div>

              <div className="signup-link">
                <p>Belum punya akun? <Link to="/register">Daftar sekarang</Link></p>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="login-image-section">
            <div className="image-content">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop" 
                alt="Online Learning"
              />
              <div className="image-overlay">
                <h2>Mulai Perjalanan Pembelajaran Anda</h2>
                <p>Bergabunglah dengan ribuan siswa yang telah mengembangkan karir mereka bersama OnlySmart</p>
                <div className="stats">
                  <div className="stat">
                    <strong>50,000+</strong>
                    <span>Siswa Aktif</span>
                  </div>
                  <div className="stat">
                    <strong>500+</strong>
                    <span>Kelas Tersedia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 