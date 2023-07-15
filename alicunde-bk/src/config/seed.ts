import seedUser from '../modules/author/user.seeder';

async function seed() {
  await Promise.all([
    seedUser(),
  ]);
}

export default seed;
