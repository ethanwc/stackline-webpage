import React from "react";
import "./App.css";
import { ProductPage } from "./components/Product/ProductPage";
import { Theme } from "./assets/Theme";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid style={{ backgroundColor: Theme.background }}>
      <ProductPage />
    </Container>
  );
}

export default App;
