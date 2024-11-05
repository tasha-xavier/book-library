import React from 'react';
import { Outlet } from 'react-router-dom';

import Menu from './Menu';

import './styles.scss';

const Layout = () => (
    <div className="layout">
        <Menu />
        <div className="content">
            <Outlet />
        </div>
    </div>
);

export default Layout;
