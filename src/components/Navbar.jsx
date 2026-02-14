import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Cat } from 'lucide-react';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "Education", id: "education" },
        { name: "Experience", id: "experience" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Certifications", id: "certifications" }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`glass-nav ${scrolled ? 'shadow-sm' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: '0.5rem 0.8rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'nowrap',
                minHeight: 'auto',
                gap: '0.5rem'
            }}
        >
            {/* Logo/Brand - Cat Icon */}
            <div style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', color: 'var(--text-main)', flexShrink: 0, minWidth: 'fit-content', cursor: 'pointer' }}>
                <Cat size={28} />
            </div>

            {/* Desktop Navigation - Visible only on screens > 640px */}
            <div style={{ 
                display: 'none',
                gap: '2rem',
                alignItems: 'center'
            }}
            className="desktop-nav">
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer',
                            fontWeight: 500,
                            padding: '0.5rem',
                            position: 'relative'
                        }}
                        className="nav-link"
                    >
                        {link.name}
                    </button>
                ))}
            </div>

            {/* Right Side Controls */}
            <div style={{ 
                display: 'flex', 
                gap: '0.4rem', 
                alignItems: 'center',
                flexShrink: 0,
                justifyContent: 'flex-end'
            }}>
                {/* Resume Download Button - Desktop only */}
                <a
                    href="https://drive.google.com/your-resume-link"
                    target="_blank"
                    rel="noreferrer"
                    className="desktop-resume"
                    style={{
                        display: 'none',
                        padding: '0.4rem 0.6rem',
                        background: 'linear-gradient(135deg, rgba(0,150,255,0.2), rgba(0,200,200,0.2))',
                        border: '1.5px solid rgba(0,150,255,0.6)',
                        borderRadius: '6px',
                        color: 'rgba(0,150,255,0.9)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        alignItems: 'center',
                        gap: '0.3rem',
                        whiteSpace: 'nowrap',
                        minWidth: 'fit-content'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, rgba(0,150,255,0.3), rgba(0,200,200,0.3))';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 20px rgba(0,150,255,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, rgba(0,150,255,0.2), rgba(0,200,200,0.2))';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    📎 <span style={{ display: 'none' }}>Resume</span>
                </a>

                {/* Theme Toggle Button - Always visible */}
                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '4px',
                        width: '32px',
                        height: '32px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        color: 'var(--text-main)',
                        flexShrink: 0
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(0,150,255,0.2)';
                        e.target.style.borderColor = 'rgba(0,150,255,0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.1)';
                        e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                    }}
                    title={isDark ? 'Light Mode' : 'Dark Mode'}
                >
                    {isDark ? '☀️' : '🌙'}
                </button>

                {/* Mobile Menu Toggle - Mobile only (< 640px) */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="mobile-hamburger"
                    style={{
                        display: 'flex',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '6px',
                        padding: '0.4rem',
                        cursor: 'pointer',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-main)',
                        transition: 'all 0.3s ease',
                        flexShrink: 0,
                        width: '32px',
                        height: '32px',
                        minWidth: 'fit-content'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(0,150,255,0.2)';
                        e.target.style.borderColor = 'rgba(0,150,255,0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.1)';
                        e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                    }}
                >
                    {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: isDark ? 'rgba(20,20,25,0.95)' : 'rgba(244,245,247,0.95)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                    padding: 'clamp(0.5rem, 2vw, 1rem) clamp(0.8rem, 3vw, 1.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(0.3rem, 1vw, 0.5rem)',
                    zIndex: 999
                }}>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => {
                                scrollToSection(link.id);
                                setMobileMenuOpen(false);
                            }}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontWeight: 500,
                                padding: 'clamp(0.4rem, 1.5vw, 0.75rem) clamp(0.6rem, 2vw, 1rem)',
                                textAlign: 'left',
                                borderRadius: '4px',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = isDark ? 'rgba(0,150,255,0.1)' : 'rgba(0,150,255,0.05)';
                                e.target.style.color = 'var(--text-main)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'none';
                                e.target.style.color = 'var(--text-secondary)';
                            }}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
