import { PrismaClient } from '@prisma/client';

import { BookInputType } from './book.types';

const prisma = new PrismaClient();

export function getAllBooks() {
  return prisma.book.findMany({
    select: {
      id: true,
      title: true,
      chapters: true,
      pages: true,
      AuthorByBook: {
        select: {
          author: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
}

export function getBookById(id: number) {
  return prisma.book.findUnique({
    where: { id },
  });
}

export async function createBook({
  title,
  chapters,
  pages,
  authorIds = [],
}: BookInputType) {
  const book = await prisma.book.create({
    data: {
      title,
      chapters,
      pages,
      AuthorByBook: {
        create: authorIds.map((authorId) => ({ authorId })),
      },
    },
    include: {
      AuthorByBook: true,
    },
  });

  return book;
}

export function updateBook(id: number, data: any) {
  return prisma.book.update({
    where: { id },
    data,
  });
}

export function deleteBook(id: number) {
  return prisma.book.delete({
    where: { id },
  });
}

export function getBookAuthors(id: number) {
  return prisma.book.findUnique({
    where: { id },
  });
}

export async function getPagesByChapter(bookId: number) {
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      AuthorByBook: true,
    },
  });

  if (!book) {
    return null;
  }

  const chapters = book.AuthorByBook.length;
  const { pages } = book;

  const averagePagesPerChapter = pages / chapters;

  return {
    id: bookId,
    average: averagePagesPerChapter.toFixed(2),
  };
}
