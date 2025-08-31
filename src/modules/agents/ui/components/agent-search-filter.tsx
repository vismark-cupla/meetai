"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAgentsFilters } from "../../hooks/use-agents-filters";

export const AgentSearchFilter = () => {
  const [filters, setFilters] = useAgentsFilters();
  return (
    <div className="relative">
      <Input
        placeholder="Filter by name"
        value={filters.search || ""}
        onChange={(e) => {
          setFilters({ search: e.target.value, page: filters.page });
          console.log(
            "search value:",
            e.target.value,
            " filters:",
            filters.page
          );
        }}
        className="h-9 bg-white w-[200px] pl-7"
      />
      <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};
