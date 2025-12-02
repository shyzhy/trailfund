import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login logic
        console.log('Logging in with:', email, password);
        navigate('/home');
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            background: 'var(--primary-bg)', // Ensure background matches
            color: 'white'
        }}>
            <div className="glass-card" style={{ width: '100%', maxWidth: 400, padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Logo */}
                <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                    overflow: 'hidden',
                    padding: 10
                }}>
                    <img src="/assets/logo.png" alt="TrailFund Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                <h2 style={{ marginBottom: 30, fontSize: 24, fontWeight: 'bold' }}>Welcome Back</h2>

                <form onSubmit={handleLogin} style={{ width: '100%' }}>
                    {/* Email Input */}
                    <div style={{ marginBottom: 20, position: 'relative' }}>
                        <FaUser style={{ position: 'absolute', left: 15, top: 14, color: 'rgba(255,255,255,0.6)' }} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 45px',
                                borderRadius: 32,
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                fontSize: 16,
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div style={{ marginBottom: 10, position: 'relative' }}>
                        <FaLock style={{ position: 'absolute', left: 15, top: 14, color: 'rgba(255,255,255,0.6)' }} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 45px',
                                borderRadius: 32,
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                fontSize: 16,
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                            required
                        />
                    </div>

                    {/* Forgot Password */}
                    <div style={{ textAlign: 'right', marginBottom: 30 }}>
                        <button type="button" style={{ background: 'none', border: 'none', color: 'var(--accent-color)', cursor: 'pointer', fontSize: 14 }}>
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="btn" style={{ width: '100%', background: 'var(--accent-color)', color: 'white', fontSize: 16, padding: 14 }}>
                        Log In
                    </button>
                </form>

                {/* USTEP Link */}
                <div style={{ marginTop: 30, textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                    Student or Faculty? <br />
                    <button style={{ background: 'none', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer', marginTop: 5, textDecoration: 'underline' }}>
                        Link USTEP Account
                    </button>
                </div>
            </div>
        </div>
    );
}
