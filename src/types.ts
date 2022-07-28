import { To } from 'react-router-dom';

export interface ProductType {
  id: number;
  desc: string;
  imgUrl: string;
  name: string;
  price: number;
  categoryId: string;
  previewImages?: string[];
}

export interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface CartType {
  changed: boolean;
  items: CartItemType[];
  totalQuantity: number;
}

export type ProductsImagesType = {
  id: number;
  imgUrl: string;
}[];

export type CheckoutType = {
  items: CartItemType[];
  totalQuantity: number;
  totalOrderPrice: number;
}[];

export interface CategoryType {
  id: string;
  name: string;
  image: string;
}

export interface NavItemType {
  link: To;
  name:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}
