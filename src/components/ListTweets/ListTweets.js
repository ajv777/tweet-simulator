import React from "react";
import { Grid } from "@material-ui/core";

import Tweet from "../Tweet";

import "./ListTweets.scss";

export default function ListTweets(props) {
  const { allTweets } = props;
  // console.log(allTweets);

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h3> The list is empty, add a new tweet below </h3>
      </div>
    );
  }

  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          <Tweet tweet={tweet} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}
