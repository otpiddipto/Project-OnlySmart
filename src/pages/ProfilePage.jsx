import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  Settings, 
  Camera, 
  Edit, 
  Save, 
  X,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  // Use actual user data from AuthContext
  const userProfile = user || {
    id: '1',
    firstName: 'Guest',
    lastName: 'User',
    email: 'guest@example.com',
    phone: '',
    role: 'student',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    joinedDate: new Date().toISOString(),
    totalCourses: 0,
    totalStudents: 0,
    completedCourses: 0
  };

  // Mock enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: 'Biologi Lengkap',
      instructor: 'Dr. Sarah Wilson',
      progress: 75,
      totalLessons: 45,
      completedLessons: 34,
      image: '/src/assets/images/biologi.jpeg'
    },
    {
      id: 2,
      title: 'Matematika Dasar',
      instructor: 'Prof. Ahmad Yani',
      progress: 100,
      totalLessons: 30,
      completedLessons: 30,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Fisika Kuantum',
      instructor: 'Dr. Einstein',
      progress: 45,
      totalLessons: 25,
      completedLessons: 11,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=250&fit=crop'
    }
  ];

  // Mock created courses (for instructors)
  const createdCourses = [
    {
      id: 1,
      title: 'React Development',
      students: 450,
      rating: 4.8,
      published: true,
      revenue: 'Rp 45.000.000'
    },
    {
      id: 2,
      title: 'JavaScript Advanced',
      students: 320,
      rating: 4.9,
      published: true,
      revenue: 'Rp 32.000.000'
    }
  ];

  const [editForm, setEditForm] = useState({
    firstName: userProfile.firstName,
    lastName: userProfile.lastName,
    phone: userProfile.phone
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    console.log('user :', user);
    if (!isEditing) {
      setEditForm({
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        phone: userProfile.phone
      });
    }
  };

  const handleSave = () => {
    updateUser({
      firstName: editForm.firstName,
      lastName: editForm.lastName,
      phone: editForm.phone
    });
    setIsEditing(false);
    // Here you would typically call an API to update the profile
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'courses', label: userProfile.role === 'instructor' ? 'Kelas Saya' : 'Kelas Diikuti', icon: BookOpen },
    { id: 'settings', label: 'Pengaturan', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-32"></div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 mb-4">
              <div className="relative">
                <img
                  src={user.profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <button className="absolute bottom-2 right-2 bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors">
                  <Camera size={16} />
                </button>
              </div>
              <div className="sm:ml-6 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">
                  {user.first_name} {user.last_name}
                </h1>
                <p className="text-gray-600 capitalize">{user.role}</p>
                <p className="text-sm text-gray-500">Bergabung sejak {new Date(user.joinedDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {user.role === 'instructor' ? (
                <>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{userProfile.totalCourses}</div>
                    <div className="text-sm text-blue-600">Kelas Dibuat</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">{userProfile.totalStudents}</div>
                    <div className="text-sm text-green-600">Total Siswa</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">4.8</div>
                    <div className="text-sm text-purple-600">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-600">Rp 77jt</div>
                    <div className="text-sm text-yellow-600">Total Pendapatan</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{enrolledCourses.length}</div>
                    <div className="text-sm text-blue-600">Kelas Diikuti</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">{userProfile.completedCourses}</div>
                    <div className="text-sm text-green-600">Selesai</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">
                      {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length)}%
                    </div>
                    <div className="text-sm text-purple-600">Rata-rata Progress</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-600">
                      {enrolledCourses.reduce((acc, course) => acc + course.completedLessons, 0)}
                    </div>
                    <div className="text-sm text-yellow-600">Pelajaran Selesai</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Informasi Pribadi</h2>
                  <button
                    onClick={handleEditToggle}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      isEditing 
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                        : 'bg-primary-500 text-white hover:bg-primary-600'
                    }`}
                  >
                    {isEditing ? <X size={16} /> : <Edit size={16} />}
                    {isEditing ? 'Batal' : 'Edit Profil'}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Depan
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="firstName"
                        value={editForm.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">
                        {user.first_name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Belakang
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="lastName"
                        value={editForm.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">
                        {user.last_name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 flex items-center gap-3">
                      <Mail size={16} className="text-gray-400" />
                      {userProfile.email}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={editForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 flex items-center gap-3">
                        <Phone size={16} className="text-gray-400" />
                        {user.phone}
                      </div>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-600 transition-colors"
                    >
                      <Save size={16} />
                      Simpan Perubahan
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    {userProfile.role === 'instructor' ? 'Kelas yang Saya Buat' : 'Kelas yang Saya Ikuti'}
                  </h2>
                  {userProfile.role === 'instructor' && (
                    <button
                      onClick={() => navigate('/add-course')}
                      className="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                    >
                      Buat Kelas Baru
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userProfile.role === 'instructor' ? (
                    // Instructor's created courses
                    createdCourses.map((course) => (
                      <div key={course.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Siswa:</span>
                            <span className="font-medium">{course.students}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Rating:</span>
                            <span className="font-medium flex items-center gap-1">
                              <Award size={14} className="text-yellow-500" />
                              {course.rating}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Pendapatan:</span>
                            <span className="font-medium text-green-600">{course.revenue}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Status:</span>
                            <span className={`font-medium ${course.published ? 'text-green-600' : 'text-yellow-600'}`}>
                              {course.published ? 'Published' : 'Draft'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Student's enrolled courses
                    enrolledCourses.map((course) => (
                      <div key={course.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">oleh {course.instructor}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-primary-500 h-2 rounded-full transition-all"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>{course.completedLessons}/{course.totalLessons} pelajaran</span>
                              {course.progress === 100 && (
                                <CheckCircle size={16} className="text-green-500" />
                              )}
                            </div>
                          </div>
                          
                          <button className="w-full mt-4 bg-primary-500 text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                            {course.progress === 100 ? 'Review Kelas' : 'Lanjutkan Belajar'}
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Pengaturan Akun</h2>
                
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Ubah Password</h3>
                    <p className="text-sm text-gray-600 mb-3">Pastikan password Anda aman dan mudah diingat</p>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                      Ubah Password
                    </button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Notifikasi</h3>
                    <p className="text-sm text-gray-600 mb-3">Atur preferensi notifikasi Anda</p>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Email notifikasi kelas baru</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Pengingat deadline tugas</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Newsletter mingguan</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 border border-red-200 rounded-xl">
                    <h3 className="font-semibold text-red-900 mb-2">Hapus Akun</h3>
                    <p className="text-sm text-red-600 mb-3">Tindakan ini tidak dapat dibatalkan</p>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">
                      Hapus Akun
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 