export interface ProductInterface {
  id: string;
  name: string;
  price: number;
  image: string;
  added?: boolean;
  quantity?: number;
}

export interface ChangeQuantityInterface {
  id: string;
  quantity: number
}

export interface RoutesInterface {
  current: string;
  history: string;
}

export interface StateInterface {
  products: ProductInterface[],
  shoppingCart: Array<ProductInterface>,
  filteredItems: Array<ProductInterface>,
}

export interface ActionInterface{
  type: string;
  payload: unknown;
}