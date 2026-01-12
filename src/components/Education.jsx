import React from 'react';
import SectionCard from './SectionCard';

const EducationItem = ({ institute, period, degree, score }) => (
    <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{institute}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.7, marginBottom: '0.5rem', fontSize: '0.95rem' }}>
            <span>{degree}</span>
            <span>{period}</span>
        </div>
        <p style={{ opacity: 0.9, fontWeight: 500 }}>{score}</p>
    </div>
);

const Education = () => {
    return (
        <SectionCard title="Education" id="education">
            <EducationItem
                institute="Kalinga Institute of Industrial Technology, Bhubaneshwar"
                degree="B.Tech in Computer Science and System Engineering"
                period="2020 to 2024"
                score="CGPA: 8.61"
            />
            <EducationItem
                institute="Lucknow Public School"
                degree="CBSE - 12th"
                period="2019 to 2020"
                score="Percentage: 92.2"
            />
            <EducationItem
                institute="Lucknow Public School"
                degree="CBSE - 10th"
                period="2017 to 2018"
                score="Percentage: 89"
            />
        </SectionCard>
    );
};

export default Education;
