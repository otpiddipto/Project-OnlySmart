import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  Star, 
  Play, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Shield,
  Target,
  Zap
} from 'lucide-react';
import '../styles/pages/HomePage.css';

const HomePage = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "React & Next.js Masterclass",
      instructor: "John Doe",
      price: "Rp 299.000",
      originalPrice: "Rp 499.000",
      rating: 4.8,
      students: 1234,
      duration: "12 jam",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "Programming"
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      instructor: "Jane Smith",
      price: "Rp 199.000",
      originalPrice: "Rp 349.000",
      rating: 4.9,
      students: 856,
      duration: "8 jam",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "Design"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Mike Johnson",
      price: "Rp 249.000",
      originalPrice: "Rp 399.000",
      rating: 4.7,
      students: 2341,
      duration: "10 jam",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Marketing"
    }
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "Siswa Aktif" },
    { icon: BookOpen, number: "500+", label: "Kelas Tersedia" },
    { icon: Award, number: "100+", label: "Instruktur Expert" },
    { icon: Globe, number: "25+", label: "Negara" }
  ];

  const features = [
    {
      icon: Play,
      title: "Video Berkualitas HD",
      description: "Materi pembelajaran dengan kualitas video terbaik dan audio jernih"
    },
    {
      icon: CheckCircle,
      title: "Sertifikat Resmi",
      description: "Dapatkan sertifikat yang diakui industri setelah menyelesaikan kelas"
    },
    {
      icon: Clock,
      title: "Akses Selamanya",
      description: "Belajar kapan saja dan dimana saja dengan akses unlimited"
    },
    {
      icon: Shield,
      title: "Garansi 30 Hari",
      description: "Tidak puas? Dapatkan refund 100% dalam 30 hari pertama"
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Kembangkan Skill Anda dengan 
                <span className="text-primary"> Kelas Online Terbaik</span>
              </h1>
              <p>
                Bergabunglah dengan ribuan siswa yang telah mengembangkan karir mereka 
                melalui kelas-kelas berkualitas tinggi dari instruktur expert.
              </p>
              <div className="hero-buttons">
                <Link to="/courses" className="btn btn-primary">
                  Jelajahi Kelas
                  <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="btn btn-outline">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <Star className="text-warning" size={20} />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="stat">
                  <Users className="text-primary" size={20} />
                  <span>50,000+ Siswa</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Online Learning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon size={32} className="text-primary" />
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Kelas Populer</h2>
            <p>Pilihan kelas terbaik yang paling diminati oleh siswa</p>
          </div>
          <div className="courses-grid">
            {featuredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-category">{course.category}</div>
                </div>
                <div className="course-content">
                  <h4>{course.title}</h4>
                  <p className="instructor">oleh {course.instructor}</p>
                  <div className="course-meta">
                    <div className="rating">
                      <Star size={16} className="text-warning" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="students">
                      <Users size={16} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="duration">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="course-price">
                    <span className="current-price">{course.price}</span>
                    <span className="original-price">{course.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/courses" className="btn btn-primary">
              Lihat Semua Kelas
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-lighter">
        <div className="container">
          <div className="section-header text-center">
            <h2>Mengapa Memilih EduMarket?</h2>
            <p>Keunggulan platform pembelajaran online kami</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Siap Memulai Perjalanan Belajar Anda?</h2>
            <p>
              Bergabunglah dengan komunitas pembelajar terbesar di Indonesia 
              dan kembangkan skill yang dibutuhkan industri.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary">
                Daftar Sekarang
              </Link>
              <Link to="/courses" className="btn btn-outline">
                Lihat Kelas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 