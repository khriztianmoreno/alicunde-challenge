import authors from '../author/author.seeder';

const books = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    chapters: 3,
    pages: 1178,
  },
  {
    id: 2,
    title: 'The Hobbit',
    chapters: 3,
    pages: 310,
  },
  {
    id: 3,
    title: 'The Silmarillion',
    chapters: 5,
    pages: 365,
  },
];

export const booksByAuthor = [
  {
    id: 1,
    bookId: books[0].id,
    authorId: authors[0].id,
  },
  {
    id: 2,
    bookId: books[0].id,
    authorId: authors[1].id,
  },
  {
    id: 3,
    bookId: books[1].id,
    authorId: authors[1].id,
  },
  {
    id: 4,
    bookId: books[2].id,
    authorId: authors[1].id,
  },
];

export default books;
