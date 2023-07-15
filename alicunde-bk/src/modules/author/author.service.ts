import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function getAllAuthors() {
  return prisma.author.findMany({
    select: {
      id: true,
      name: true,
      AuthorByBook: {
        select: {
          book: {
            select: {
              title: true,
              pages: true,
              chapters: true,
            },
          },
        },
      },
    },
  });
}

export function getAuthorById(id: number) {
  return prisma.author.findUnique({
    where: { id },
  });
}

export function createAuthor(data: any) {
  return prisma.author.create({
    data,
  });
}

export function updateAuthor(id: number, data: any) {
  return prisma.author.update({
    where: { id },
    data,
  });
}

export function deleteAuthor(id: number) {
  return prisma.author.delete({
    where: { id },
  });
}

export function getAuthorBooks(id: number) {
  return prisma.author.findUnique({
    where: { id },
  });
}
