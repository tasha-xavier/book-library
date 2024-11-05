import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Menu = () => {
    const links = [
        {
            to: '/my-books',
            text: 'My books'
        },
        {
            to: '/to-be-read',
            text: 'To be read'
        },
        {
            to: '/currently-reading',
            text: 'Currently reading'
        }
    ];

    const LinkElements = () => 
        links.map(({ text, to }) => (
            <Link to={to} className='nav-link'>
                {text}
            </Link>
        ));

    return (
        <header className='menu'>
            {links.length > 0 && (
            <nav>
                <ul className='nav'>
                    <LinkElements />
                </ul>
            </nav>
            )}
        </header>
    )
};

export default Menu;