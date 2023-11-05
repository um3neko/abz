import { PrismaClient } from '@prisma/client';
import { log } from '../src/utils/logger';
import { DateTime } from 'luxon';

const prisma = new PrismaClient();
async function seedDatabase() {
  const usersData = [];
  for (let i = 1; i <= 45; i++) {
    const user = {
      name: `User${i}`,
      email: `user${i}.example.com`,
      phone: `+38094519800${i}`,
      positionId: 2,
      registration_timestamp: DateTime.now().toISO(),
      photo: `https://i.pinimg.com/564x/5f/0c/73/5f0c73dfbaaad403e6b4944285cb5482.jpg`,
    };
    usersData.push(user);
  }

  const positionData = [
    {
      id: 1,
      name: 'Security',
    },
    {
      id: 2,
      name: 'Designer',
    },
    {
      id: 3,
      name: 'Content manager',
    },
    {
      id: 4,
      name: 'Lawyer',
    },
  ];
  const createPositions = await prisma.position.createMany({
    data: positionData,
  });
  log.info(`Created ${createPositions.count} positions.`);

  const createdUsers = await prisma.user.createMany({
    data: usersData,
  });

  log.info(`Created ${createdUsers.count} users.`);
}

seedDatabase()
  .catch((error) => {
    log.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
