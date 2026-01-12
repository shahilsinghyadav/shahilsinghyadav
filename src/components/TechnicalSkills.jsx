import React from 'react';
import SectionCard from './SectionCard';

const SkillCategory = ({ category, items }) => (
    <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', color: '#888', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{category}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {items.split(', ').map((item, i) => (
                <span key={i} style={{
                    background: 'rgba(255,255,255,0.8)',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
                    color: 'var(--text-main)',
                    transition: 'transform 0.2s',
                    cursor: 'default'
                }}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                    {item}
                </span>
            ))}
        </div>
    </div>
);

const TechnicalSkills = () => {
    return (
        <SectionCard title="Technical Skills" id="skills">
            <SkillCategory
                category="Languages"
                items="C, C++ (OOPS concepts), JavaScript"
            />
            <SkillCategory
                category="Developer Tools"
                items="HTML, CSS, Node.js, Git, Python (basics), WebRTC, Socket.IO, XML Views, SAP Fiori, SAP CAPM, OData Services, Postman"
            />
            <SkillCategory
                category="Frameworks"
                items="Express.js, React.js, Bootstrap, Tailwind"
            />
            <SkillCategory
                category="Cloud/Databases"
                items="MySQL, MongoDB, Prisma ORM, AWS, Redis, Docker, Kafka"
            />
            <SkillCategory
                category="Others"
                items="UI/UX, Problem Solving, Figma, GitHub, Agile Methodology, JIRA"
            />
            <SkillCategory
                category="Soft Skills"
                items="Time Management, Communication, Team Work"
            />
        </SectionCard>
    );
};

export default TechnicalSkills;
