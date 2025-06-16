import { useState } from 'react';
import { CreditCard, User, Mail, Phone, MapPin, Shield, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample course data (in real app, this would come from cart/props)
  const courseData = {
    id: 1,
    title: "Biologi Lengkap",
    instructor: "Hotman Paris",
    price: 299000,
    originalPrice: 499000,
    image: "/src/assets/images/biologi.jpeg",
    duration: "12 jam",
    lessons: 45
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/transaction', { 
        state: { 
          status: 'success', 
          transactionId: 'TXN' + Date.now(),
          course: courseData,
          amount: courseData.price
        }
      });
    }, 3000);
  };

  const paymentMethods = [
    { id: 'credit-card', name: 'Kartu Kredit/Debit', icon: CreditCard },
    { id: 'bank-transfer', name: 'Transfer Bank', icon: CreditCard },
    { id: 'e-wallet', name: 'E-Wallet (GoPay, OVO, DANA)', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ChevronLeft size={20} />
            Kembali
          </button>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Selesaikan pembelian Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Customer Information */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-primary-500" size={24} />
                  <h2 className="text-xl font-bold text-gray-900">Informasi Pembeli</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Depan *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Masukkan nama depan"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Belakang *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Masukkan nama belakang"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="+62 xxx-xxxx-xxxx"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="text-primary-500" size={24} />
                  <h2 className="text-xl font-bold text-gray-900">Metode Pembayaran</h2>
                </div>

                <div className="space-y-4 mb-6">
                  {paymentMethods.map((method) => (
                    <label key={method.id} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary-300 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-4 ${selectedPayment === method.id ? 'border-primary-500 bg-primary-500' : 'border-gray-300'}`}>
                        {selectedPayment === method.id && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>
                        )}
                      </div>
                      <method.icon size={20} className="text-gray-600 mr-3" />
                      <span className="font-medium text-gray-900">{method.name}</span>
                    </label>
                  ))}
                </div>

                {/* Credit Card Details */}
                {selectedPayment === 'credit-card' && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama di Kartu *
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Nama sesuai kartu"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Kartu *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        maxLength="19"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tanggal Kadaluwarsa *
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          maxLength="5"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="MM/YY"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          maxLength="4"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isProcessing 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Memproses Pembayaran...
                  </div>
                ) : (
                  `Bayar Sekarang - Rp ${courseData.price.toLocaleString()}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Pesanan</h2>
              
              <div className="border-b pb-6 mb-6">
                <div className="flex gap-4">
                  <img 
                    src={courseData.image} 
                    alt={courseData.title}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{courseData.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">oleh {courseData.instructor}</p>
                    <p className="text-xs text-gray-500">{courseData.duration} • {courseData.lessons} pelajaran</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Harga Asli</span>
                  <span className="line-through text-gray-400">Rp {courseData.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Harga Diskon</span>
                  <span className="text-primary-500 font-semibold">Rp {courseData.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hemat</span>
                  <span className="text-green-500 font-semibold">Rp {(courseData.originalPrice - courseData.price).toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-primary-500">Rp {courseData.price.toLocaleString()}</span>
                </div>
                
                <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-xl">
                  <Shield size={16} className="text-blue-500 mt-0.5" />
                  <div className="text-xs text-blue-700">
                    <p className="font-medium">Jaminan 30 Hari Uang Kembali</p>
                    <p>Tidak puas? Dapatkan refund 100%</p>
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

export default CheckoutPage; 