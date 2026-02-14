import React, { useContext } from 'react';
import SectionCard from './SectionCard';
import { ThemeContext } from '../ThemeContext';

const Certifications = () => {
    const { isDark } = useContext(ThemeContext);
    
    return (
        <SectionCard title="Certifications" id="certifications">
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                    "Competitive Coding with DSA, CAAS – KIIT",
                    "AWS Academy Graduate - AWS Academy Introduction to Cloud, AWS AI/ML",
                    "Foundations of User Experience (UX) Design, Google – Coursera",
                    "Complete Full Stack Development 2025 - Udemy"
                ].map((cert, i) => (
                    <li key={i} style={{
                        padding: '1.5rem',
                        marginBottom: '1rem',
                        background: isDark ? 'rgba(20,20,25,0.8)' : 'rgba(255,255,255,0.8)',
                        fontSize: '1.05rem',
                        borderRadius: '0 8px 8px 0',
                        border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                        borderLeft: '3px solid rgba(0,150,255,0.8)'
                    }}>
                        {cert}
                    </li>
                ))}
            </ul>
        </SectionCard>
    );
};

export default Certifications;
