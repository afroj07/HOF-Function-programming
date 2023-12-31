const books = [
    { title: 'My Diary', author: 'Afroj', year: 2022 },
    { title: 'Tommarow', author: 'k.p sharma', year: 2012 },
    { title: 'Lost Spring', author: 'jayshankar', year: 2005 },
    // Add more books as needed
];

function filterAndCapitalize(books) {
    const filteredBooks = books
        .filter(book => book.year >= 2010)
        .map(book => ({
            title: book.title,
            author: book.author.toUpperCase(),
            year: book.year
        }));

    return filteredBooks;
}

const filteredAndCapitalizedBooks = filterAndCapitalize(books);

console.log("Original Books:", books);
console.log("Filtered and Capitalized Books:", filteredAndCapitalizedBooks);