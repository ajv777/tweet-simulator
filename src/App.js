import React, { useState, useEffect } from "react";
import { Container, Snackbar } from "@material-ui/core";

import Header from "./components/Headers";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";
import { TWEETS_STORAGE } from "./utils/constants";

function App() {
  // Send by props to SendTweet component
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });
  // Get all tweets from LocalStorage
  const [allTweets, setAllTweets] = useState([]);

  //Reload page when delete a tweet
  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const allTweetsArray = JSON.parse(localStorage.getItem(TWEETS_STORAGE));
    setAllTweets(allTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets]);

  // Delete tweet
  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };

  // Get all tweets and send to ListTweets by props
  console.log("get all tweets:", allTweets);

  return (
    <Container className="tweets-simulator" max-width="false">
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-toast">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
