export const SET_PRODUCT = "SET_PRODUCT";
export const SET_FILTER = "SET_FILTER";

/** Product type */
export interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Review[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sale[];
}

/** Review type */
export interface Review {
  customer: string;
  review: string;
  score: number;
}

/** Sale type */
export interface Sale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

/**
 * Application state
 */
export interface ApplicationState {
  product: Product | null;
  filter: string;
}

interface SetProductAction {
  type: typeof SET_PRODUCT;
  payload: Product;
}

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

export type ApplicationActionTypes = SetProductAction | SetFilterAction;
