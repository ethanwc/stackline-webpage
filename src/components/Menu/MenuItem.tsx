import React from "react";
import { Row } from "react-bootstrap";
import { Theme } from "../../assets/Theme";

export interface MenuItemProps {
  icon: any;
  name: string;
  isActive: boolean;
}

/** Menu items */
export const MenuItem = (props: MenuItemProps) => {
  return (
    <Row className="p-3 align-items-center">
      <div className="mr-3">{props.icon}</div>
      <div style={props.isActive ? styles.titleActive : styles.title}>
        {props.name}
      </div>
    </Row>
  );
};

const styles = {
  titleActive: {
    fontSize: 18,
    fontWeight: 600,
    color: Theme.primary,
    fontFamily: "Carme",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: Theme.secondary,
    fontFamily: "Carme",
  },
};
