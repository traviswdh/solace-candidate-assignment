import { TextField, InputAdornment, IconButton, Button, Typography } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { ChangeEvent } from "react";

interface SearchBarProps {
  searchTerm: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function SearchBar({ searchTerm, onChange, onClick }: SearchBarProps) {
  return (
    <>
      <Typography variant="body1" gutterBottom>
        Search
      </Typography>
      <Typography variant="body2" gutterBottom>
        Searching for: <span id="search-term">{searchTerm}</span>
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={onChange}
        placeholder="Search advocates"
        value={searchTerm}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" onClick={onClick} style={{ marginBottom: "24px" }}>
        Reset Search
      </Button>
    </>
  );
}