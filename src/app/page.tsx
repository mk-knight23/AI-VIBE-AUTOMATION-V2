import prisma from "@/lib/db";
import { cn } from "@/lib/utils";

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className={cn("text-red-500", { "text-green-500": false })}>
      {JSON.stringify(users)}
      My Main Page 
    </div>
  );
};

export default Page;