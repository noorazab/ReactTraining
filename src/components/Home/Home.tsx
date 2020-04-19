import React from "react";
import { List } from "../List/List";
import Tags from "../tags/tags";
import { HomeStyles } from "./HomeStyle";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { Button } from "@material-ui/core";

const Home = (props: WithStyles<typeof HomeStyles>) => {
  const { classes } = props;
  return (
    <div>
      <div className={classes.banner}>
        <h1>conduit</h1>
        <p>A place to share your Angular knowledge.</p>
      </div>
      <AppBar className={classes.feed}>
        <Toolbar className={classes.feedToggle}>
          <Button color="inherit" className={classes.feedButton}>
            Your Feed
          </Button>
          <Button color="inherit" className={classes.feedButton}>
            Global Feed
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.feedContainer}>
        <div style={{ width: "100%" }}>
          <List />
        </div>
        <div style={{ maxWidth: "20%" }}>
          <Typography color="inherit">Popular Tags</Typography>
          <Tags />
        </div>
      </div>
      <div>
        <Pagination
          count={50}
          variant="outlined"
          shape="rounded"
          hidePrevButton
          hideNextButton
        />
      </div>
    </div>
  );
};

export default withStyles(HomeStyles)(Home);
