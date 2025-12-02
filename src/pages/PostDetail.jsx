import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaComment, FaShare, FaPaperPlane } from 'react-icons/fa';

export default function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [replyingTo, setReplyingTo] = useState(null);

    // Mock data fetching
    useEffect(() => {
        // In a real app, fetch post by ID
        // For now, we'll just use dummy data matching the ID or generic data
        const dummyPost = {
            _id: id,
            author: 'CITC Student Council',
            avatar: '/assets/logo.png',
            time: '2 hours ago',
            content: '📢 Attention Students! The donation drive for the victims of Typhoon Egay is now open. Please drop off your donations at the Student Center.',
            likes: 45,
            comments: 12
        };
        setPost(dummyPost);
        setIsLiked(false);

        // Mock comments with replies
        setComments([
            {
                id: 1,
                author: 'Mark Lee',
                avatar: 'https://i.pravatar.cc/150?img=11',
                content: 'Will there be a drop-off box for clothes?',
                time: '1 hour ago',
                replies: [
                    { id: 101, author: 'CITC Student Council', avatar: '/assets/logo.png', content: 'Yes, there is a designated box near the entrance.', time: '55 mins ago' }
                ]
            },
            {
                id: 2,
                author: 'Haechan',
                avatar: 'https://i.pravatar.cc/150?img=12',
                content: 'Noted on this! Thanks.',
                time: '30 mins ago',
                replies: []
            }
        ]);
    }, [id]);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setPost(prev => ({
            ...prev,
            likes: isLiked ? prev.likes - 1 : prev.likes + 1
        }));
    };

    const handleReplyClick = (comment) => {
        setReplyingTo(comment);
        setNewComment(`@${comment.author} `);
    };

    const handleCommentSubmit = () => {
        if (!newComment.trim()) return;

        const newCommentObj = {
            id: Date.now(),
            author: 'Giselle',
            avatar: '/assets/giselle.jpg',
            content: newComment,
            time: 'Just now',
            replies: []
        };

        if (replyingTo) {
            setComments(comments.map(comment => {
                if (comment.id === replyingTo.id) {
                    return {
                        ...comment,
                        replies: [...comment.replies, newCommentObj]
                    };
                }
                return comment;
            }));
            setReplyingTo(null);
        } else {
            setComments([...comments, newCommentObj]);
        }

        setNewComment('');

        // Update comment count on post
        setPost(prev => ({
            ...prev,
            comments: prev.comments + 1
        }));
    };

    if (!post) return <div style={{ color: 'white', padding: 20 }}>Loading...</div>;

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
                <h2 style={{ margin: 0, fontSize: 20 }}>Post</h2>
            </div>

            {/* Main Post */}
            <div className="glass-card" style={{ padding: 20, marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 15 }}>
                    <img src={post.avatar} alt={post.author} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.3)' }} />
                    <div>
                        <div style={{ fontWeight: 'bold', fontSize: 16 }}>{post.author}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{post.time}</div>
                    </div>
                </div>

                <p style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 20, color: 'rgba(255,255,255,0.9)' }}>
                    {post.content}
                </p>

                <div style={{ display: 'flex', gap: 20, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 15 }}>
                    <button
                        onClick={handleLike}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: isLiked ? '#ff4d4d' : 'rgba(255,255,255,0.7)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: 14,
                            cursor: 'pointer',
                            transition: 'color 0.2s'
                        }}
                    >
                        <FaHeart /> {post.likes}
                    </button>
                    <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
                        <FaComment /> {comments.length}
                    </button>
                    <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 6, marginLeft: 'auto', fontSize: 14 }}>
                        <FaShare />
                    </button>
                </div>
            </div>

            {/* Comments Section */}
            <div style={{ marginBottom: 80 }}>
                <h3 style={{ fontSize: 16, marginBottom: 15, color: 'rgba(255,255,255,0.8)' }}>Comments</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    {comments.map(comment => (
                        <div key={comment.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {/* Main Comment */}
                            <div style={{ display: 'flex', gap: 10 }}>
                                <img src={comment.avatar} alt={comment.author} style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
                                <div style={{ flex: 1 }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 15px', borderRadius: 18 }}>
                                        <div style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 2 }}>{comment.author}</div>
                                        <div style={{ fontSize: 14, lineHeight: 1.4 }}>{comment.content}</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: 15, marginTop: 5, paddingLeft: 10 }}>
                                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{comment.time}</span>
                                        <button
                                            onClick={() => handleReplyClick(comment)}
                                            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 'bold', cursor: 'pointer', padding: 0 }}
                                        >
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Replies */}
                            {comment.replies && comment.replies.length > 0 && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 42 }}>
                                    {comment.replies.map(reply => (
                                        <div key={reply.id} style={{ display: 'flex', gap: 10 }}>
                                            <img src={reply.avatar} alt={reply.author} style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }} />
                                            <div style={{ flex: 1 }}>
                                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: 18 }}>
                                                    <div style={{ fontWeight: 'bold', fontSize: 12, marginBottom: 2 }}>{reply.author}</div>
                                                    <div style={{ fontSize: 13, lineHeight: 1.4 }}>{reply.content}</div>
                                                </div>
                                                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 4, paddingLeft: 10 }}>{reply.time}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Comment Input */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '15px 20px',
                background: '#002840',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                gap: 10,
                alignItems: 'center',
                zIndex: 100
            }}>
                <img src="/assets/giselle.jpg" alt="User" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 20,
                    padding: '8px 15px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <input
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder={replyingTo ? `Replying to ${replyingTo.author}...` : "Write a comment..."}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            width: '100%',
                            outline: 'none',
                            fontSize: 14
                        }}
                    />
                </div>
                <button
                    onClick={handleCommentSubmit}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: newComment.trim() ? 'var(--accent-color)' : 'rgba(255,255,255,0.3)',
                        cursor: newComment.trim() ? 'pointer' : 'default'
                    }}
                >
                    <FaPaperPlane size={20} />
                </button>
            </div>

        </div>
    );
}
