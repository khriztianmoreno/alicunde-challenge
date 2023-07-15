import { PrismaClient } from '@prisma/client';

import authorSeeder from '../src/modules/author/author.seeder';
import bookSeeder, { booksByAuthor } from '../src/modules/book/books.seeder';

const prisma = new PrismaClient();

async function main() {
  const createAuthores = await prisma.author.createMany({
    data: authorSeeder,
    skipDuplicates: true,
  });

  const createBooks = await prisma.book.createMany({
    data: bookSeeder,
    skipDuplicates: true,
  });

  const createBooksByAuthor = await prisma.authorByBook.createMany({
    data: booksByAuthor,
    skipDuplicates: true,
  });

  console.log({
    createAuthores,
    createBooks,
    createBooksByAuthor,
  });
}

main()
  .then(() => {
    console.log('Seed complete');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
