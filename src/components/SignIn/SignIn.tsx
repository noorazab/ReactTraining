import React from "react";
import { SignInStyles } from "./SignInStyle";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const SignIn = (props: WithStyles<typeof SignInStyles>) => {
  const { classes } = props;
  return (
    <Box className={classes.signIn}>
      <h1> Sign in</h1>
      <Typography>
        <Link href="#" color="inherit">
          Need an account?
        </Link>
      </Typography>
      <form noValidate autoComplete="off" className={classes.signInForm}>
        <TextField
          size="small"
          id="outlined-basic"
          margin="normal"
          variant="outlined"
          label="Email"
        />
        <TextField
          size="small"
          id="outlined-basic"
          variant="outlined"
          margin="normal"
          label="Password"
        />
        <Button color="inherit" className={classes.primarryButton} href="/">
          Sign In
        </Button>
      </form>
    </Box>
  );
};
export default withStyles(SignInStyles)(SignIn);
