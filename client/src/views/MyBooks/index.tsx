import React, { useEffect, useState } from 'react';

import BookGrid from '../../components/BookGrid';

const MyBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/api/books', {
             headers: {
                "accepts": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
            })
    }, []);

    return (
        <>
            <h1>My books</h1>
            <BookGrid books={books} />
        </>
    )
}

export default MyBooks;