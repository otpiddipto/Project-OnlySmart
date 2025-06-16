import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  Zap,
} from "lucide-react";

const HomePage = () => {
  const [featuredCourses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`http://localhost:5000/api/courses`); // Ganti dengan URL API kamu
        const data = await response.json();

        // console.log(data.success);

        // console.log(data.data);
        if (data.success) {
          setCourse(data.data);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);
  // const featuredCourses = [
  //   {
  //     id: 1,
  //     title: "React & Next.js Masterclass",
  //     instructor: "John Doe",
  //     price: "Rp 299.000",
  //     originalPrice: "Rp 499.000",
  //     rating: 4.8,
  //     students: 1234,
  //     duration: "12 jam",
  //     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
  //     category: "Programming"
  //   },
  //   {
  //     id: 2,
  //     title: "UI/UX Design Fundamentals",
  //     instructor: "Jane Smith",
  //     price: "Rp 199.000",
  //     originalPrice: "Rp 349.000",
  //     rating: 4.9,
  //     students: 856,
  //     duration: "8 jam",
  //     image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
  //     category: "Design"
  //   },
  //   {
  //     id: 3,
  //     title: "Digital Marketing Strategy",
  //     instructor: "Mike Johnson",
  //     price: "Rp 249.000",
  //     originalPrice: "Rp 399.000",
  //     rating: 4.7,
  //     students: 2341,
  //     duration: "10 jam",
  //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  //     category: "Marketing"
  //   }
  // ];

  const stats = [
    { icon: Users, number: "50,000+", label: "Siswa Aktif" },
    { icon: BookOpen, number: "500+", label: "Kelas Tersedia" },
    { icon: Award, number: "100+", label: "Instruktur Expert" },
    { icon: Globe, number: "25+", label: "Negara" },
  ];

  const features = [
    {
      icon: Play,
      title: "Video Berkualitas HD",
      description:
        "Materi pembelajaran dengan kualitas video terbaik dan audio jernih",
    },
    {
      icon: CheckCircle,
      title: "Sertifikat Resmi",
      description:
        "Dapatkan sertifikat yang diakui industri setelah menyelesaikan kelas",
    },
    {
      icon: Clock,
      title: "Akses Selamanya",
      description: "Belajar kapan saja dan dimana saja dengan akses unlimited",
    },
    {
      icon: Shield,
      title: "Garansi 30 Hari",
      description: "Tidak puas? Dapatkan refund 100% dalam 30 hari pertama",
    },
  ];
  if (loading) {
    return (
      <div className="h-screen p-20 flex items-center justify-center text-3xl font-semibold">
        Loading orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen p-20 flex flex-col items-center justify-center">
        <div className="bg-black w-[70%] h-[35%] rounded-[25px] flex justify-center items-center">
          Error.
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Belajar lebih dekat
                <span className="text-primary-500"> Nilai lebih pesat. </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Ingin belajar lebih interaktif dan sesuai kecepatanmu? Mulai
                perjalanan belajarmu bersama kami dan jadikan belajar lebih
                mudah!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="btn btn-primary flex items-center justify-center gap-2"
                >
                  Jelajahi Kelas
                  <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="btn btn-outline">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-gray-600 font-medium">
                    4.8/5 Rating
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-primary-500" size={20} />
                  <span className="text-gray-600 font-medium">
                    50,000+ Siswa
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Online Learning"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Live Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <stat.icon
                    size={32}
                    className="text-primary-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kelas Populer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan kelas terbaik yang paling diminati oleh siswa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={course.image_url}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    oleh {course.instructor_id}
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500" />
                      <span className="font-medium">69</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      {/* <span>{course.students.toLocaleString()}</span> */}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary-500">
                      {course.price}
                    </span>
                    {/* <span className="text-gray-400 line-through">{course.originalPrice}</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="btn btn-primary flex items-center justify-center gap-2 mx-auto"
            >
              Lihat Semua Kelas
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih OnlySmart?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keunggulan platform pembelajaran online kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  <feature.icon size={32} className="text-primary-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-500 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Belajar Anda?
          </h2>
          <p className="text-lg lg:text-xl text-primary-100 mb-8 leading-relaxed">
            Bergabunglah dengan komunitas pembelajar terbesar di Indonesia dan
            kembangkan skill yang dibutuhkan industri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Daftar Sekarang
            </Link>
            <Link
              to="/courses"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              Lihat Kelas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
