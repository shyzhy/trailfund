import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCog, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import BottomNav from '../components/BottomNav';

export default function UserProfile() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Posts');

    const user = {
        name: 'Giselle',
        username: '@giselle_aespa',
        avatar: '/assets/giselle.jpg',
        bio: 'Student at CITC | Passionate about helping others.',
        college: 'College of Information Technology & Computing',
        year: '3rd Year',
        stats: {
            posts: 12,
            campaigns: 2,
            requests: 5
        }
    };

    return (
        <div style={{ paddingBottom: 100, minHeight: '100vh', color: 'white' }}>
            {/* Header Image / Banner */}
            <div style={{ height: 150, background: 'linear-gradient(to right, #00B4D8, #0077B6)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 20, left: 20 }}>
                    <FaArrowLeft size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
                </div>
                <div style={{ position: 'absolute', top: 20, right: 20 }}>
                    <FaCog size={20} style={{ cursor: 'pointer', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
                </div>
            </div>

            {/* Profile Info */}
            <div style={{ padding: '0 20px', marginTop: -50, position: 'relative' }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', border: '4px solid #003B5C', overflow: 'hidden', background: '#003B5C' }}>
                    <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ marginTop: 15 }}>
                    <h2 style={{ margin: 0, fontSize: 24 }}>{user.name}</h2>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{user.username}</div>

                    <p style={{ margin: '15px 0', fontSize: 14, lineHeight: 1.5 }}>{user.bio}</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <FaGraduationCap /> {user.college} • {user.year}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', justifyContent: 'space-around', margin: '25px 0', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>{user.stats.posts}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Posts</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>{user.stats.campaigns}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Campaigns</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>{user.stats.requests}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Requests</div>
                    </div>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
                    {['Posts', 'Campaigns', 'Requests'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: activeTab === tab ? 'var(--accent-color)' : 'rgba(255,255,255,0.6)',
                                fontWeight: activeTab === tab ? 'bold' : 'normal',
                                fontSize: 16,
                                paddingBottom: 5,
                                borderBottom: activeTab === tab ? '2px solid var(--accent-color)' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content Placeholder */}
                <div style={{ minHeight: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
                    No {activeTab.toLowerCase()} yet.
                </div>

            </div>

            <BottomNav />
        </div>
    );
}
