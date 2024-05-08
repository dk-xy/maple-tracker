// Layout.jsx (your common layout component)
import React from 'react';
import { Link } from 'react-router-dom';


const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul className='appMenu'>
                    <li className='menuElement'>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className='menuElement'>
                        <Link to="/legion">Legion</Link>
                    </li>
                    <li className='menuElement'>
                        <Link to="/checklists">Checklists</Link>
                    </li>
                    {/* Add other menu items */}
                </ul>
            </nav>
            {children} {/* Render the page-specific content */}
        </div>
    );
};

export default Layout;