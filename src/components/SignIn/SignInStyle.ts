import { createStyles } from "@material-ui/core/styles";

export const SignInStyles = createStyles({
  signInForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& input": {
      width: 400,
    },
  },
  signIn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h1": {
      fontWeight: "normal",
    },
    "& a": {
      color: "#5cb85c",
    },
  },
  primarryButton: {
    backgroundColor: "#5cb85c",
    borderColor: "#5cb85c",
    textTransform: "none",
    color: "white !important",
    "&:hover": {
      backgroundColor: "#449d44",
      borderColor: "#419641",
    },
  },
});
