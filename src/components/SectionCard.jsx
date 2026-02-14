import React from 'react';
import { motion } from 'framer-motion';
import { titleVariants } from '../animations';

const SectionCard = ({ title, index, children, id }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
                padding: '100px 0 60px 0', // Top padding accounts for fixed navbar
                minHeight: 'auto',
            }}
        >
            <div className="container">
                <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <motion.h2
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            color: 'var(--text-main)',
                            display: 'inline-block',
                            position: 'relative'
                        }}>
                        {title}
                        {/* Animated Underline accent */}
                        <motion.span
                            initial={{ width: '0%' }}
                            whileInView={{ width: '40%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{
                                display: 'block',
                                height: '3px',
                                background: 'var(--text-main)',
                                margin: '10px auto 0',
                                borderRadius: '2px',
                                opacity: 0.2
                            }}></motion.span>
                    </motion.h2>
                </div>

                <div className="glass-panel" style={{ padding: '40px 50px' }}>
                    {children}
                </div>
            </div>
        </motion.section>
    );
};

export default SectionCard;
