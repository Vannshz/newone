import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Container, Box, styled } from "@mui/material";
import Search from "../../../images/search.svg";

const useStyles = makeStyles({
  input: {
    fontSize: "16px",
    width: "563.35px",
    border: "white",
    "&:focus": {
      outline: "none",
    },
  },
});

const SearchContainer = styled("div")({
  width: "598px",
  height: "28px",
  gap: "10.63px",
  display: "flex",
  borderBottom: "2px solid #BAC9CF",
});

const ImageContainer = styled("div")({
  marginLeft: "3px",
  marginTop: "3px",
});

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const classes = useStyles();
  return (
    <div>
      <Container >
        <Box >
          <SearchContainer>
            <ImageContainer>
              <img src={Search} alt="" width="19px" height="19px" />
            </ImageContainer>
            <input
              type="text"
              placeholder="Search by title or author"
              className={classes.input}
            
              value={search}
            />
          </SearchContainer>
        </Box>
      </Container>
    </div>
  );
};

export default SearchBar;
