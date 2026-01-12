import React from 'react';
import SectionCard from './SectionCard';

const ExperienceItem = ({ company, role, period, location, details }) => (
    <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>{company}</h3>
            <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>{period}</span>
        </div>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-accent)', marginBottom: '1rem', fontWeight: 500 }}>
            {role} <span style={{ opacity: 0.4 }}>|</span> {location}
        </p>
        <ul style={{ paddingLeft: '1.2rem', opacity: 0.85, lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {details.map((point, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
            ))}
        </ul>
    </div>
);

const Experience = () => {
    return (
        <SectionCard title="Experience" id="experience">
            <ExperienceItem
                company="Deloitte, India"
                role="Analyst / Intern: Technology & Transformation"
                period="01/2025 to Present / 07/2024 to 01/2025"
                location="Thane, Maharashtra"
                details={[
                    "Part of Product Engineering team, worked on building and optimizing Node.js and SAP Fiori (UI5) applications for SAP GRC/IDM.",
                    "Implemented AD Group management and Job Schedulers on BTP.",
                    "Contributed to backend services, database schema design, API development, OAuth-based authentication, and integrations with third-party on-prem systems.",
                    "Implemented Jenkins-based CI/CD pipelines for production.",
                    "Developed Deloitte internal assets that reduced resource management effort by up to 80%, ensuring low latency on BTP, HANA-DB.",
                    "Awarded as \"NextGen Innovator\" under Jarvis Club (2nd place)."
                ]}
            />

            <ExperienceItem
                company="Flying Chital - Atulya Abhinav Tech Pvt. Ltd."
                role="Software Intern"
                period="04/2023 to 07/2023"
                location="Remote"
                details={[
                    "Worked from requirement gathering to creating Backend Architecture and APIs for logistics management/live tracking of rakes using Node.js.",
                    "Implemented OTP based, OAuth Authentication utilizing AWS S3, EC2.",
                    "Contributed as a UIUX designer."
                ]}
            />

            <ExperienceItem
                company="Japan Third Party Co Ltd. (Training)"
                role="Trainee Intern"
                period="02/2024 – 03/2024"
                location="Remote"
                details={[
                    "Cleared GAIT with 365 score into the bronze category."
                ]}
            />
        </SectionCard>
    );
};

export default Experience;
