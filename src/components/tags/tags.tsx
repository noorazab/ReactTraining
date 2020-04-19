import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { tagStyles } from "./tagStyle";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import axios from "axios";

export interface tagList {
  tags: string[];
}

const Tags = (props: WithStyles<typeof tagStyles>) => {
  const [tagslist, settagslist] = useState([]);
  const { classes } = props;
  useEffect(() => {
    axios
      .get("https://conduit.productionready.io/api/tags")
      .then((res) => res.data)
      .then((data) => settagslist(data.tags));
  }, []);
  return (
    <div className={classes.tagsContainer}>
      {tagslist.map((tag) => (
        <Button size="small" className={classes.tagButton}>
          {tag}
        </Button>
      ))}
    </div>
  );
};
export default withStyles(tagStyles)(Tags);
