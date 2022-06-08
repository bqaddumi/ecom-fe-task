import { useEffect, useState } from "react";
import Itemtype from "../types";
import { getProducts } from "../axios";

type ShopPageProps = {};

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const [items, setItems] = useState<Itemtype[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts().then((res) => {
      const items = res.data;
      console.log(res);
      setItems(items);
      setIsLoading(false);
    });
  }, []);
  console.log("state", items);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div>{item.name}</div>
        ))}
      </ul>
    </div>
  );
};

export default ShopPage;
