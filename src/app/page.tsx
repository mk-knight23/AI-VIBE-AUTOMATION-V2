import { cn } from "@/lib/utils";

const page = () => {
  const something = true;
  return <div className={cn("text-red-500", {"text-green-500": something})}>    
    Welcome to the Home Page
  </div>;
};

export default page; 