import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Upload, 
  Eye, 
  Save, 
  ArrowLeft, 
  Plus, 
  X, 
  Video, 
  FileText, 
  Users,
  Clock,
  DollarSign,
  Tag
} from 'lucide-react';

const AddCoursePage = () => {
  const navigate = useNavigate();
  const [isPreview, setIsPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    shortDescription: '',
    instructor: '',
    category: '',
    level: '',
    price: '',
    originalPrice: '',
    duration: '',
    totalLessons: '',
    image: '',
    requirements: [''],
    whatYouWillLearn: [''],
    curriculum: [
      {
        sectionTitle: '',
        lessons: [
          {
            title: '',
            duration: '',
            type: 'video' // video, text, quiz
          }
        ]
      }
    ]
  });

  const categories = [
    { value: 'Biologi', label: 'Biologi' },
    { value: 'Kimia', label: 'Kimia' },
    { value: 'Fisika', label: 'Fisika' },
    { value: 'Matematika', label: 'Matematika' },
    { value: 'Bahasa Inggris', label: 'Bahasa Inggris' },
    { value: 'Sejarah', label: 'Sejarah' },
    { value: 'Geografi', label: 'Geografi' },
    { value: 'Ekonomi', label: 'Ekonomi' }
  ];

  const levels = [
    { value: '10', label: 'Kelas 10' },
    { value: '11', label: 'Kelas 11' },
    { value: '12', label: 'Kelas 12' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayInputChange = (field, index, value) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setCourseData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };



  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCourseData(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Kelas berhasil dibuat! Kelas akan direview terlebih dahulu sebelum dipublikasi.');
      navigate('/courses');
    }, 2000);
  };

  const getLessonIcon = (type) => {
    switch (type) {
      case 'video':
        return <Video size={16} className="text-blue-500" />;
      case 'text':
        return <FileText size={16} className="text-green-500" />;
      case 'quiz':
        return <Users size={16} className="text-purple-500" />;
      default:
        return <Video size={16} className="text-blue-500" />;
    }
  };

  if (isPreview) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Preview Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setIsPreview(false)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={20} />
              Kembali ke Edit
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              {isSubmitting ? 'Menyimpan...' : 'Publikasikan Kelas'}
            </button>
          </div>

          {/* Course Preview */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img 
                src={courseData.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'} 
                alt={courseData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-8 text-white">
                  <h1 className="text-4xl font-bold mb-2">{courseData.title || 'Judul Kelas'}</h1>
                  <p className="text-xl">{courseData.shortDescription || 'Deskripsi singkat kelas'}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Kelas</h2>
                    <p className="text-gray-700 whitespace-pre-line">
                      {courseData.description || 'Deskripsi lengkap kelas akan muncul di sini...'}
                    </p>
                  </div>

                  {courseData.whatYouWillLearn.filter(item => item.trim()).length > 0 && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Yang Akan Anda Pelajari</h2>
                      <ul className="space-y-2">
                        {courseData.whatYouWillLearn.filter(item => item.trim()).map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Kurikulum</h2>
                    <div className="space-y-6">
                      {courseData.curriculum.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="border border-gray-200 rounded-xl">
                          <div className="p-4 bg-gray-50 border-b">
                            <h3 className="font-semibold text-gray-900">
                              {section.sectionTitle || `Bagian ${sectionIndex + 1}`}
                            </h3>
                          </div>
                          <div className="divide-y divide-gray-100">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  {getLessonIcon(lesson.type)}
                                  <span className="text-gray-700">
                                    {lesson.title || `Pelajaran ${lessonIndex + 1}`}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-500">
                                  {lesson.duration || '0 menit'}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {courseData.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">
                            Rp {parseInt(courseData.originalPrice || 0).toLocaleString()}
                          </span>
                        )}
                        <span className="text-3xl font-bold text-primary-500">
                          Rp {parseInt(courseData.price || 0).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Clock size={16} className="text-gray-400" />
                        <span>Durasi: {courseData.duration || '0 jam'}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <BookOpen size={16} className="text-gray-400" />
                        <span>{courseData.totalLessons || '0'} pelajaran</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Tag size={16} className="text-gray-400" />
                        <span>Level: {levels.find(l => l.value === courseData.level)?.label || 'Belum dipilih'}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Users size={16} className="text-gray-400" />
                        <span>Instruktur: {courseData.instructor || 'Nama instruktur'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
            >
              <ArrowLeft size={20} />
              Kembali
            </button>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Buat Kelas Baru</h1>
            <p className="text-gray-600 mt-2">Bagikan pengetahuan Anda dengan membuat kelas online</p>
          </div>
          <button
            onClick={() => setIsPreview(true)}
            className="btn btn-outline-primary flex items-center gap-2"
          >
            <Eye size={16} />
            Preview
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-primary-500" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Informasi Dasar</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Kelas *
                </label>
                <input
                  type="text"
                  name="title"
                  value={courseData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Contoh: Biologi Lengkap untuk Kelas 12"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Singkat *
                </label>
                <input
                  type="text"
                  name="shortDescription"
                  value={courseData.shortDescription}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Deskripsi singkat yang menarik untuk kelas Anda"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Lengkap *
                </label>
                <textarea
                  name="description"
                  value={courseData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Jelaskan secara detail tentang kelas Anda, materi yang akan diajarkan, dan manfaat yang akan didapat siswa..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Instruktur *
                </label>
                <input
                  type="text"
                  name="instructor"
                  value={courseData.instructor}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Nama lengkap Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori *
                </label>
                <select
                  name="category"
                  value={courseData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">Pilih kategori</option>
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Level Kelas *
                </label>
                <select
                  name="level"
                  value={courseData.level}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">Pilih level</option>
                  {levels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durasi Total *
                </label>
                <input
                  type="text"
                  name="duration"
                  value={courseData.duration}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Contoh: 12 jam"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jumlah Pelajaran *
                </label>
                <input
                  type="number"
                  name="totalLessons"
                  value={courseData.totalLessons}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="45"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harga Kelas (Rp) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={courseData.price}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="299000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harga Asli (Opsional)
                </label>
                <input
                  type="number"
                  name="originalPrice"
                  value={courseData.originalPrice}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="499000"
                />
              </div>
            </div>
          </div>

          {/* Course Image */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Upload className="text-primary-500" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Gambar Kelas</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Gambar Cover
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>
              
              {courseData.image && (
                <div className="mt-4">
                  <img
                    src={courseData.image}
                    alt="Preview"
                    className="w-full max-w-md h-48 object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>

          {/* What You Will Learn */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-primary-500" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Yang Akan Dipelajari</h2>
            </div>

            <div className="space-y-4">
              {courseData.whatYouWillLearn.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleArrayInputChange('whatYouWillLearn', index, e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder={`Poin pembelajaran ${index + 1}`}
                  />
                  {courseData.whatYouWillLearn.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('whatYouWillLearn', index)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('whatYouWillLearn')}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium"
              >
                <Plus size={16} />
                Tambah Poin
              </button>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-primary-500" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Persyaratan</h2>
            </div>

            <div className="space-y-4">
              {courseData.requirements.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleArrayInputChange('requirements', index, e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder={`Persyaratan ${index + 1}`}
                  />
                  {courseData.requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('requirements', index)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('requirements')}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium"
              >
                <Plus size={16} />
                Tambah Persyaratan
              </button>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-outline-secondary"
            >
              Batal
            </button>
            
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsPreview(true)}
                className="btn btn-outline-primary flex items-center gap-2"
              >
                <Eye size={16} />
                Preview
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary flex items-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Save size={16} />
                )}
                {isSubmitting ? 'Menyimpan...' : 'Simpan Draft'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoursePage; 