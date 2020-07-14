import React from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";

import "./FormSendTweet.scss";

export default function FormSendTweet(props) {
  const {} = props;
  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet-title">Write your tweet</h2>
      <form className="form-send-tweet-form">
        <FormControl>
          <FormGroup>
            <TextField
              class="form-send-tweet-form-name"
              type="text"
              name="name"
              placeholder="User name"
              margin="normal"
            ></TextField>
          </FormGroup>
          <FormGroup>
            <TextField
              class="form-send-tweet-form-textarea"
              name="name"
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
