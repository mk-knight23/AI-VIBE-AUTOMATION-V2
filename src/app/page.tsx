import prisma from "@/lib/db";
import { cn } from "@/lib/utils";

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className={cn("text-red-500", { "text-green-500": false })}>
      {JSON.stringify(users)}
      <h1>Hello World </h1>
    </div>
  );
};

export default Page;