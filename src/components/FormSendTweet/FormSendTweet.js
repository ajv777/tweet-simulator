import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";

import "./FormSendTweet.scss";

export default function FormSendTweet(props) {
  // From SendTweet component
  const { sendTweet } = props;

  // Hook useState (1º parameter state, 2º parameter the function that update the state)
  const [formValue, setFormValue] = useState({
    user: "",
    tweet: "",
  });

  //Update form (the same "name" in form and useState, "user" and "tweet")
  const onFormChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet-title">Write your tweet</h2>
      <form
        className="form-send-tweet-form"
        onSubmit={(event) => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet-form-name"
              type="text"
              name="user"
              placeholder="User name"
              margin="normal"
            ></TextField>
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet-form-textarea"
              name="tweet"
              rows="7"
              multiline
              placeholder="what do you want to say?"
              margin="normal"
            ></TextField>
          </FormGroup>
          <FormGroup>
            <Button type="submit">Send tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
