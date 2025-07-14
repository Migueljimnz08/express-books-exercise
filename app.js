const express = require('express')
const books = require('./data/books.json');
const cowsay = require('cowsay');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//Ej 1
app.get('/all', (req, res) => {
  res.status(200).json(books);
});

//Ej 2
app.get('/first', (req, res) => {
  res.status(200).json(books[0]);
});

//Ej 3

app.get('/last', (req, res) => {
  let last = books.length -1
  res.status(200).json(books[last]);
});

//Ej 4

app.get('/middle', (req, res) => {
  let middle = Math.floor(books.length / 2)
  res.status(200).json(books[middle]);
});

//Ej 5

app.get('/author/dante-alighieri', (req, res) => {
  let author = 'Dante Alighieri';

  const book = books.find(book => book.author == author);
  if (book) {
  res.status(200).json(book.title);
  } else {
  res.status(404).json({msj:'Author not found!'});
  } 
});

//Ej 6

app.get('/country/charles-dickens', (req, res) => {
  let author = 'Charles Dickens';

  const book = books.find(book => book.author == author);
  if (book) {
  res.status(200).json(book.country);
  } else {
  res.status(404).json({msj:'Author not found!'});
  } 
});

//EJ 7

app.get('/year&pages/cervantes', (req, res) => {
  let author = 'Miguel de Cervantes';

  const book = books.find(book => book.author == author);
  if (book) {
  res.status(200).json({pages: book.pages, year: book.year});
  } else {
  res.status(404).json({msj:'Author not found!'});
  } 
});

//Ej 8

app.get('/country/count/spain', (req, res) => {
  let country = 'Spain';
  
  if (country) {
  const spanishBooks = books.filter((book) => book.country == country);
  res.status(200).json(spanishBooks.length);
  } else {
  res.status(404).json({msj:'Books not found!'});
  } 
});

//Ej 9

app.get('/country/at-least/germany', (req, res) => {
  let country = 'Germany';
  let boolean = false;
  
  
  const germanBooks = books.filter((book) => book.country == country);
  if (germanBooks.length > 0){
    boolean = true
  res.status(200).json(boolean);
  } else {
  res.status(404).json({msj:'Books not found!'});
  } 
});

//Ej 10

app.get('/pages/all-greater/200', (req, res) => {
  let contador = 0;
  let boolean = false;
  
  const allPages = books.forEach((book) => {
   if (book.pages > 200){
    contador++ 
   }});
  if (contador == books.length){
    boolean = true
  res.status(200).json(boolean);
  } else {
  res.status(404).json(boolean);
  } 
});

app.listen(port, () => {
  console.log(
    cowsay.say({
      text: `Example app listening on port http://localhost:${port}`,
      f: "tux", // Use the penguin ASCII art // tux
    })
  );
});