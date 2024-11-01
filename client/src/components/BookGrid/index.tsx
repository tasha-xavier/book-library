import React from 'react';

import Book from '../Book';

import './styles.scss';

interface BookGridProps {
    books: Array<{
        title: string;
        bio: string;
        id: string;
        image: string;
    }>
}

const BookGrid = ({ books } : BookGridProps) => (
    <div className="book-grid">
        {books.map(({ title, bio, id, image }) => (
            <Book title={title} bio={bio} id={id} image={image} />
        ))}
    </div>
)

export default BookGrid;