import React, { useState } from 'react';
import NavItems from './NavItems';
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        return <Contact />
    }

    const changePage = (page) => setCurrentPage(page);

    return (
        <div>
            <NavItems currentPage={currentPage} changePage ={changePage} />
            {renderPage()}
        </div>
    )
}