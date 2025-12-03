import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div style={{
            height: '100vh',
            backgroundImage: 'url(/assets/university.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 24
        }}>
            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0,59,92,0.3) 0%, rgba(0,59,92,0.9) 100%)',
                zIndex: 1
            }} />

            <div style={{ position: 'relative', zIndex: 2, marginBottom: 40 }}>
                <h1 style={{ fontSize: 36, fontWeight: 'bold', lineHeight: 1.2, marginBottom: 16 }}>
                    One click.<br />One cause.<br />One community
                </h1>
                <p style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.9, marginBottom: 32 }}>
                    With just a single tap, you can help make a meaningful difference in our school.
                    Your support—big or small—helps create better opportunities, empower students,
                    and strengthen the community we all share.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <Link to="/login">
                        <button className="btn" style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.3)',
                            backdropFilter: 'blur(5px)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.5)',
                            fontSize: 16,
                            padding: 14
                        }}>
                            Log In
                        </button>
                    </Link>
                    <Link to="/home">
                        <button className="btn" style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.3)',
                            backdropFilter: 'blur(5px)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.5)',
                            fontSize: 16,
                            padding: 14
                        }}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
