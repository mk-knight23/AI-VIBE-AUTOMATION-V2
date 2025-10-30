const { PrismaClient } = require('../lib/generated/prisma');

(async () => {
  const db = new PrismaClient();
  try {
    const u = await db.user.findFirst();
    console.log('findFirst result:', u);
  } catch (e) {
    console.error('Error during findFirst:', e);
    process.exitCode = 1;
  } finally {
    await db.$disconnect();
  }
})();
