import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Clock, Download, ArrowLeft, Calendar, CreditCard, User } from 'lucide-react';

const TransactionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  // Get transaction data from navigation state (from checkout)
  const transactionData = location.state;

  // Sample transaction history data
  const sampleTransactions = [
    {
      id: 'TXN' + Date.now(),
      status: 'success',
      course: {
        title: 'Biologi Lengkap',
        instructor: 'Hotman Paris',
        image: '/src/assets/images/biologi.jpeg'
      },
      amount: 299000,
      date: new Date().toISOString(),
      paymentMethod: 'Kartu Kredit'
    },
    {
      id: 'TXN1634567890',
      status: 'success',
      course: {
        title: 'Matematika Dasar',
        instructor: 'Dr. Susi Susanti',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop'
      },
      amount: 199000,
      date: '2024-01-15T10:30:00Z',
      paymentMethod: 'Transfer Bank'
    },
    {
      id: 'TXN1634567891',
      status: 'pending',
      course: {
        title: 'Fisika Kuantum',
        instructor: 'Prof. Einstein',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=250&fit=crop'
      },
      amount: 399000,
      date: '2024-01-14T15:20:00Z',
      paymentMethod: 'E-Wallet'
    },
    {
      id: 'TXN1634567892',
      status: 'failed',
      course: {
        title: 'Kimia Organik',
        instructor: 'Dr. Marie Curie',
        image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=250&fit=crop'
      },
      amount: 249000,
      date: '2024-01-13T09:15:00Z',
      paymentMethod: 'Kartu Kredit'
    }
  ];

  useEffect(() => {
    // If coming from checkout, add the new transaction
    if (transactionData) {
      const newTransaction = {
        ...transactionData,
        date: new Date().toISOString(),
        paymentMethod: 'Kartu Kredit'
      };
      setTransactions([newTransaction, ...sampleTransactions]);
    } else {
      setTransactions(sampleTransactions);
    }
  }, [transactionData]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="text-green-500" size={24} />;
      case 'pending':
        return <Clock className="text-yellow-500" size={24} />;
      case 'failed':
        return <XCircle className="text-red-500" size={24} />;
      default:
        return <Clock className="text-gray-500" size={24} />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'success':
        return 'Berhasil';
      case 'pending':
        return 'Menunggu';
      case 'failed':
        return 'Gagal';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'failed':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const downloadReceipt = (transactionId) => {
    // Simulate receipt download
    alert(`Mengunduh struk untuk transaksi ${transactionId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft size={20} />
            Kembali
          </button>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Transaksi</h1>
          <p className="text-gray-600 mt-2">Kelola dan pantau status transaksi Anda</p>
        </div>

        {/* Success Message for New Transaction */}
        {transactionData && transactionData.status === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <CheckCircle size={32} className="text-green-500" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-green-800 mb-2">Pembayaran Berhasil!</h3>
                <p className="text-green-700">
                  Transaksi untuk kelas "{transactionData.course.title}" telah berhasil diproses.
                </p>
                <p className="text-green-600 text-sm mt-1">
                  ID Transaksi: {transactionData.transactionId}
                </p>
              </div>
              <button
                onClick={() => downloadReceipt(transactionData.transactionId)}
                className="btn btn-outline-primary flex items-center gap-2"
              >
                <Download size={16} />
                Unduh Struk
              </button>
            </div>
          </div>
        )}

        {/* Transaction History */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Riwayat Transaksi</h2>
            <p className="text-gray-600 mt-1">Semua transaksi pembelian kelas Anda</p>
          </div>

          <div className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(transaction.status)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{transaction.course.title}</h3>
                      <p className="text-sm text-gray-600">oleh {transaction.course.instructor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">
                      Rp {transaction.amount.toLocaleString()}
                    </p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {getStatusText(transaction.status)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{formatDate(transaction.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard size={16} />
                    <span>{transaction.paymentMethod}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>ID: {transaction.id}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    {transaction.status === 'success' && (
                      <button
                        onClick={() => downloadReceipt(transaction.id)}
                        className="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center gap-1"
                      >
                        <Download size={14} />
                        Unduh Struk
                      </button>
                    )}
                    {transaction.status === 'failed' && (
                      <button
                        onClick={() => navigate('/checkout')}
                        className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                      >
                        Coba Lagi
                      </button>
                    )}
                  </div>
                  
                  {transaction.status === 'success' && (
                    <button
                      onClick={() => navigate('/courses')}
                      className="btn btn-primary btn-sm"
                    >
                      Mulai Belajar
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {transactions.length === 0 && (
            <div className="p-12 text-center">
              <CreditCard size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Belum Ada Transaksi</h3>
              <p className="text-gray-600 mb-6">
                Anda belum melakukan pembelian kelas apapun
              </p>
              <button
                onClick={() => navigate('/courses')}
                className="btn btn-primary"
              >
                Jelajahi Kelas
              </button>
            </div>
          )}
        </div>

        {/* Transaction Summary */}
        {transactions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaksi Berhasil</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {transactions.filter(t => t.status === 'success').length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-yellow-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Menunggu Pembayaran</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {transactions.filter(t => t.status === 'pending').length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <XCircle className="text-red-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaksi Gagal</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {transactions.filter(t => t.status === 'failed').length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionPage; 