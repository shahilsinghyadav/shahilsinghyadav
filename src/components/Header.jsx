import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations';
import shahilsinghyadav from '../assets/shahilsinghyadav.jpg';

const Header = () => {
    const text = "Shahil Singh Yadav";
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % 1; // currently only one string, so mod 1 is always 0. But structure allows more.
            const fullText = text;

            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            );

            // Typing Speed Logic
            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && displayedText === fullText) {
                // Finished typing
                setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
            } else if (isDeleting && displayedText === '') {
                // Finished deleting
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, typingSpeed]);

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Abstract Background Element */}
            <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(200,200,255,0.3) 0%, rgba(255,255,255,0) 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1,
                borderRadius: '50%',
                filter: 'blur(60px)'
            }}></div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Profile Photo */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        marginBottom: '2rem',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(0,150,255,0.3), rgba(100,200,255,0.2))',
                        border: '2px solid rgba(0,150,255,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={shahilsinghyadav}
                            alt="Shahil Singh Yadav"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </motion.div>

                {/* Name with Typewriter Effect */}
                <motion.h1
                    variants={itemVariants}
                    style={{
                        fontSize: '5rem',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        marginBottom: '0.5rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.03em',
                        minHeight: '1.1em' // Prevent layout shift
                    }}>
                    {displayedText}
                    <span style={{
                        color: 'rgba(0, 150, 255, 1)',
                        animation: 'blink 1s step-end infinite',
                        marginLeft: '5px'
                    }}>|</span>
                </motion.h1>

                {/* Subtitle / Role */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        fontStyle: 'italic',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '3rem',
                        opacity: 0.8
                    }}>
                    a software developer & analyst
                </motion.div>

                {/* Contact Strip */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '2rem'
                    }}>
                    <a href="mailto:yshahil0623@gmail.com" className="hover-link">yshahil0623@gmail.com</a>
                    <span style={{ opacity: 0.3 }}>|</span>
                    <a href="https://linkedin.com/in/shahilsinghyadav" target="_blank" rel="noreferrer" className="hover-link">LinkedIn</a>
                    <span style={{ opacity: 0.3 }}>|</span>
                    <a href="https://github.com/shahilsinghyadav" target="_blank" rel="noreferrer" className="hover-link">GitHub</a>
                </motion.div>

            </motion.div>

            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
        </section>
    );
};

export default Header;
