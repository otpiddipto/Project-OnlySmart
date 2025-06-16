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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Tentang OnlySmart</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Platform pembelajaran online terdepan yang menghubungkan siswa dengan instruktur expert 
            untuk mengembangkan skill yang dibutuhkan di era digital.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-3xl mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <stat.icon size={40} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 rounded-3xl mb-8">
                <Target size={48} className="text-primary-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Misi Kami</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Memberikan akses pendidikan berkualitas tinggi kepada semua orang, 
                di mana pun mereka berada, untuk mengembangkan skill yang relevan 
                dengan kebutuhan industri modern.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 rounded-3xl mb-8">
                <Eye size={48} className="text-primary-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Visi Kami</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Menjadi platform pembelajaran online terdepan di Asia Tenggara 
                yang memberdayakan jutaan orang untuk mencapai potensi terbaik 
                mereka melalui pendidikan yang accessible dan berkualitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Prinsip yang memandu setiap langkah perjalanan OnlySmart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  <value.icon size={32} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Bertemu dengan para visioner di balik OnlySmart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-500 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Perjalanan Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Milestone penting dalam pengembangan OnlySmart</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                  {milestone.year.slice(-2)}
                </div>
                <div className="ml-8 bg-white rounded-2xl p-6 shadow-lg flex-1">
                  <div className="text-sm font-semibold text-primary-500 mb-2">{milestone.year}</div>
                  <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Apa Kata Mereka</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Testimoni dari siswa yang telah merasakan manfaat OnlySmart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative">
                <Quote size={32} className="text-primary-200 mb-6" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Revolusi Pembelajaran
          </h2>
          <p className="text-lg lg:text-xl text-primary-100 mb-8 leading-relaxed">
            Mulai perjalanan pembelajaran Anda bersama ribuan siswa lainnya 
            dan raih kesuksesan yang Anda impikan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Mulai Belajar Sekarang
            </Link>
            <Link to="/courses" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Jelajahi Kelas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 