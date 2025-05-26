import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  BookOpen, 
  Globe,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';
import '../styles/pages/AboutPage.css';

const AboutPage = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Siswa Aktif" },
    { icon: BookOpen, number: "500+", label: "Kelas Tersedia" },
    { icon: Award, number: "100+", label: "Instruktur Expert" },
    { icon: Globe, number: "25+", label: "Negara" }
  ];

  const values = [
    {
      icon: Target,
      title: "Fokus pada Kualitas",
      description: "Kami berkomitmen memberikan konten pembelajaran berkualitas tinggi yang relevan dengan kebutuhan industri."
    },
    {
      icon: Heart,
      title: "Pembelajaran yang Menyenangkan",
      description: "Metode pembelajaran yang interaktif dan engaging untuk memastikan pengalaman belajar yang optimal."
    },
    {
      icon: Users,
      title: "Komunitas yang Supportif",
      description: "Membangun komunitas pembelajar yang saling mendukung dan berbagi pengetahuan."
    },
    {
      icon: CheckCircle,
      title: "Hasil yang Terukur",
      description: "Fokus pada pencapaian hasil nyata yang dapat meningkatkan karir dan skill siswa."
    }
  ];

  const team = [
    {
      id: 1,
      name: "Sudipto Prabangkoro Adristo",
      position: "CEO & Founder",
      image: "https://stbm7resourcesprod.blob.core.windows.net/profilepicture/7a628238-b7fb-43fc-8753-a7a9e9bf7abd.jpg",
      description: "Mantan VP Engineering di Google dengan pengalaman 15 tahun di industri teknologi."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert dalam pengembangan platform pembelajaran dengan background dari Stanford University."
    },
    {
      id: 3,
      name: "Lisa Wang",
      position: "Head of Content",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Spesialis kurikulum dengan pengalaman mengembangkan program pelatihan di Fortune 500 companies."
    },
    {
      id: 4,
      name: "David Rodriguez",
      position: "Head of Community",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Community builder berpengalaman yang telah membangun komunitas tech dengan 100K+ members."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmad Rizki",
      position: "Software Engineer at Tokopedia",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      content: "OnlySmart benar-benar mengubah karir saya. Dari yang tidak tahu programming sama sekali, sekarang saya bekerja sebagai Software Engineer di perusahaan unicorn.",
      rating: 5
    },
    {
      id: 2,
      name: "Sari Dewi",
      position: "UI/UX Designer at Gojek",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      content: "Kualitas materi dan instruktur di OnlySmart sangat luar biasa. Portfolio yang saya buat setelah mengikuti kelas UI/UX langsung diterima di Gojek.",
      rating: 5
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "Digital Marketing Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      content: "Sebagai pemilik UMKM, kelas digital marketing di OnlySmart membantu saya meningkatkan penjualan online hingga 300% dalam 6 bulan.",
      rating: 5
    }
  ];

  const milestones = [
    { year: "2020", event: "OnlySmart didirikan dengan visi demokratisasi pendidikan" },
    { year: "2021", event: "Mencapai 10,000 siswa dan meluncurkan 100 kelas pertama" },
    { year: "2022", event: "Ekspansi ke 10 negara dan kemitraan dengan universitas terkemuka" },
    { year: "2023", event: "50,000 siswa aktif dan 500+ kelas dari 100+ instruktur expert" },
    { year: "2024", event: "Meluncurkan program sertifikasi profesional dan AI learning assistant" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Tentang OnlySmart</h1>
            <p className="hero-subtitle">
              Platform pembelajaran online terdepan yang menghubungkan siswa dengan instruktur expert 
              untuk mengembangkan skill yang dibutuhkan di era digital.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon size={40} className="text-primary" />
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mission-vision">
            <div className="mission">
              <div className="icon-wrapper">
                <Target size={48} />
              </div>
              <h2>Misi Kami</h2>
              <p>
                Memberikan akses pendidikan berkualitas tinggi kepada semua orang, 
                di mana pun mereka berada, untuk mengembangkan skill yang relevan 
                dengan kebutuhan industri modern.
              </p>
            </div>
            <div className="vision">
              <div className="icon-wrapper">
                <Eye size={48} />
              </div>
              <h2>Visi Kami</h2>
              <p>
                Menjadi platform pembelajaran online terdepan di Asia Tenggara 
                yang memberdayakan jutaan orang untuk mencapai potensi terbaik 
                mereka melalui pendidikan yang accessible dan berkualitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-lighter">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nilai-Nilai Kami</h2>
            <p>Prinsip yang memandu setiap langkah perjalanan OnlySmart</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Tim Kami</h2>
            <p>Bertemu dengan para visioner di balik OnlySmart</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-lighter">
        <div className="container">
          <div className="section-header text-center">
            <h2>Perjalanan Kami</h2>
            <p>Milestone penting dalam pengembangan OnlySmart</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Apa Kata Mereka</h2>
            <p>Testimoni dari siswa yang telah merasakan manfaat OnlySmart</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <Quote size={32} className="quote-icon" />
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Bergabunglah dengan Revolusi Pembelajaran</h2>
            <p>
              Mulai perjalanan pembelajaran Anda bersama ribuan siswa lainnya 
              dan raih kesuksesan yang Anda impikan.
            </p>
            <div className="cta-buttons">
              <a href="/register" className="btn btn-primary">
                Mulai Belajar Sekarang
              </a>
              <a href="/courses" className="btn btn-outline">
                Jelajahi Kelas
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 