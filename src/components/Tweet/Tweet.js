import React from "react";
import { Card, CardContent } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import moment from "moment";

import "./Tweet.scss";

export default function Tweet(props) {
  // Double destructuring
  const {
    tweet: { user, tweet, time },
    index,
    deleteTweet,
  } = props;
  // console.log(props.tweet);
  console.log(props);
  return (
    <Card className="card-tweet">
      <CardContent>
        <div className="card-tweet-header">
          <h3>{user}</h3>
          <DeleteTwoToneIcon onClick={() => deleteTweet(index)} />
        </div>
        <p className="card-tweet-paragraph">{tweet}</p>
        <div className="card-tweet-date">{moment(time).format("LLL")}</div>
      </CardContent>
    </Card>
  );
}
