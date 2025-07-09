import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.user.deleteMany();

  // Create sample users
  const users = [
    {
      nama: 'John Doe',
      email: 'john.doe@example.com',
      nomorTelepon: '1234567890',
      statusAktif: true,
      departemen: 'Information Technology',
    },
    {
      nama: 'Jane Smith',
      email: 'jane.smith@example.com',
      nomorTelepon: '0987654321',
      statusAktif: true,
      departemen: 'Human Resources',
    },
    {
      nama: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      nomorTelepon: '1122334455',
      statusAktif: false,
      departemen: 'Finance',
    },
    {
      nama: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      nomorTelepon: '5566778899',
      statusAktif: true,
      departemen: 'Marketing',
    },
    {
      nama: 'David Brown',
      email: 'david.brown@example.com',
      nomorTelepon: '9988776655',
      statusAktif: true,
      departemen: 'Operations',
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });