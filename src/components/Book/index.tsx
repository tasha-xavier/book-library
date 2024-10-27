import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

interface BookProps {
    title: string;
    bio: string;
    id: string,
    image: string;
}

const Book = ({ title, bio, id, image } : BookProps) => {

    return (
        <div className="book">
            <div style={{ backgroundImage: `url(${image})` }} className='book-image' />
            <div>
                <h2 className='book-title'>
                    {title}
                </h2>
                <p className='book-bio'>{bio}</p>
                <Link to={`/book/${id}`} className="book-link">More info</Link>
            </div>
        </div>
    );
}

export default Book;