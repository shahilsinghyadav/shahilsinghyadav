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
                    <>
                        Part of Product Engineering team, worked on building and optimizing <strong>Node.js</strong> and <strong>SAP Fiori (UI5)</strong> applications for <strong>SAP GRC/IDM</strong>.
                    </>,
                    <>
                        Implemented <strong>AD Group management</strong> and <strong>Job Schedulers</strong> on <strong>BTP</strong>.
                    </>,
                    <>
                        Contributed to <strong>backend services</strong>, <strong>database schema design</strong>, <strong>API development</strong>, <strong>OAuth-based authentication</strong>, and integrations with third-party on-prem systems.
                    </>,
                    <>
                        Implemented <strong>Jenkins-based CI/CD pipelines</strong> for production.
                    </>,
                    <>
                        Developed Deloitte internal assets that reduced resource management effort by up to <strong>80%</strong>, ensuring low latency on <strong>BTP</strong>, <strong>HANA-DB</strong>.
                    </>,
                    <>
                        Awarded as <strong>"NextGen Innovator"</strong> under <strong>Jarvis Club</strong> (<strong>2nd place</strong>).
                    </>
                ]}
            />

            <ExperienceItem
                company="Flying Chital - Atulya Abhinav Tech Pvt. Ltd."
                role="Software Intern"
                period="04/2023 to 07/2023"
                location="Remote"
                details={[
                    <>
                        Worked from requirement gathering to creating <strong>Backend Architecture</strong> and <strong>APIs</strong> for logistics management/live tracking of rakes using <strong>Node.js</strong>.
                    </>,
                    <>
                        Implemented <strong>OTP-based</strong>, <strong>OAuth Authentication</strong> utilizing <strong>AWS S3</strong>, <strong>EC2</strong>.
                    </>,
                    <>
                        Contributed as a <strong>UI/UX designer</strong>.
                    </>
                ]}
            />

            <ExperienceItem
                company="Japan Third Party Co Ltd. (Training)"
                role="Trainee Intern"
                period="02/2024 – 03/2024"
                location="Remote"
                details={[
                    <>
                        Cleared <strong>GAIT</strong> with <strong>365</strong> score into the <strong>bronze</strong> category.
                    </>
                ]}
            />
        </SectionCard>
    );
};

export default Experience;
