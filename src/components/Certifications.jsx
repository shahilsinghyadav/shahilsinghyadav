import React from 'react';
import SectionCard from './SectionCard';

const Certifications = () => {
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
                        borderLeft: '3px solid var(--text-accent)',
                        marginBottom: '1rem',
                        background: 'rgba(255,255,255,0.5)',
                        fontSize: '1.05rem',
                        borderRadius: '0 8px 8px 0'
                    }}>
                        {cert}
                    </li>
                ))}
            </ul>
        </SectionCard>
    );
};

export default Certifications;
