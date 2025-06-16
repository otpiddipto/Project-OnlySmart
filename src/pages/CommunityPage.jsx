import { useState } from 'react';
import { 
  MessageCircle, 
  Heart, 
  Share2, 
  Users, 
  Calendar, 
  MapPin, 
  Search,
  Filter,
  TrendingUp,
  Award,
  BookOpen,
  Eye,
  Clock,
  User
} from 'lucide-react';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: "Tips Tembus UI tanpa belajar sama sekali",
      author: "Anthony",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      category: "Matematika",
      replies: 24,
      likes: 45,
      timeAgo: "2 jam yang lalu",
      content: "Halo teman-teman! Saya baru mulai masuk SD tips lolos utbknya dong puh..."
    },
    {
      id: 2,
      title: "Baca doa ini agar nilai ujian mu tinggi",
      author: "Gus Miftah",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      category: "",
      replies: 18,
      likes: 32,
      timeAgo: "4 jam yang lalu",
      content: "kalo bukan muslim doanya apa min?..."
    },
    {
      id: 3,
      title: "Strategi agar tembus masuk harvard",
      author: "Bryan Christian",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      category: "",
      replies: 31,
      likes: 67,
      timeAgo: "6 jam yang lalu",
      content: "Sharing pengalaman saya tembus unhar siapatau teman teman terinspirasi..."
    }
  ];

  const events = [
    {
      id: 1,
      title: "Workshop: Belajar tanpa belajar",
      date: "25 Januari 2024",
      time: "19:00 - 21:00 WIB",
      location: "Online via Zoom",
      attendees: 156,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop",
      category: ""
    },
    {
      id: 2,
      title: "Bincang -  bincang bersama alumni NUS",
      date: "28 Januari 2024",
      time: "14:00 - 17:00 WIB",
      location: "Jakarta Convention Center",
      attendees: 89,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
      category: ""
    },
    {
      id: 3,
      title: "Digital Marketing Trends 2024",
      date: "2 Februari 2024",
      time: "20:00 - 22:00 WIB",
      location: "Online via Google Meet",
      attendees: 234,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      category: "Marketing"
    }
  ];

  const topMembers = [
    {
      id: 1,
      name: "Hotman Paris",
      title: "Dosen U",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      points: 2450,
      badge: "Expert",
      contributions: 89
    },
    {
      id: 2,
      name: "Timothy ronald",
      title: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      points: 1890,
      badge: "Mentor",
      contributions: 67
    },
    {
      id: 3,
      name: "Lisa Wang",
      title: "UX Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      points: 1654,
      badge: "Helper",
      contributions: 54
    }
  ];

  return (
    <div className="min-h-screen bg-primary-50 py-8 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-8">
            Komunitas OnlySmart
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Bergabunglah dengan komunitas pembelajar yang saling mendukung dan berbagi pengetahuan
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <Users size={32} className="text-primary-500 mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-500 mb-2">15,000+</h3>
            <p className="text-gray-500">Anggota Aktif</p>
          </div>
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <MessageCircle size={32} className="text-primary-500 mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-500 mb-2">2,500+</h3>
            <p className="text-gray-500">Diskusi</p>
          </div>
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <Calendar size={32} className="text-primary-500 mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-500 mb-2">150+</h3>
            <p className="text-gray-500">Event</p>
          </div>
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <Award size={32} className="text-primary-500 mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-500 mb-2">500+</h3>
            <p className="text-gray-500">Expert</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 lg:mb-12 border-b-2 border-gray-200 overflow-x-auto px-4">
          <button 
            className={`flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 font-semibold text-sm lg:text-base whitespace-nowrap border-b-3 transition-all duration-300 ${
              activeTab === 'discussions' 
                ? 'text-primary-500 border-primary-500' 
                : 'text-gray-500 border-transparent hover:text-primary-500'
            }`}
            onClick={() => setActiveTab('discussions')}
          >
            <MessageCircle size={20} />
            Diskusi
          </button>
          <button 
            className={`flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 font-semibold text-sm lg:text-base whitespace-nowrap border-b-3 transition-all duration-300 ${
              activeTab === 'events' 
                ? 'text-primary-500 border-primary-500' 
                : 'text-gray-500 border-transparent hover:text-primary-500'
            }`}
            onClick={() => setActiveTab('events')}
          >
            <Calendar size={20} />
            Event
          </button>
          <button 
            className={`flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 font-semibold text-sm lg:text-base whitespace-nowrap border-b-3 transition-all duration-300 ${
              activeTab === 'members' 
                ? 'text-primary-500 border-primary-500' 
                : 'text-gray-500 border-transparent hover:text-primary-500'
            }`}
            onClick={() => setActiveTab('members')}
          >
            <Users size={20} />
            Member Terbaik
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 min-h-96">
          {/* Main Content */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 lg:p-8 shadow-lg min-h-full">
            {activeTab === 'discussions' && (
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Diskusi Terbaru</h2>
                  <button className="btn btn-primary">Buat Diskusi Baru</button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Cari diskusi..." 
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors">
                    <Filter size={20} />
                    Filter
                  </button>
                </div>

                <div className="space-y-4">
                  {discussions.map(discussion => (
                    <div key={discussion.id} className="bg-primary-50 rounded-xl p-6 border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <img src={discussion.avatar} alt={discussion.author} className="w-10 h-10 rounded-full object-cover" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{discussion.title}</h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            <span>{discussion.author}</span>
                            <span>{discussion.category}</span>
                            <span>{discussion.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{discussion.content}</p>
                      <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-primary-100 hover:text-primary-500 rounded-lg transition-all">
                          <MessageCircle size={16} />
                          {discussion.replies} Balasan
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-primary-100 hover:text-primary-500 rounded-lg transition-all">
                          <Heart size={16} />
                          {discussion.likes} Suka
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-primary-100 hover:text-primary-500 rounded-lg transition-all">
                          <Share2 size={16} />
                          Bagikan
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Event Mendatang</h2>
                  <button className="btn btn-primary">Buat Event</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {events.map(event => (
                    <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                      <div className="h-48 overflow-hidden">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-5">
                        <div className="inline-block bg-primary-100 text-primary-500 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                          {event.category}
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">{event.title}</h3>
                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={16} />
                            <span>{event.attendees} peserta</span>
                          </div>
                        </div>
                        <button className="btn btn-primary w-full">Daftar Event</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'members' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Member Terbaik Bulan Ini</h2>
                </div>

                <div className="space-y-4">
                  {topMembers.map((member, index) => (
                    <div key={member.id} className="bg-primary-50 rounded-xl p-5 border border-gray-200 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                      <div className="text-2xl font-bold text-primary-500 min-w-10">#{index + 1}</div>
                      <img src={member.avatar} alt={member.name} className="w-15 h-15 rounded-full object-cover" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{member.title}</p>
                        <div className="flex gap-4 text-xs">
                          <span className="text-primary-500 font-semibold">{member.points} poin</span>
                          <span className="text-gray-500">{member.contributions} kontribusi</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        member.badge === 'Expert' ? 'bg-yellow-100 text-yellow-600' :
                        member.badge === 'Mentor' ? 'bg-purple-100 text-purple-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {member.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {['#ReactJS', '#UIUXDesign', '#DigitalMarketing', '#DataScience'].map((topic) => (
                  <div key={topic} className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary-100 hover:text-primary-500 cursor-pointer transition-all">
                    <TrendingUp size={16} />
                    <span className="text-sm font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Kelas Populer</h3>
              <div className="space-y-3">
                {['React Masterclass', 'UI/UX Fundamentals', 'Digital Marketing'].map((course) => (
                  <div key={course} className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary-100 hover:text-primary-500 cursor-pointer transition-all">
                    <BookOpen size={16} />
                    <span className="text-sm font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 