import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 text-primary-400 text-2xl font-bold mb-4">
              <BookOpen size={32} />
              <span>OnlySmart</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Ucapkan selamat tinggal pada kesulitan belajar. OnlySmart hadir sebagai solusi cerdas untuk Anda. Temukan beragam pilihan kelas online yang diajarkan oleh guru-guru profesional, semua hanya dalam genggaman. Persiapkan diri Anda untuk meraih nilai terbaik dan pemahaman materi yang komprehensif.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-primary-500 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-primary-500 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-primary-500 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-primary-500 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">Beranda</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-primary-400 transition-colors">Kelas</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-primary-400 transition-colors">Komunitas</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">Tentang Kami</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kategori Kelas</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Matematika</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Biologi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Kimia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Fisika</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Bahasa Inggris</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-primary-400" />
                <span>info@OnlySmart.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-primary-400" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} className="text-primary-400" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">&copy; 2024 OnlySmart. Semua hak dilindungi.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 