import React from "react";
import { SignUpStyles } from "./SignUpStyle";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const SignUp = (props: WithStyles<typeof SignUpStyles>) => {
  const { classes } = props;
  return (
    <Box className={classes.signUp}>
      <h1> Sign Up</h1>
      <Typography>
        <Link href="#" color="inherit">
          Have an account?
        </Link>
      </Typography>
      <form noValidate autoComplete="off" className={classes.signUpForm}>
        <TextField variant="outlined" margin="normal" label="Username" />
        <TextField margin="normal" variant="outlined" label="Email" />
        <TextField variant="outlined" margin="normal" label="Password" />
        <Button color="inherit" className={classes.primarryButton} href="/">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};
export default withStyles(SignUpStyles)(SignUp);
