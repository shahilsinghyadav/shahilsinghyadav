import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Certifications from './components/Certifications';

import Cursor from './components/Cursor';

function App() {
    return (
        <div className="main-container">
            <Cursor />
            <Navbar />

            <Header />

            {/* Sections now need IDs passed to SectionCard for auto-scroll in Navbar */}
            <Education />
            <Experience />
            <Projects />
            <TechnicalSkills />
            <Certifications />


            <footer style={{
                padding: '50px 0',
                textAlign: 'center',
                opacity: 0.6,
                fontSize: '0.9rem'
            }}>
                <p>© 2026 Shahil Singh Yadav.</p>
            </footer>
        </div>
    );
}

export default App;
