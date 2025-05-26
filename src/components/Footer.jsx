import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <BookOpen size={32} />
              <span>OnlySmart</span>
            </div>
            <p className="footer-description">
              Platform pembelajaran online terbaik untuk mengembangkan skill dan karir Anda. 
              Bergabunglah dengan ribuan siswa yang telah merasakan manfaatnya.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Tautan Cepat</h4>
            <ul className="footer-links">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/courses">Kelas</Link></li>
              <li><Link to="/community">Komunitas</Link></li>
              <li><Link to="/about">Tentang Kami</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4>Kategori Kelas</h4>
            <ul className="footer-links">
              <li><a href="#">Programming</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Data Science</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Kontak</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>info@OnlySmart.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 OnlySmart. Semua hak dilindungi.</p>
            <div className="footer-bottom-links">
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 