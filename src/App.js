import React from "react";
import { Container, Snakbar } from "@material-ui/core";
import Header from "./components/Headers";

function App() {
  return (
    <Container className="tweets-simulator" max-width="false">
      <Header></Header>
    </Container>
  );
}

export default App;
