import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { CardStyle } from "./CardStyle";
import { WithStyles, withStyles } from "@material-ui/core/styles";

export interface ICard {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export interface CardProps {
  data: ICard;
}

export const Card: React.FC<CardProps & WithStyles<typeof CardStyle>> = ({
  data,
  classes,
}) => {
  const [count, setCount] = useState(0);
  const likes = () => {
    setCount(count + 1);
  };
  const { author } = data;
  return (
    <div className={classes.articleDetailes}>
      <div className={classes.articlePreview}>
        <div className={classes.articleContent}>
          <div>
            <NavLink to="/">
              <img src={author.image} />
            </NavLink>
            <div>
              <NavLink to="/">{author.username}</NavLink>
              <span>createdAt}</span>
            </div>
          </div>
          <div>
            <Button variant="outlined" onClick={likes}>
              {count}
              <FavoriteIcon color="secondary" />
            </Button>
          </div>
        </div>
        <NavLink to="/">
          <h1>{data.title}</h1>
          <Typography>{data.description}</Typography>
          <span>Read more...</span>
        </NavLink>
      </div>
    </div>
  );
};
export default withStyles(CardStyle)(Card);
