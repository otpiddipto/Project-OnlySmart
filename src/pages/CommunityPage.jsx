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
import '../styles/pages/CommunityPage.css';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: "Tips Belajar React untuk Pemula",
      author: "Ahmad Rizki",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      category: "Programming",
      replies: 24,
      likes: 45,
      timeAgo: "2 jam yang lalu",
      content: "Halo teman-teman! Saya baru mulai belajar React dan ingin berbagi beberapa tips yang membantu saya..."
    },
    {
      id: 2,
      title: "Bagaimana Cara Membuat Portfolio UI/UX yang Menarik?",
      author: "Sari Dewi",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      category: "Design",
      replies: 18,
      likes: 32,
      timeAgo: "4 jam yang lalu",
      content: "Sebagai fresh graduate, saya kesulitan membuat portfolio yang stand out. Ada saran?"
    },
    {
      id: 3,
      title: "Strategi Digital Marketing untuk UMKM",
      author: "Budi Santoso",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      category: "Marketing",
      replies: 31,
      likes: 67,
      timeAgo: "6 jam yang lalu",
      content: "Sharing pengalaman saya membantu UMKM meningkatkan penjualan melalui digital marketing..."
    }
  ];

  const events = [
    {
      id: 1,
      title: "Workshop: Building Modern Web Apps",
      date: "25 Januari 2024",
      time: "19:00 - 21:00 WIB",
      location: "Online via Zoom",
      attendees: 156,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop",
      category: "Programming"
    },
    {
      id: 2,
      title: "Design Thinking Masterclass",
      date: "28 Januari 2024",
      time: "14:00 - 17:00 WIB",
      location: "Jakarta Convention Center",
      attendees: 89,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
      category: "Design"
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
      name: "Dr. Sarah Johnson",
      title: "Senior Data Scientist",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      points: 2450,
      badge: "Expert",
      contributions: 89
    },
    {
      id: 2,
      name: "Michael Chen",
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
    <div className="community-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Komunitas OnlySmart</h1>
          <p>Bergabunglah dengan komunitas pembelajar yang saling mendukung dan berbagi pengetahuan</p>
        </div>

        {/* Community Stats */}
        <div className="community-stats">
          <div className="stat-card">
            <Users size={32} className="text-primary" />
            <h3>15,000+</h3>
            <p>Anggota Aktif</p>
          </div>
          <div className="stat-card">
            <MessageCircle size={32} className="text-primary" />
            <h3>2,500+</h3>
            <p>Diskusi</p>
          </div>
          <div className="stat-card">
            <Calendar size={32} className="text-primary" />
            <h3>150+</h3>
            <p>Event</p>
          </div>
          <div className="stat-card">
            <Award size={32} className="text-primary" />
            <h3>500+</h3>
            <p>Expert</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'discussions' ? 'active' : ''}`}
            onClick={() => setActiveTab('discussions')}
          >
            <MessageCircle size={20} />
            Diskusi
          </button>
          <button 
            className={`tab ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            <Calendar size={20} />
            Event
          </button>
          <button 
            className={`tab ${activeTab === 'members' ? 'active' : ''}`}
            onClick={() => setActiveTab('members')}
          >
            <Users size={20} />
            Member Terbaik
          </button>
        </div>

        <div className="content-area">
          {/* Main Content */}
          <div className="main-content">
            {activeTab === 'discussions' && (
              <div className="discussions-section">
                <div className="section-header">
                  <h2>Diskusi Terbaru</h2>
                  <button className="btn btn-primary">Buat Diskusi Baru</button>
                </div>

                <div className="search-filter">
                  <div className="search-bar">
                    <Search size={20} />
                    <input type="text" placeholder="Cari diskusi..." />
                  </div>
                  <button className="filter-btn">
                    <Filter size={20} />
                    Filter
                  </button>
                </div>

                <div className="discussions-list">
                  {discussions.map(discussion => (
                    <div key={discussion.id} className="discussion-card">
                      <div className="discussion-header">
                        <img src={discussion.avatar} alt={discussion.author} className="avatar" />
                        <div className="discussion-meta">
                          <h3>{discussion.title}</h3>
                          <div className="meta-info">
                            <span className="author">{discussion.author}</span>
                            <span className="category">{discussion.category}</span>
                            <span className="time">{discussion.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                      <p className="discussion-content">{discussion.content}</p>
                      <div className="discussion-actions">
                        <button className="action-btn">
                          <MessageCircle size={16} />
                          {discussion.replies} Balasan
                        </button>
                        <button className="action-btn">
                          <Heart size={16} />
                          {discussion.likes} Suka
                        </button>
                        <button className="action-btn">
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
              <div className="events-section">
                <div className="section-header">
                  <h2>Event Mendatang</h2>
                  <button className="btn btn-primary">Buat Event</button>
                </div>

                <div className="events-grid">
                  {events.map(event => (
                    <div key={event.id} className="event-card">
                      <img src={event.image} alt={event.title} className="event-image" />
                      <div className="event-content">
                        <div className="event-category">{event.category}</div>
                        <h3>{event.title}</h3>
                        <div className="event-details">
                          <div className="detail">
                            <Calendar size={16} />
                            <span>{event.date}</span>
                          </div>
                          <div className="detail">
                            <span>{event.time}</span>
                          </div>
                          <div className="detail">
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                          <div className="detail">
                            <Users size={16} />
                            <span>{event.attendees} peserta</span>
                          </div>
                        </div>
                        <button className="btn btn-primary">Daftar Event</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'members' && (
              <div className="members-section">
                <div className="section-header">
                  <h2>Member Terbaik Bulan Ini</h2>
                </div>

                <div className="members-list">
                  {topMembers.map((member, index) => (
                    <div key={member.id} className="member-card">
                      <div className="member-rank">#{index + 1}</div>
                      <img src={member.avatar} alt={member.name} className="member-avatar" />
                      <div className="member-info">
                        <h3>{member.name}</h3>
                        <p className="member-title">{member.title}</p>
                        <div className="member-stats">
                          <span className="points">{member.points} poin</span>
                          <span className="contributions">{member.contributions} kontribusi</span>
                        </div>
                      </div>
                      <div className={`member-badge ${member.badge.toLowerCase()}`}>
                        {member.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Trending Topics</h3>
              <div className="trending-topics">
                <div className="topic">
                  <TrendingUp size={16} />
                  <span>#ReactJS</span>
                </div>
                <div className="topic">
                  <TrendingUp size={16} />
                  <span>#UIUXDesign</span>
                </div>
                <div className="topic">
                  <TrendingUp size={16} />
                  <span>#DigitalMarketing</span>
                </div>
                <div className="topic">
                  <TrendingUp size={16} />
                  <span>#DataScience</span>
                </div>
              </div>
            </div>

            <div className="sidebar-card">
              <h3>Kelas Populer</h3>
              <div className="popular-courses">
                <div className="course-item">
                  <BookOpen size={16} />
                  <span>React Masterclass</span>
                </div>
                <div className="course-item">
                  <BookOpen size={16} />
                  <span>UI/UX Fundamentals</span>
                </div>
                <div className="course-item">
                  <BookOpen size={16} />
                  <span>Digital Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 