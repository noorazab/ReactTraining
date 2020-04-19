import React from "react";
import { topBarStyles } from "./topBarStyle";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { WithStyles, withStyles } from "@material-ui/core/styles";

const TopBar = (props: WithStyles<typeof topBarStyles>) => {
  const { classes } = props;
  return (
    <AppBar className={classes.AppBar}>
      <Toolbar className={classes.topBar}>
        <Typography variant="h6">
          <a href="">conduit</a>
        </Typography>
        <div>
          <Button color="inherit" href="/" className={classes.topBarButton}>
            Home
          </Button>
          <Button
            color="inherit"
            href="/signin"
            className={classes.topBarButton}
          >
            Sign In
          </Button>
          <Button
            color="inherit"
            href="/signup"
            className={classes.topBarButton}
          >
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(topBarStyles)(TopBar);
