import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";

import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";
import "./SendTweet.scss";
import { TWEETS_STORAGE } from "../../utils/constants";

export default function SendTweet(props) {
  // Props from App.js
  const { setToastProps, allTweets } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  // Send by props to FormSendTweet component
  const sendTweet = (event, formValue) => {
    event.preventDefault();
    // console.log("Tweet has been send");
    // console.log("Form value:", formValue);
    const { user, tweet } = formValue;
    let allTweetsArray = [];

    if (allTweets) {
      allTweetsArray = allTweets;
    }

    if (!user || !tweet) {
      // console.log("Warning: all fields are required");
      setToastProps({
        open: true,
        text: "Warning: all fields are required",
      });
    } else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      // setItem (key, value)
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      // console.log("Tweet send successfully");
      setToastProps({
        open: true,
        text: "Tweet send successfully",
      });
      closeModal();
    }
    // clean form after send
    allTweetsArray = [];
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet-open-modal"
        aria-label="add"
        color="primary"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet}></FormSendTweet>
      </ModalContainer>
    </div>
  );
}
