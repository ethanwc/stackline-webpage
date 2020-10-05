import React from "react";
import { Theme } from "../../assets/Theme";
import { Product } from "../../redux/application/types";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Row } from "react-bootstrap";

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export interface SalesGraphProps {
  product: Product;
}
/** Minimal graph component */
export const SalesGraph = (props: SalesGraphProps) => {
  return (
    <div
      className="mx-2 flex-grow-1 shadow rounded"
      style={{ backgroundColor: Theme.card }}
    >
      <div className="p-4" style={styles.title}>
        Retail Sales
      </div>
      <div className="flex-grow-1" style={{ height: 500 }}>
        <ResponsiveContainer>
          <AreaChart
            data={props.product.sales}
            margin={{
              top: 150,
              right: 25,
              left: 25,
              bottom: 150,
            }}
          >
            <Area
              type="monotone"
              dataKey="retailerMargin"
              stackId="1"
              strokeWidth={4}
              stroke={Theme.primary}
              fill={Theme.card}
            />
            <Area
              type="monotone"
              dataKey="retailSales"
              stackId="1"
              strokeWidth={4}
              stroke={Theme.highlight}
              fill={Theme.card}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div style={styles.line} />
      {/* Month labels */}
      <div className="flex-grow-1 mb-5">
        <Row className="p-3 justify-content-around">
          {MONTHS.map((item: string) => {
            return <div style={styles.month}>{item}</div>;
          })}
        </Row>
      </div>
    </div>
  );
};

const styles = {
  line: {
    borderBottom: "1px solid",
    borderColor: Theme.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: Theme.primary,
    fontFamily: "Carme",
    opacity: 0.6,
  },
  month: {
    fontSize: 16,
    fontWeight: 200,
    color: Theme.primary,
    fontFamily: "Carme",
    opacity: 0.4,
  },
};
