import React from "react";
import { Row } from "react-bootstrap";
import { Theme } from "../../assets/Theme";
import { BiCaretDown } from "react-icons/bi";
import { setFilter } from "../../redux/application/actions";
import { useDispatch } from "react-redux";

export interface TableHeaderProps {
  title: string;
}

/** Table Header container */
export const TableHeader = (props: TableHeaderProps) => {
  const dispatch = useDispatch();
  return (
    <th>
      <Row
        className="align-items-center mx-0 py-2"
        onClick={() => dispatch(setFilter(props.title))}>
        <div style={styles.text}>{props.title}</div>
        <BiCaretDown className="ml-1" color={Theme.secondary} />
      </Row>
    </th>
  );
};

const styles = {
  text: {
    fontSize: 14,
    fontWeight: 600,
    color: Theme.primary,
    fontFamily: "Carme",
    opacity: 0.6,
  },
};
