export type ProductType = {
  id: number;
  desc: "string";
  imgUrl: string;
  name: string;
  price: number;
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
