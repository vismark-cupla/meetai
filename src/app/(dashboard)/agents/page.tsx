import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

import {
  AgentsView,
  AgentsViewError,
  AgentsViewLoading,
} from "@/modules/agents/ui/views/agents-view";

const Page = async () => {
  return (
    <Suspense fallback={<AgentsViewLoading />}>
      <ErrorBoundary fallback={<AgentsViewError />}>
        <AgentsView />
      </ErrorBoundary>
    </Suspense>
  );
};

export default Page;
