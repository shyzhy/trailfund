import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaComment, FaShare, FaPaperPlane, FaImage } from 'react-icons/fa';
import BottomNav from '../components/BottomNav';

export default function Community() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    // Mock data for now, will replace with API call
    useEffect(() => {
        setPosts([
            {
                _id: 1,
                author: 'CITC Student Council',
                avatar: '/assets/logo.png',
                time: '2 hours ago',
                content: '📢 Attention Students! The donation drive for the victims of Typhoon Egay is now open. Please drop off your donations at the Student Center.',
                likes: 45,
                comments: 12,
                isLiked: false
            },
            {
                _id: 2,
                author: 'Giselle',
                avatar: '/assets/giselle.jpg',
                time: '5 hours ago',
                content: 'Does anyone have a spare scientific calculator I could borrow for the exam tomorrow? 🥺',
                likes: 8,
                comments: 3,
                isLiked: false
            }
        ]);
    }, []);

    const handlePostSubmit = () => {
        if (!newPost.trim()) return;

        const post = {
            _id: Date.now(),
            author: 'Giselle', // Current user
            avatar: '/assets/giselle.jpg',
            time: 'Just now',
            content: newPost,
            likes: 0,
            comments: 0,
            isLiked: false
        };

        setPosts([post, ...posts]);
        setNewPost('');
    };

    const handleLike = (postId, e) => {
        e.stopPropagation();
        setPosts(posts.map(post => {
            if (post._id === postId) {
                const isLiked = post.isLiked;
                return {
                    ...post,
                    isLiked: !isLiked,
                    likes: isLiked ? post.likes - 1 : post.likes + 1
                };
            }
            return post;
        }));
    };

    return (
        <div style={{ padding: 20, paddingBottom: 100, minHeight: '100vh', color: 'white', position: 'relative' }}>

            {/* Background Image with Mask Fade */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '60vh',
                backgroundImage: 'url(/assets/university.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                zIndex: -2,
                opacity: 0.3,
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)'
            }} />

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20 }}>
                <FaArrowLeft size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                <h2 style={{ margin: 0, fontSize: 20 }}>Community Wall</h2>
            </div>

            {/* Create Post */}
            <div className="glass-card" style={{ padding: 15, marginBottom: 25 }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                    <img src="/assets/giselle.jpg" alt="User" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                    <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="What's on your mind?"
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            resize: 'none',
                            outline: 'none',
                            fontSize: 14,
                            paddingTop: 10
                        }}
                        rows={2}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 10 }}>
                    <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
                        <FaImage size={18} />
                    </button>
                    <button
                        onClick={handlePostSubmit}
                        style={{
                            background: 'var(--accent-color)',
                            color: 'white',
                            border: 'none',
                            padding: '6px 16px',
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 5,
                            cursor: 'pointer'
                        }}
                    >
                        Post <FaPaperPlane size={10} />
                    </button>
                </div>
            </div>

            {/* Feed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {posts.map(post => (
                    <div
                        key={post._id}
                        className="glass-card"
                        style={{ padding: 20, cursor: 'pointer' }}
                        onClick={() => navigate(`/community/post/${post._id}`)}
                    >
                        {/* Post Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 15 }}>
                            <img src={post.avatar} alt={post.author} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.3)' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: 15 }}>{post.author}</div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{post.time}</div>
                            </div>
                        </div>

                        {/* Content */}
                        <p style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 15, color: 'rgba(255,255,255,0.9)' }}>
                            {post.content}
                        </p>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: 20, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 15 }}>
                            <button
                                onClick={(e) => handleLike(post._id, e)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: post.isLiked ? '#ff4d4d' : 'rgba(255,255,255,0.6)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    cursor: 'pointer',
                                    fontSize: 13
                                }}
                            >
                                <FaHeart /> {post.likes}
                            </button>
                            <button
                                onClick={() => navigate(`/community/post/${post._id}`)}
                                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 13 }}
                            >
                                <FaComment /> {post.comments}
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); /* Add share logic */ }}
                                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', marginLeft: 'auto', fontSize: 13 }}
                            >
                                <FaShare />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <BottomNav />
        </div>
    );
}
