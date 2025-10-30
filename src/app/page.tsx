"use client";

import { trpc } from "@/trpc/client";
import { LogoutButton } from "./logout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Page = () => {
  const { data } = trpc.getWorkflows.useQuery();
  const create = trpc.createWorkflow.useMutation({
    onSuccess: () => {
      toast("Job Queued");
    },
  });

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {data && <p>Found {data.length} workflows</p>}
      <Button disabled={create.isPending} onClick={() => create.mutate()}>Create Workflow</Button>
      <LogoutButton />
    </div>
  );
};

export default Page;