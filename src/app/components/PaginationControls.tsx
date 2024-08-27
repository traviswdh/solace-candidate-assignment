import { Button } from "@mui/material";

interface PaginationControlsProps {
  page: number;
  setPage: (page: number) => void;
  data: any;
}

export default function PaginationControls({ page, setPage, data }: PaginationControlsProps) {
  return (
    <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={!data || data.data.length < 10}
      >
        Next
      </Button>
    </div>
  );
}