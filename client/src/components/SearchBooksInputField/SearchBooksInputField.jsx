import { Button, Typography, TextField } from "@mui/material";
import useStyles from "./SearchBooksInputFieldStyles";
import { Link } from "react-router-dom";
const SearchBooksInputField = ({ setTitle, title, getBooks }) => {
  const classes = useStyles({});
  return (
    <div className={classes.header}>
      <TextField
        variant="standard"
        color="warning"
        focused
        placeholder="Book name...."
        sx={{ input: { color: "black",paddingLeft:1 }, marginRight: 2 ,paddingLeft:2}}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <Button variant="contained" onClick={getBooks} col1r="success">
        Search
      </Button>
      <Typography variant="body1" sx={{ marginLeft: 5 }}>
        Can't find what you need?{" "}
        <Link
          to="/book/suggestion"
          style={{ color: "orange", textDecoration: "none" }}
        >
          Suggest a book for us to upload!
        </Link>
      </Typography>
    </div>
  );
};

export default SearchBooksInputField;
