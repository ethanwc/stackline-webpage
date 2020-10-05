import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Spinner } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import { getProduct } from "../../redux/application/actions";
import { Theme } from "../../assets/Theme";
import { SalesGraph } from "../Graph/SalesGraph";
import { PageMenu } from "../PageMenu";
import { SalesTable } from "../Table/SalesTable";
import { ProductCard } from "./ProductCard";
import { ApplicationState, Product } from "../../redux/application/types";
import { LogoBar } from "../Menu/LogoBar";

/** Product display consisting of: card, menu, graph, and table */
export const ProductPage = () => {
  const dispatch = useDispatch();

  /** Mock API call */
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  /** Product information */
  const product: Product | null = useSelector(
    (state: ApplicationState) => state.product
  );

  /** Active filter information */
  const filter: string = useSelector((state: ApplicationState) => state.filter);

  if (!product)
    return (
      <Spinner animation="border" role="status" color={Theme.highlight}>
        <span className="sr-only">Loading Product</span>
      </Spinner>
    );

  return (
    <div>
      {/* Stackline logo */}
      <LogoBar />

      <Row className="p-2">
        {/* Card and menu */}
        <Col md={3} className="p-0 d-flex flex-column">
          <div
            style={{ backgroundColor: Theme.card }}
            className="mx-2 flex-grow-1 shadow rounded"
          >
            <ProductCard product={product} />
            <PageMenu />
          </div>
        </Col>
        {/* Graph and table */}
        <Col md={9} className="p-0">
          <SalesGraph product={product} />
          <SalesTable product={product} filter={filter} />
        </Col>
      </Row>
    </div>
  );
};
