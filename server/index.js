const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/api/books', db.getBooks);
app.get('/api/books/title/:title', db.getBooksByTitle);
app.get('/api/books/author/:author', db.getBooksByAuthor);
app.post('/api/books', db.createBook);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});