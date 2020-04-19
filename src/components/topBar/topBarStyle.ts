import { createStyles } from "@material-ui/core/styles";

export const topBarStyles = createStyles({
  topBar: {
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "black",
    width: "70%",
    margin: "auto",
  },
  AppBar: {
    position: "static",
    backgroundColor: "inherit",
    boxShadow: "none",
    "& a": {
      color: "#5cb85c",
      textDecoration: "none",
    },
  },
  topBarButton: {
    textTransform: "capitalize",
  },
});
