import React from 'react';

import Book from '../Book';

import './styles.scss';

interface BookGridProps {
    books: Array<{
        title: string;
        bio: string;
        id: string;
        imageurl: string;
    }>
}

const BookGrid = ({ books } : BookGridProps) => (
    <div className="book-grid">
        {books.map(({ title, bio, id, imageurl }) => (
            <Book title={title} bio={bio} id={id} image={imageurl} />
        ))}
    </div>
)

export default BookGrid;