import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import {
  yellow,
  green,
  pink,
  blue,
  indigo,
  red,
  lightBlue,
  teal,
  lime,
  amber,
  deepOrange,
  brown,
  purple,
  deepPurple,
  lightGreen,
  cyan,
  orange,
  grey,
  blueGrey,
} from "@material-ui/core/colors";

const colors = [
  red,
  green,
  yellow,
  pink,
  blue,
  indigo,
  purple,
  deepPurple,
  lightGreen,
  lightBlue,
  cyan,
  teal,
  lime,
  amber,
  orange,
  deepPurple,
  deepOrange,
  brown,
  grey,
  blueGrey,
  red,
  green,
  yellow,
  pink,
  blue,
  indigo,
];

const characters = [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90,
];

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (detail) => {
      const value = characters.filter((character) => {
        return String.fromCharCode(character) === detail.title[0].toUpperCase();
      });
      console.log(colors[value-65][500]);
      const val = colors[value-65][500];
      return val;
    },
  },
});

export default function DisplayCard({ detail, handleDelete }) {
  const classes = useStyles(detail);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {detail.title[0].toUpperCase()}
            </Avatar>
          }
          title={detail.title}
          subheader={detail.userId}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {detail.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
