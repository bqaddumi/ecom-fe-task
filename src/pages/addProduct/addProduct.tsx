import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  MenuItem,
  Select,
  SelectChangeEvent,
  Alert,
} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";
import {
  container,
  imagesContainer,
  addProductButton,
} from "./addProduct-style";
import { getCategories, getProducts, sendDataToProducts } from "../../axios";
import { ProductType, CategoryType } from "../../types";

const AddProductPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [isImage, setIsImage] = useState<boolean>(true);
  const [isValidated, setIsValidated] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [currentImage, setCurrentImage] = useState<string>("");

  const [images, setImages] = useState<string[]>([]);
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productDesc, setProductDesc] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    getProducts()
      .then((res: { data: ProductType[] }) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
    getCategories()
      .then((res: { data: CategoryType[] }) => {
        setCategories(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handleChange = (e: { target: { value: string } }) => {
    setCurrentImage(e.target.value);

      if (validateImage(e.target.value)) {
        setImages((oldState) => [...oldState, e.target.value]);
        setIsImage(true);
        setCurrentImage("");
      } else {
        setIsImage(false);
      }
    
  };

  const validateImage = (image: string) => {
    return /^(?:(?:https?:)\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/.test(
      image
    );
  };


  const handleDelete = (item: string, index: number) => {
    let arr = [...images];
    arr.splice(index, 1);
    setImages(arr);
  };

  const onCategoryIdChanged = (event: SelectChangeEvent) => {
    setCategoryId(event.target.value as string);
  };

  const onAddProductClicked = () => {
    setIsValidated(true);
    if (
      productName &&
      productDesc &&
      categoryId &&
      images.length > 0 &&
      productPrice
    ) {
      const product = {
        id: Date.now(),
        categoryId,
        desc: productDesc,
        imgUrl: images[0],
        name: productName,
        previewImages: images,
        price: parseFloat(productPrice),
      };

      sendDataToProducts([...products, product])
        .then(() => {
          setIsSubmitted(true);
          setCategoryId("c1");
          setProductName("");
          setProductPrice("");
          setProductDesc("");
          setImages([]);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 2000);
        })
        .catch((e) => {
          console.log("Error in adding product");
        });
    } else {
      setIsValidated(false);
    }
  };

  const onLogoutClicked = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box sx={container}>
      <Button onClick={onLogoutClicked}>Logout {user?.displayName} !</Button>
      <Typography variant="h3">Add Product</Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <TextField
            required
            label="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <TextField
            required
            label="Product Description"
            onChange={(e) => setProductDesc(e.target.value)}
            value={productDesc}
          />
          <TextField
            required
            type="number"
            label="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
        </Box>
        <Box sx={imagesContainer}>
          <Box>
            {images.map((item, index) => (
              <Chip
                key={index}
                size="small"
                onDelete={() => handleDelete(item, index)}
                label={item}
              />
            ))}
          </Box>
          <Box>
            <TextField
              required
              label="images Url seperated by a space"
              value={currentImage}
              onChange={handleChange}
            />
            {!isImage && (
              <Alert severity="error">Please enter an image url</Alert>
            )}
          </Box>
          <Box>
            <Select
              required
              placeholder="Chose Category.."
              value={categoryId || "c1"}
              label="Choose a category"
              onChange={onCategoryIdChanged}
            >
              {categories.map((category, index) => {
                return (
                  <MenuItem key={index} value={category.id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
        </Box>
        <Box sx={addProductButton}>
          <Button variant="contained" onClick={onAddProductClicked}>
            Add Product
          </Button>
          {!isValidated && (
            <Alert severity="error">Please fill the required fields! </Alert>
          )}
          {isSubmitted && (
            <Alert severity="success">The product created successfully!</Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AddProductPage;
