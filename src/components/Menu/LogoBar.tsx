import React from "react";
import { Theme } from "../../assets/Theme";
import logo from "../../assets/stackline_logo.png";
import Row from "react-bootstrap/Row";

export const LogoBar = () => {
  return (
    <Row style={styles.container} className="p-3 mb-5">
      <img src={logo} style={styles.image} />
    </Row>
  );
};

const styles = {
  container: {
    backgroundColor: Theme.card,
  },
  image: {
    width: "8%",
    height: "8%",
  },
};
