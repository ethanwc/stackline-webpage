import React from "react";
import { Theme } from "../../assets/Theme";

export interface TagProps {
  title: string;
}

/** Tag Container */
export const Tag = (props: TagProps) => {
  return (
    <div
      className="d-inline-flex border px-4 py-1 mx-1 my-2 rounded"
      style={styles.title}
    >
      {props.title}
    </div>
  );
};

const styles = {
  title: {
    fontSize: 14,
    fontWeight: 400,
    color: Theme.secondary,
    fontFamily: "Carme",
  },
};
