import React from "react";
import { Container, Snakbar } from "@material-ui/core";
import Header from "./components/Headers";
import SendTweet from "./components/SendTweet";

function App() {
  return (
    <Container className="tweets-simulator" max-width="false">
      <Header />
      <SendTweet />
    </Container>
  );
}

export default App;
