import React from "react";
import { Sale } from "../../redux/application/types";
import { Theme } from "../../assets/Theme";

export interface TableRowProps {
  sale: Sale;
}

/** Quantify number */
const quantify = (n: number) => {
  return Number(n.toFixed(0)).toLocaleString();
};

/** Table Row container */
export const TableRow = (props: TableRowProps) => {
  return (
    <tr style={styles.row}>
      <td style={styles.text}>{props.sale.weekEnding}</td>
      <td style={styles.text}>${quantify(props.sale.retailSales)}</td>
      <td style={styles.text}>${quantify(props.sale.wholesaleSales)}</td>
      <td style={styles.text}>{props.sale.unitsSold}</td>
      <td style={styles.text}>${quantify(props.sale.retailerMargin)}</td>
    </tr>
  );
};

const styles = {
  row: {
    borderBottom: "1px solid",
    borderColor: Theme.background,
  },
  text: {
    fontSize: 14,
    fontWeight: 200,
    opacity: 0.3,
    fontFamily: "carme",
  },
};
