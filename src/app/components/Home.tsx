import { useState, ChangeEvent } from "react";
import { Container, Typography, Grid, CircularProgress, Button } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import SearchBar from "./SearchBar";
import AdvocateCard from "./AdvocateCard";
import PaginationControls from "./PaginationControls";
import { Advocate } from "@/types";

const fetchAdvocates = async (searchTerm: string, page: number) => {
  const { data } = await axios.get(`/api/advocates`, {
    params: { searchTerm, page, limit: 10 },
  });
  return data;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const { data, refetch, isLoading } = useQuery(
    ["advocates", searchTerm, page],
    () => fetchAdvocates(searchTerm, page),
    { keepPreviousData: true }
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
    refetch();
  };

  const onClick = () => {
    setSearchTerm("");
    setPage(1);
    refetch();
  };

  return (
    <Container style={{ marginTop: "24px" }}>
      <Typography variant="h4" gutterBottom>
        Solace Advocates
      </Typography>
      <SearchBar searchTerm={searchTerm} onChange={onChange} onClick={onClick} />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {data?.data.length > 0 && data.data.map((advocate: Advocate, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AdvocateCard advocate={advocate} />
            </Grid>
          ))}
        </Grid>
      )}
      <PaginationControls page={page} setPage={setPage} data={data} />
    </Container>
  );
}