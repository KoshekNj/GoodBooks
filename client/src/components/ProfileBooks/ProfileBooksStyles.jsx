import { makeStyles } from "@material-ui/core/styles";
const shelf =
  "https://source.unsplash.com/6vvIBTvL90A";
const useStyles = makeStyles((theme) => ({
  container: {
    //maxHeight:54,
    margin: 50,
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      paddingTop: "0px",
    },
  },
  sort: {
    marginBottom: 40,
    marginLeft: 0,
    color: "black",
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    border: "1px solid #301911",
    width: "fit-content",
    //backgroundColor: "wheat",
    padding: "2px 5px",

    borderRadius: 30,
    "&:hover": {
      cursor: "pointer",
    },
  },
  sortIcon: {
    rotate: "90deg",
    color: "brown",
    marginRight: 5,
  },
  option: {
    fontWeight: "bold",
  },
  sortDropdown: {
    backgroundColor: "transparent",
    
    padding: 10,
    paddingLeft: 0,
    border: "none",
    borderRadius: 30,
  },
  bookCover: {
    width: 120,
    height: 180,
    marginBottom: "-20px",
    marginTop: 20,
    transition: ".3s",
    [theme.breakpoints.down("sm")]: {
      width: 60,
      height: 90,
    },
  },

  gridContainer: {
    width: "100%",
  },
  gridSeperator: {
    display: "flex",
    justifyContent: "center",
    borderImage: `url(${shelf}) 30 stretch`,
    borderBottom: "25px solid ",
  },
  gridShelfEnd: {
    borderImage: `url(${shelf}) 30 stretch`,
    borderBottom: "25px solid ",
    flexGrow: 1,
  },
}));

export default useStyles;
