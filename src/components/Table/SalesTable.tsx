import React from "react";
import { Spinner, Table } from "react-bootstrap";
import { TableRow } from "./TableRow";
import { Product, Sale } from "../../redux/application/types";
import { TableHeader } from "./TableHeader";
import { Theme } from "../../assets/Theme";

/** Table headers */
const HEADERS = [
  "WEEK ENDING",
  "RETAIL SALES",
  "WHOLESALE SALES",
  "UNITS SOLD",
  "RETAILER MARGIN",
];

export interface SalesTableProps {
  product: Product;
  filter: string;
}
/** Sales table component */
export const SalesTable = (props: SalesTableProps) => {
  if (!props.product)
    return (
      <Spinner animation="border" role="status" color="red">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  /** Sort data based upon filter */
  let DATA = props.product.sales;
  switch (props.filter) {
    case "WEEK ENDING": {
      DATA.sort((s1: Sale, s2: Sale) => {
        return s1.weekEnding.localeCompare(s2.weekEnding);
      });
      break;
    }
    case "RETAIL SALES": {
      DATA.sort((s1: Sale, s2: Sale) => {
        return s1.retailSales - s2.retailSales;
      });
      break;
    }
    case "WHOLESALE SALES": {
      DATA.sort((s1: Sale, s2: Sale) => {
        return s1.wholesaleSales - s2.wholesaleSales;
      });
      break;
    }
    case "UNITS SOLD": {
      DATA.sort((s1: Sale, s2: Sale) => {
        return s1.unitsSold - s2.unitsSold;
      });
      break;
    }
    case "RETAILER MARGIN": {
      DATA.sort((s1: Sale, s2: Sale) => {
        return s1.retailerMargin - s2.retailerMargin;
      });
      break;
    }
  }

  return (
    <div
      className="mx-2 flex-grow-1 shadow rounded"
      style={{ backgroundColor: Theme.card }}
    >
      <Table hover borderless>
        {/* render header */}
        <thead>
          <tr style={styles.row}>
            {HEADERS.map((item: string) => {
              return <TableHeader title={item} />;
            })}
          </tr>
        </thead>
        <tbody>
          {/* render rows */}
          {DATA.map((item: Sale) => {
            return <TableRow sale={item} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

const styles = {
  row: {
    borderBottom: "1px solid",
    borderColor: Theme.background,
  },
};
