import { useEffect, useState } from "react";
import { ProductType } from "../types";
import { getProducts } from "../axios";
import { Grid, Paper } from "@mui/material";

type ShopPageProps = {};

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const [items, setItems] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((res) => {
      const items = res.data;
      setItems(items);
      setIsLoading(false);
    });
  }, []);

  return (
    <Grid sx={{ flexGrow: 2 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="start" spacing={2}>
          {items.map((item, index) => (
            <Grid key={index} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                {item.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShopPage;
