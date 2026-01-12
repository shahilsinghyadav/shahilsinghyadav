import React from 'react';
import SectionCard from './SectionCard';

const ProjectItem = ({ title, type, description, stack }) => (
    <div style={{
        marginBottom: '0', // Removed bottom margin as grid gap handles spacing
        background: 'rgba(255,255,255,0.4)',
        padding: '0', // Removing padding from container to allow image to flush
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.6)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden' // Ensure image stays within border radius
    }}>
        {/* Placeholder for Project Image */}
        <div style={{
            height: '160px',
            backgroundColor: 'rgba(0,0,0,0.1)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(0,0,0,0.4)',
            fontSize: '0.9rem'
        }}>
            Project Image
        </div>

        <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{title}</h3>
                <span style={{ fontSize: '0.75rem', opacity: 0.7, border: '1px solid #ccc', padding: '3px 8px', borderRadius: '12px', whiteSpace: 'nowrap' }}>{type}</span>
            </div>
            <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, marginBottom: 'auto', lineHeight: 1.5, fontSize: '0.95rem' }}>
                {description.map((point, i) => <li key={i} style={{ marginBottom: '5px' }}>{point}</li>)}
            </ul>
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    <strong style={{ color: 'var(--text-main)' }}>Tech Stack:</strong> {stack}
                </p>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <SectionCard title="Personal Projects" id="projects">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)', // Force 3 columns as requested
                gap: '2rem',
                width: '100%'
            }}>
                {/* Dummy Project Sequence First */}
                <ProjectItem
                    title="Project Name Placeholder"
                    type="Type"
                    description={[
                        "Project details will be added later. This is a placeholder description to demonstrate the layout.",
                        "More details coming soon."
                    ]}
                    stack="Tech Stack Placeholder"
                />

                <ProjectItem
                    title="Tradez: AI Driven platform for crypto enthusiasts"
                    type="Development"
                    description={[
                        "Developing backend for the project, implementing user authentication: Login/Signup, Portfolio Analyser from CSV and AlgoTrading.",
                        "Using Prisma ORM with MySQL database. Employed JSON Web Tokens (JWT) for robust and secure session handling (cookies)."
                    ]}
                    stack="Node.js, Express.js, Prisma ORM, React.js, SQL, Postman, JavaScript, UIUX, Figma"
                />

                <ProjectItem
                    title="Nudge: A WebRTC Real-Time Video Calling Web App"
                    type="Development"
                    description={[
                        "Built a peer-to-peer video calling platform with WebRTC and Socket.IO for signaling.",
                        "Managed media stream lifecycle (local/remote), peer connection states, and ICE candidate exchange for NAT traversal."
                    ]}
                    stack="React (TypeScript), WebRTC, Socket.IO, Node.js, Express"
                />

                <ProjectItem
                    title="Emotion Based Music Recommendation System"
                    type="EDA, Development"
                    description={[
                        "Conducted exploratory data analysis (EDA) on the dataset, extracting insights and patterns to inform project decisions.",
                        "Designed and developed webpages, working on client and server side."
                    ]}
                    stack="Python, Numpy, Data Analysis, HTML, CSS, JS"
                />
            </div>
        </SectionCard>
    );
};

export default Projects;
