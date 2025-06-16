import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, BookOpen, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

  const navigate = useNavigate();
  const [serverMessage, setServerMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Nama depan harus diisi';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Nama belakang harus diisi';
    }

    if (!formData.email) {
      newErrors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.password) {
      newErrors.password = 'Password harus diisi';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password minimal 8 karakter';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password harus mengandung huruf besar, huruf kecil, dan angka';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password harus diisi';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Anda harus menyetujui syarat dan ketentuan';
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
      // Here you would typically handle the registration logic
      console.log('Registration attempt:', formData);
      alert('Pendaftaran berhasil! (Demo)');
    }, 2000);

    

    try{
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if(data.success){
        navigate('/login');
      }else{
        setServerMessage(data.message|| 'registrasi gagal');
      }
    }catch{
      setServerMessage('Terjadi kesalahan saat registrasi');
    }finally{
      setIsLoading(false);
    }
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;

    const labels = ['', 'Sangat Lemah', 'Lemah', 'Sedang', 'Kuat', 'Sangat Kuat'];
    return { strength, label: labels[strength] };
  };

  const passwordStrength = getPasswordStrength();

  

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-primary-50">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[700px] bg-white rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Image */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-800 relative flex items-center justify-center overflow-hidden min-h-full order-2 lg:order-1">
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=800&fit=crop" 
                alt="Online Learning"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 text-center text-white p-8 lg:p-10 max-w-md">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">Bergabunglah dengan Komunitas Pembelajar</h2>
                <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">Akses ke ribuan kelas berkualitas tinggi dan kembangkan skill yang dibutuhkan industri</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    <Check size={20} className="text-primary-200 flex-shrink-0" />
                    <span className="text-base">Akses unlimited ke semua kelas</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <Check size={20} className="text-primary-200 flex-shrink-0" />
                    <span className="text-base">Sertifikat yang diakui industri</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <Check size={20} className="text-primary-200 flex-shrink-0" />
                    <span className="text-base">Komunitas pembelajar aktif</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <Check size={20} className="text-primary-200 flex-shrink-0" />
                    <span className="text-base">Mentor expert siap membantu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-16 flex flex-col justify-center min-h-full order-1 lg:order-2">
            <div className="text-center mb-10">
              <Link to="/" className="flex items-center justify-center gap-3 text-primary-500 text-2xl font-bold mb-8 hover:text-primary-600 transition-colors">
                <BookOpen size={32} />
                <span>OnlySmart</span>
              </Link>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Buat Akun Baru</h1>
              <p className="text-gray-600">Mulai perjalanan pembelajaran Anda hari ini</p>
            </div>

            {serverMessage && (
              <div className="text-red-500 text-sm mb-4">{serverMessage}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">Nama Depan</label>
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Nama depan"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-base transition-all focus:outline-none focus:ring-3 focus:ring-primary-100 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                      }`}
                    />
                  </div>
                  {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Nama Belakang</label>
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Nama belakang"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-base transition-all focus:outline-none focus:ring-3 focus:ring-primary-100 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                      }`}
                    />
                  </div>
                  {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                <div className="relative">
                  <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email Anda"
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-base transition-all focus:outline-none focus:ring-3 focus:ring-primary-100 ${
                      errors.email ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                    }`}
                  />
                </div>
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Buat password"
                    className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl text-base transition-all focus:outline-none focus:ring-3 focus:ring-primary-100 ${
                      errors.password ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                    }`}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div 
                        className={`h-full transition-all duration-300 rounded-full ${
                          passwordStrength.strength === 1 ? 'w-1/5 bg-red-500' :
                          passwordStrength.strength === 2 ? 'w-2/5 bg-yellow-500' :
                          passwordStrength.strength === 3 ? 'w-3/5 bg-yellow-400' :
                          passwordStrength.strength === 4 ? 'w-4/5 bg-green-500' :
                          passwordStrength.strength === 5 ? 'w-full bg-green-600' : 'w-0'
                        }`}
                      ></div>
                    </div>
                    <span className={`text-xs ${
                      passwordStrength.strength === 1 ? 'text-red-500' :
                      passwordStrength.strength === 2 ? 'text-yellow-500' :
                      passwordStrength.strength === 3 ? 'text-yellow-400' :
                      passwordStrength.strength === 4 ? 'text-green-500' :
                      passwordStrength.strength === 5 ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      {passwordStrength.label}
                    </span>
                  </div>
                )}
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">Konfirmasi Password</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Konfirmasi password"
                    className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl text-base transition-all focus:outline-none focus:ring-3 focus:ring-primary-100 ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-200 focus:border-primary-500'
                    }`}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
              </div>

              <div className="flex items-start gap-3 my-6">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className={`w-4 h-4 mt-1 text-primary-500 border-gray-300 rounded focus:ring-primary-500 flex-shrink-0 ${
                    errors.agreeToTerms ? 'border-red-500' : ''
                  }`}
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                  Saya setuju dengan <Link to="/terms" className="text-primary-500 hover:text-primary-600 hover:underline">Syarat & Ketentuan</Link> dan <Link to="/privacy" className="text-primary-500 hover:text-primary-600 hover:underline">Kebijakan Privasi</Link>
                </label>
              </div>
              {errors.agreeToTerms && <span className="text-red-500 text-sm">{errors.agreeToTerms}</span>}

              <button 
                type="submit" 
                className={`w-full py-4 px-6 bg-primary-500 text-white text-base font-semibold rounded-xl transition-all duration-300 ${
                  isLoading 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-lg'
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Memproses...' : 'Daftar Sekarang'}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">atau</span>
                </div>
              </div>

              <div className="space-y-3">
                <button type="button" className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-primary-500 hover:bg-primary-50 transition-all">
                  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
                  Daftar dengan Google
                </button>
                <button type="button" className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-primary-500 hover:bg-primary-50 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Daftar dengan Facebook
                </button>
              </div>

              <div className="text-center text-sm text-gray-600 mt-8">
                <p>Sudah punya akun? <Link to="/login" className="text-primary-500 font-semibold hover:text-primary-600 hover:underline">Masuk sekarang</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 