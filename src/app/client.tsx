"use client";
import { useTRPC } from "@/app/api/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
export const Client = () => {
    const trpc = useTRPC();
    const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());
    return (
        <div>
            Client component: {JSON.stringify(users)}
        </div>
    );
};