const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432
})

const getBooks = (request, response) => {
    pool.query('SELECT * FROM books ORDER BY title ASC', (error, results) => {
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
}

const getBooksByTitle = (request, response) => {
    pool.query('SELECT * FROM users WHERE title = $1', [request.params.title], (error, results) => {
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
}

const getBooksByAuthor = (request, response) => {
        pool.query('SELECT * FROM users WHERE title = $1', [request.params.author], (error, results) => {
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
}

const createBook = (request, response) => {
    const { title, author, imageUrl, bio  } = request.body
    
    pool.query('INSERT INTO books (title, author, imageUrl, bio', [title, author, imageUrl, bio], (error, results) => {
        if (error) {
            throw error
        }

        response.status(201).send(`Book added with Title: ${results.title}`)
    })
}

module.exports = {
    getBooks,
    getBooksByAuthor,
    getBooksByTitle,
    createBook
}

