import React from "react";
import { Col, Row } from "react-bootstrap";
import { Theme } from "../../assets/Theme";
import { Product } from "../../redux/application/types";
import { Tag } from "./Tag";

export interface ProductCardProps {
  product: Product;
}
/** Product card */
export const ProductCard = (props: ProductCardProps) => {
  return (
    <Row>
      <Col>
        {/* Product image */}
        <div className="d-flex justify-content-center p-4">
          <img src={props.product.image} style={styles.image} />
        </div>
        {/* Product title */}
        <div style={styles.title} className="px-5 mb-1 text-center">
          {props.product.title}
        </div>
        {/* Product description */}
        <div style={styles.description} className="px-5 mx-5 pb-3 text-center">
          {props.product.subtitle}
        </div>
        <div style={styles.line} />

        {/* Product tags */}
        <div className="px-3 py-2">
          {props.product.tags.map((item: string) => {
            return <Tag title={item} />;
          })}
        </div>
        <div style={styles.line} />
      </Col>
    </Row>
  );
};

const styles = {
  line: {
    borderBottom: "1px solid",
    borderColor: Theme.background,
  },
  image: {
    width: "50%",
    height: "50%",
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    color: Theme.primary,
    fontFamily: "Carme",
  },
  description: {
    fontSize: 16,
    fontWeight: 600,
    color: Theme.secondary,
    opacity: 0.6,
    fontFamily: "Carme",
  },
};
