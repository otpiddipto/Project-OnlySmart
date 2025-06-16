import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, Mail, Lock, User, Phone, AlertCircle, CheckCircle, Loader } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register, loading } = useAuth();
  
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password_hash: '',
    phone: '',
    role: 'student'
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  // Get redirect path
  const from = location.state?.from?.pathname || '/';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email harus diisi';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    // Password validation
    if (!formData.password_hash) {
      newErrors.password_hash = 'Password harus diisi';
    } else if (formData.password_hash.length < 6) {
      newErrors.password_hash = 'Password minimal 6 karakter';
    }

    // Registration-specific validations
    if (!isLogin) {
      if (!formData.first_name) {
        newErrors.first_name = 'Nama depan harus diisi';
      }
      if (!formData.last_name) {
        newErrors.last_name = 'Nama belakang harus diisi';
      }
      if (formData.phone && !/^[\d\s\-+()]+$/.test(formData.phone)) {
        newErrors.phone = 'Format nomor telepon tidak valid';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!validateForm()) {
      return;
    }

    try {
      let result;
      
      if (isLogin) {
        result = await login(formData.email, formData.password_hash);
      } else {
        result = await register(formData);
      }

      if (result.success) {
        setMessage(`${isLogin ? 'Login' : 'Registrasi'} berhasil!`);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      } else {
        setMessage(result.error || `${isLogin ? 'Login' : 'Registrasi'} gagal`);
      }
    } catch (error) {
      console.error('Auth error:', error);
      setMessage('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      password_hash: '',
      phone: '',
      // role: 'student'
    });
    setErrors({});
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-block mb-6">
            <h1 className="text-3xl font-bold text-primary-600">OnlySmart</h1>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Masuk ke Akun Anda' : 'Daftar Akun Baru'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
            <button
              onClick={toggleMode}
              className="ml-1 font-medium text-primary-600 hover:text-primary-500 transition-colors"
            >
              {isLogin ? 'Daftar di sini' : 'Masuk di sini'}
            </button>
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {message && (
            <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              message.includes('berhasil') 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message.includes('berhasil') ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span className="text-sm font-medium">{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Registration fields */}
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Depan
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                          errors.first_name 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-primary-500'
                        }`}
                        placeholder="Nama depan"
                      />
                    </div>
                    {errors.first_name && (
                      <p className="mt-1 text-sm text-red-600">{errors.first_name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Belakang
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                          errors.last_name 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-primary-500'
                        }`}
                        placeholder="Nama belakang"
                      />
                    </div>
                    {errors.last_name && (
                      <p className="mt-1 text-sm text-red-600">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon (Opsional)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                        errors.phone 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-primary-500'
                      }`}
                      placeholder="+62 812-3456-7890"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Daftar Sebagai
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="student">Siswa</option>
                    <option value="instructor">Guru/Instruktur</option>
                  </select>
                </div> */}
              </>
            )}

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-primary-500'
                  }`}
                  placeholder="nama@email.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="password_hash"
                  name="password_hash"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password_hash}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                    errors.password_hash 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-gray-200 focus:border-primary-500'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password_hash && (
                <p className="mt-1 text-sm text-red-600">{errors.password_hash}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <Loader className="animate-spin" size={20} />}
              {loading ? 'Memproses...' : (isLogin ? 'Masuk' : 'Daftar')}
            </button>

            {/* Demo accounts */}
            {isLogin && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2 font-medium">Demo Akun:</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p><strong>Siswa:</strong> student@example.com / password123</p>
                  <p><strong>Guru:</strong> teacher@example.com / password123</p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>Dengan mendaftar, Anda menyetujui</p>
          <div className="space-x-1">
            <Link to="/terms" className="text-primary-600 hover:text-primary-500">
              Syarat & Ketentuan
            </Link>
            <span>dan</span>
            <Link to="/privacy" className="text-primary-600 hover:text-primary-500">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 