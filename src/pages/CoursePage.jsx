import { useState } from 'react';
import { Search, Filter, Star, Users, Clock, ChevronDown } from 'lucide-react';
import '../styles/pages/CoursePage.css';

const CoursePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { value: 'all', label: 'Semua Kategori' },
    { value: 'programming', label: 'Programming' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'business', label: 'Business' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'photography', label: 'Photography' }
  ];

  const levels = [
    { value: 'all', label: 'Semua Level' },
    { value: 'beginner', label: 'Pemula' },
    { value: 'intermediate', label: 'Menengah' },
    { value: 'advanced', label: 'Lanjutan' }
  ];

  const courses = [
    {
      id: 1,
      title: "React & Next.js Masterclass",
      instructor: "John Doe",
      price: "Rp 299.000",
      originalPrice: "Rp 499.000",
      rating: 4.8,
      students: 1234,
      duration: "12 jam",
      lessons: 45,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "programming",
      level: "intermediate",
      description: "Pelajari React dan Next.js dari dasar hingga mahir dengan project nyata"
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
      lessons: 32,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "design",
      level: "beginner",
      description: "Dasar-dasar UI/UX design untuk pemula dengan tools modern"
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
      lessons: 38,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "marketing",
      level: "intermediate",
      description: "Strategi digital marketing yang efektif untuk bisnis modern"
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Sarah Wilson",
      price: "Rp 349.000",
      originalPrice: "Rp 549.000",
      rating: 4.8,
      students: 1876,
      duration: "15 jam",
      lessons: 52,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      category: "data-science",
      level: "beginner",
      description: "Belajar Python untuk analisis data dan machine learning"
    },
    {
      id: 5,
      title: "Advanced JavaScript Concepts",
      instructor: "David Brown",
      price: "Rp 399.000",
      originalPrice: "Rp 599.000",
      rating: 4.9,
      students: 987,
      duration: "18 jam",
      lessons: 65,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
      category: "programming",
      level: "advanced",
      description: "Konsep JavaScript lanjutan untuk developer berpengalaman"
    },
    {
      id: 6,
      title: "Business Strategy & Leadership",
      instructor: "Emily Davis",
      price: "Rp 449.000",
      originalPrice: "Rp 699.000",
      rating: 4.6,
      students: 1543,
      duration: "14 jam",
      lessons: 42,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      category: "business",
      level: "intermediate",
      description: "Strategi bisnis dan kepemimpinan untuk manager dan entrepreneur"
    }
  ];

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

  return (
    <div className="courses-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Jelajahi Kelas</h1>
          <p>Temukan kelas yang tepat untuk mengembangkan skill dan karir Anda</p>
        </div>

        {/* Search and Filters */}
        <div className="filters-section">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Cari kelas atau instruktur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filters">
            <div className="filter-group">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} />
            </div>

            <div className="filter-group">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} />
            </div>

            <div className="filter-group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Paling Populer</option>
                <option value="rating">Rating Tertinggi</option>
                <option value="price-low">Harga Terendah</option>
                <option value="price-high">Harga Tertinggi</option>
              </select>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>Menampilkan {sortedCourses.length} kelas</p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {sortedCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-level">{levels.find(l => l.value === course.level)?.label}</div>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="instructor">oleh {course.instructor}</p>
                <p className="description">{course.description}</p>
                
                <div className="course-meta">
                  <div className="rating">
                    <Star size={16} className="text-warning" />
                    <span>{course.rating}</span>
                    <span className="students">({course.students.toLocaleString()})</span>
                  </div>
                  <div className="duration">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                    <span className="lessons">• {course.lessons} pelajaran</span>
                  </div>
                </div>

                <div className="course-footer">
                  <div className="course-price">
                    <span className="current-price">{course.price}</span>
                    <span className="original-price">{course.originalPrice}</span>
                  </div>
                  <button className="btn btn-primary">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedCourses.length === 0 && (
          <div className="no-results">
            <h3>Tidak ada kelas yang ditemukan</h3>
            <p>Coba ubah filter atau kata kunci pencarian Anda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage; 