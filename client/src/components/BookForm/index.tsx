import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BookFormProps {
}

interface formInput {
    title: string
    author: string
    bio: string
    imageurl: string
}

const BookForm = ({  } : BookFormProps) => {
    const { register, handleSubmit } = useForm<formInput>()

    const createNewBook: SubmitHandler<formInput> = (data) => {
        fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(createNewBook)}>
            <label>Title</label>
            <input {...register('title')} />
            <label>Author</label>
            <input {...register('author')} />
            <label>bio</label>
            <input {...register('bio')} />
            <label>Image URL</label>
            <input {...register('imageurl')} />
            <button type="submit">Add</button>
        </form>
    );
}

export default BookForm;