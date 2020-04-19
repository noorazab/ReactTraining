import { createStyles } from "@material-ui/core/styles";

export const HomeStyles = createStyles({
  banner: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#5cb85c",
    alignItems: "center",
    "& h1": {
      color: "white",
      fontSize: "3.5rem",
      paddingBottom: ".5rem",
    },
    "& p": {
      color: "#fff",
      fontSize: "1.5rem",
    },
  },
  feed: {
    position: "static",
    backgroundColor: "inherit",
    boxShadow: "none",
    "& a": {
      color: "#5cb85c",
      textDecoration: "none",
    },
  },
  feedToggle: {
    display: "flex",
    backgroundColor: "white",
    color: "black",
    width: "70%",
    margin: "auto",
  },
  feedContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    width: "70%",
  },
  feedButton: {
    textTransform: "capitalize",
    color: "#5cb85c",
  },
});
