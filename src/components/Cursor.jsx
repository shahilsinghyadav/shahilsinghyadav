import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if the hovered element or its parent is a link/button/clickable
            if (e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('hover-link') ||
                e.target.classList.contains('nav-link')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="custom-cursor"
            animate={{
                x: position.x - (isHovered ? 25 : 10), // Center based on size
                y: position.y - (isHovered ? 25 : 10),
                height: isHovered ? 50 : 20,
                width: isHovered ? 50 : 20,
                backgroundColor: isHovered ? "rgba(0, 150, 255, 0.2)" : "rgba(0, 150, 255, 0.5)",
                border: isHovered ? "1px solid rgba(0, 150, 255, 0.8)" : "none"
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
            style={{
                position: 'fixed',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                backdropFilter: 'blur(1px)'
            }}
        />
    );
};

export default Cursor;
