import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Star, Users, Clock, ChevronDown } from 'lucide-react';

const CoursePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular')
  const [courses, setCourse] = useState([]);
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

    const categories = [
      { value: 'all', label: 'Semua Kategori' },
      { value: 'Biologi', label: 'Biologi' },
      { value: 'Kimia', label: 'Kimia' },
      { value: 'Fisika', label: 'Fisika' },
      { value: 'Bahasa Inggris', label: 'Bahasa Inggris' },
      { value: 'Matematika', label: 'Matematika' },
      { value: 'photography', label: 'Photography' }
    ];

    const levels = [
      { value: 'all', label: 'Semua Kelas' },
      { value: '10', label: '10' },
      { value: '11', label: '11' },
      { value: '12', label: '12' }
    ];

  // const courses = [
  //   {
  //     id: 1,
  //     title: "Biologi",
  //     instructor: "Hotman Paris",
  //     price: "Rp 299.000",
  //     originalPrice: "Rp 499.000",
  //     rating: 4.8,
  //     students: 1234,
  //     duration: "12 jam",
  //     lessons: 45,
  //     image: "/src/assets/hotmanparis.webp",
  //     category: "Biologi",
  //     level: "10",
  //     description: "Pelajari React dan Next.js dari dasar hingga mahir dengan project nyata"
  //   },
  //   {
  //     id: 2,
  //     title: "Matematika",
  //     instructor: "Timothy Ronald",
  //     price: "Rp 199.000",
  //     originalPrice: "Rp 349.000",
  //     rating: 4.9,
  //     students: 856,
  //     duration: "8 jam",
  //     lessons: 32,
  //     image: "/src/assets/timothy.jpeg",
  //     category: "Matematika",
  //     level: "11",
  //     description: "Belajar matematika bisa mendapatkan cuan"
  //   },
  //   {
  //     id: 3,
  //     title: "Fisika",
  //     instructor: "Mbappe",
  //     price: "Rp 249.000",
  //     originalPrice: "Rp 399.000",
  //     rating: 4.7,
  //     students: 2341,
  //     duration: "10 jam",
  //     lessons: 38,
  //     image: "/src/assets/kurakuraninja.jpeg",
  //     category: "Fisika",
  //     level: "12",
  //     description: "Belajar fisika bisa hattrick lawan barca "
  //   },
  //   {
  //     id: 4,
  //     title: "Bahasa Inggris",
  //     instructor: "Ronaldo",
  //     price: "Rp 349.000",
  //     originalPrice: "Rp 549.000",
  //     rating: 4.8,
  //     students: 1876,
  //     duration: "15 jam",
  //     lessons: 52,
  //     image: "/src/assets/ronaldo.jpeg",
  //     category: "Bahasa Inggris",
  //     level: "10",
  //     description: "Belajar bahasa inggris bersama goat"
  //   },
  //   {
  //     id: 5,
  //     title: "Kimia",
  //     instructor: "Walter White",
  //     price: "Rp 399.000",
  //     originalPrice: "Rp 599.000",
  //     rating: 4.9,
  //     students: 987,
  //     duration: "18 jam",
  //     lessons: 65,
  //     image: "/src/assets/walterwhite.jpeg",
  //     category: "Kimia",
  //     level: "12",
  //     description: "Belajar kimia sekarang tidak perlu di Albuquerque"
  //   },
  //   {
  //     id: 6,
  //     title: "Bahasa Indonesia",
  //     instructor: "Budiono Siregar",
  //     price: "Rp 449.000",
  //     originalPrice: "Rp 699.000",
  //     rating: 4.6,
  //     students: 1543,
  //     duration: "14 jam",
  //     lessons: 42,
  //     image: "/src/assets/kapallawd.jpeg",
  //     category: "Bahasa Indonesia",
  //     level: "10",
  //     description: "Belajar bahasa indonesia bersama budiono"
  //   }
  // ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''));
      default:
        return 0;
    }
  });
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
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Jelajahi Kelas</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan kelas yang tepat untuk mengembangkan skill dan karir Anda
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari kelas atau instruktur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 focus:border-primary-500 focus:outline-none transition-colors"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 focus:border-primary-500 focus:outline-none transition-colors"
                >
                  {levels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="popular">Paling Populer</option>
                  <option value="rating">Rating Tertinggi</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">Menampilkan <span className="font-semibold">{sortedCourses.length}</span> kelas</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <img src={course.image_url} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {levels.find(l => l.value === course.level)?.label}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">oleh {course.instructor}</p>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500" />
                      <span className="font-medium"></span>
                      {/* <span className="text-gray-500">/*({course.students.toLocaleString()}/</span> */}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                    <span>• {course.total_lessons} pelajaran</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary-500">{course.price}</span>
                    <span className="text-gray-400 line-through text-sm">{course.price}</span>
                  </div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/checkout', { state: { course } })}
                  >
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tidak ada kelas yang ditemukan</h3>
              <p className="text-gray-600">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage; 