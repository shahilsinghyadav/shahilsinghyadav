import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
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
                padding: '1.2rem 2rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <div style={{ display: 'flex', gap: '2rem' }}>
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

            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease',
                    color: 'var(--text-main)'
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
        </nav>
    );
};

export default Navbar;
