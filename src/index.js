import { produce } from 'immer';

let book = { title: "Harry Potter" }

function publish(book) {
    // draft book is a proxy and records all the changes in the book
    // it does not multiply the origin book
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updated = publish(book);

console.log(book);
console.log(updated);
