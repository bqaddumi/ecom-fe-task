export type ProductType = {
  id: number;
  desc: string;
  imgUrl: string;
  name: string;
  price: number;
  categoryId: string;
};

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

export type CartType = {
  changed: boolean;
  items: CartItemType[];
  totalQuantity: number;
};

export type ProductsImagesType = {
  id: number;
  imgUrl: string;
}[];

export type CheckoutType = {
  items: CartItemType[];
  totalQuantity: number;
  totalOrderPrice: number;
}[];

export type CategoryType = {
  id: string;
  name: string;
  image: string;
};
