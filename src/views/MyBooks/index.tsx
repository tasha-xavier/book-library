import React from 'react';

import BookGrid from '../../components/BookGrid';

const books = [
    {
        title: 'Harry Potter and the Philospher\'s stone',
        bio: 'When mysterious letters start arriving on his doorstep, Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry.',
        id: '1',
        image: 'https://m.media-amazon.com/images/I/51DoG9xDIKL._SL500_.jpg'
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        bio: 'Harry Potter\’s summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby and rescue from the Dursleys by his friend Ron Weasley in a magical flying car!',
        id: '2',
        image: 'https://m.media-amazon.com/images/I/818umIdoruL._SY342_.jpg'
    }
];

const MyBooks = () => {
    return (
        <>
            <h1>My books</h1>
            <BookGrid books={books} />
        </>
    )
}

export default MyBooks;