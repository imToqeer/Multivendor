import axios from "axios";
import { server } from "../../server";
//create all products
export const createProduct = (
  name,
  description,
  category,
  tags,
  originalPrice,
  discountPrice,
  stock,
  shopId,
  images
) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });
    const { data } = await axios.post(
      `${server}/product/create-product`,
      name,
      description,
      category,
      tags,
      originalPrice,
      discountPrice,
      stock,
      shopId,
      images
    );
    dispatch({
      type: "productCreateSuccess",
      payload: data?.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response?.data.message,
    });
  }
};
//get all shop products
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );

    dispatch({
      type: "getAllProductsShopSuccess",
      payload: data?.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsShopFailed",
      payload:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong",
    });
  }
};
//delete all products
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });
    axios.delete(`${server}/product/delete-shop-product/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "deleteProductSuccess",
      payload: data?.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response.data?.message,
    });
  }
};
//get all  products general
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({
      type: "getAllProductsSuccess",
      payload: data?.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsFailed",
      payload: error.response?.data.message,
    });
  }
};
