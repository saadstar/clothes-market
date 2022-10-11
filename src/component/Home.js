import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "./redux/actions";
import { ProductComponent } from "./ProductComponent";

export const Home = () => {
  const products = useSelector((state) => state.allProducts.carts);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
