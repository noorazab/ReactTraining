import { createStyles } from "@material-ui/core/styles";

export const styles = createStyles({
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
