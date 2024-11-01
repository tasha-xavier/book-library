import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './styles.scss';

const Layout = () => (
    <div className="layout">
        <div className="sidebar">
            <ul className="sidebar-nav">
                <li>
                    <Link 
                        className="sidebar-link"
                        to="/my-books"
                    >
                        My books
                    </Link>
                </li>
                <li>
                    <Link 
                        className="sidebar-link"
                        to="/to-be-read"
                    >
                        To be read
                    </Link>
                </li>
                <li>
                    <Link 
                        className="sidebar-link"
                        to="/currently-reading"
                    >
                        Currently reading
                    </Link>
                </li>
            </ul>
        </div>
        <div className="content">
            <Outlet />
        </div>
    </div>
);

export default Layout;
