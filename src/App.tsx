import React from "react";
import styled from "styled-components";
import Writer from "./components/Writer";
import Footer from "./components/Footer";

const Main = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
`;

function App() {
  return (
    <Main>
      <Writer />
      <Footer />
    </Main>
  );
}

export default App;
