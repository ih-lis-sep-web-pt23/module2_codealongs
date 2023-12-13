import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Rating,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { Movie } from "@mui/icons-material";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState(0);
  const [rating, setRating] = useState(0);
  const [hasOscars, setHasOscars] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h5">Add a Movie</Typography>
        <Movie fontSize="large" />
        <Paper sx={{ p: 2, mt: 1 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "flex-start",
            }}
          >
            <TextField
              label="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <TextField
              label="Year of Release"
              type="number"
              value={releaseYear}
              onChange={e => setReleaseYear(e.target.value)}
            />
            <Rating
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
            />
            <FormControlLabel
              label="Won oscars"
              control={<Checkbox checked={hasOscars} />}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
            >
              Submit movie
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default AddMovie;
