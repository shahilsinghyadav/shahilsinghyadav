import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
        </nav>
    );
};

export default Navbar;
