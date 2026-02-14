import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import SectionCard from './SectionCard';
import { itemVariants, containerVariants } from '../animations';
import { ThemeContext } from '../ThemeContext';
import tradezImg from '../assets/tradez.png';
import emotionImg from '../assets/emotion.jpg';

const ProjectItem = ({ title, type, description, stack, image, github, demo, metrics }) => {
    const { isDark } = useContext(ThemeContext);
    
    return (
    <motion.div
        variants={itemVariants}
        style={{
            marginBottom: '0',
            background: isDark ? 'rgba(20,20,25,0.8)' : 'rgba(255,255,255,0.8)',
            padding: '0',
            borderRadius: '16px',
            border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
            boxShadow: isDark ? '0 4px 6px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            cursor: 'pointer'
        }}
        whileHover={{ y: -8, boxShadow: isDark ? '0 20px 40px rgba(0,150,255,0.2)' : '0 20px 40px rgba(0,150,255,0.15)' }}
        transition={{ duration: 0.3 }}
    >
        {/* Project Image */}
        <div style={{
            height: '160px',
            backgroundColor: isDark ? 'rgba(0,100,200,0.1)' : 'rgba(0,150,255,0.05)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(0,0,0,0.4)',
            fontSize: '0.9rem',
            background: image ? 'transparent' : isDark ? 'rgba(0,100,200,0.1)' : 'rgba(0,150,255,0.05)'
        }}>
            {image && (
                <img
                    src={image}
                    alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            )}
            {!image && <span>📱 Project Preview</span>}
        </div>

        <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{title}</h3>
                <span style={{ fontSize: '0.75rem', opacity: 0.7, border: isDark ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(0,0,0,0.2)', padding: '3px 8px', borderRadius: '12px', whiteSpace: 'nowrap', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}>{type}</span>
            </div>
            <ul style={{ paddingLeft: '1.2rem', opacity: 0.8, marginBottom: 'auto', lineHeight: 1.5, fontSize: '0.95rem' }}>
                {description.map((point, i) => <li key={i} style={{ marginBottom: '5px' }}>{point}</li>)}
            </ul>

            {/* Metrics */}
            {metrics && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
                    {metrics.map((metric, i) => (
                        <div key={i} style={{ color: 'var(--text-secondary)' }}>
                            <strong style={{ fontSize: '1.2rem', color: 'rgba(0,150,255,0.8)' }}>{metric.value}</strong>
                            <div style={{ fontSize: '0.8rem' }}>{metric.label}</div>
                        </div>
                    ))}
                </div>
            )}

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 1rem 0' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Tech Stack:</strong> {stack}
                </p>
                
                {/* Project Links */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                background: isDark ? 'rgba(0,150,255,0.2)' : 'rgba(0,150,255,0.1)',
                                border: '1px solid rgba(0,150,255,0.5)',
                                borderRadius: '8px',
                                color: 'rgba(0,150,255,0.9)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                textDecoration: 'none',
                                transition: 'all 0.3s',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = isDark ? 'rgba(0,150,255,0.3)' : 'rgba(0,150,255,0.15)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = isDark ? 'rgba(0,150,255,0.2)' : 'rgba(0,150,255,0.1)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            🔗 GitHub
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                background: 'linear-gradient(135deg, rgba(0,150,255,0.2), rgba(0,200,150,0.2))',
                                border: '1px solid rgba(0,150,255,0.5)',
                                borderRadius: '8px',
                                color: 'rgba(0,150,255,0.9)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                textDecoration: 'none',
                                transition: 'all 0.3s',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, rgba(0,150,255,0.3), rgba(0,200,150,0.3))';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, rgba(0,150,255,0.2), rgba(0,200,150,0.2))';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            🚀 Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    </motion.div>
    );
};

const Projects = () => {
    return (
        <SectionCard title="Personal Projects" id="projects">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                    image={tradezImg}
                    github="https://github.com/shahilsinghyadav/tradez"
                    metrics={[
                        { value: "100%", label: "Test Coverage" },
                        { value: "REST API", label: "Architecture" }
                    ]}
                />

                <ProjectItem
                    title="Nudge: A WebRTC Real-Time Video Calling Web App"
                    type="Development"
                    description={[
                        "Built a peer-to-peer video calling platform with WebRTC and Socket.IO for signaling.",
                        "Managed media stream lifecycle (local/remote), peer connection states, and ICE candidate exchange for NAT traversal."
                    ]}
                    stack="React (TypeScript), WebRTC, Socket.IO, Node.js, Express"
                    github="https://github.com/shahilsinghyadav/nudge"
                    demo="https://nudge-webrtc.vercel.app"
                    metrics={[
                        { value: "<50ms", label: "Latency" },
                        { value: "P2P", label: "Connection" }
                    ]}
                />

                <ProjectItem
                    title="Emotion Based Music Recommendation System"
                    type="EDA, Development"
                    description={[
                        "Conducted exploratory data analysis (EDA) on the dataset, extracting insights and patterns to inform project decisions.",
                        "Designed and developed webpages, working on client and server side."
                    ]}
                    stack="Python, Numpy, Data Analysis, HTML, CSS, JS"
                    image={emotionImg}
                    github="https://github.com/shahilsinghyadav/emotion-music-rec"
                    metrics={[
                        { value: "87%", label: "Accuracy" },
                        { value: "ML Model", label: "Type" }
                    ]}
                />
            </motion.div>
        </SectionCard>
    );
};

export default Projects;
