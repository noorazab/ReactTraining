import { createStyles } from "@material-ui/core/styles";

export const CardStyle = createStyles({
  articleDetailes: {
    display: "flex",
    flexDirection: "row",
  },
  articlePreview: {
    borderTop: "1px solid red",
    marginBottom: "5px",
    padding: "5px",
    width: "100%",
  },
  articleContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
