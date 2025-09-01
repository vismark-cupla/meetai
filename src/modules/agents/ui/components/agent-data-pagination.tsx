import { Button } from "@/components/ui/button";
import { DEFAULT_PAGE } from "@/constants";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const DataPagination = ({ page, totalPages, onPageChange }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 text-sm text-muted-foreground">
        Page {page} of {totalPages || DEFAULT_PAGE}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          disabled={page === DEFAULT_PAGE}
          onClick={() => onPageChange(Math.max(1, page - 1))}
          size="sm"
        >
          <ArrowLeftCircleIcon />
          Previous
        </Button>
        <Button
          variant="outline"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          size="sm"
        >
          Next
          <ArrowRightCircleIcon />
        </Button>
      </div>
    </div>
  );
};
