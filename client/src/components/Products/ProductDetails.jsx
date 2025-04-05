import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { backend_url } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";

const ProductDetails = ({ data }) => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const [count, setCout] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(data&&data?._id));
  }, [dispatch]);
  const incrementCount = () => {
    setCout(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCout(count - 1);
    }
  };
  const handleMessageSubmit = () => {
    navigate("/inbox/conversation=50nisnr44laaus");
  };
  
  return (
    <div className="bg-[#fff] ">
      {data ? (
        <div className={` ${styles.section} w-[90%] 800px:w-[80%] `}>
          <div className="w-[100%] py-5">
            <div className="block w-full 800px:flex  ">
              {/* left Part  */}
              <div className="object-fit: cover w-full 800px:w-[50%]">
                <img
                  src={`${backend_url}/${data && data.images[select]}`}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex gap-2
                ">
                  {data &&
                    data.images.map((i, index) => (
                      <div
                        key={index}
                        className={`${
                          select === index ? "border" : ""
                        } cursor-pointer`}
                      >
                        <img
                          src={`${backend_url}/${i}`}
                          alt=""
                          className="h-[200px] overflow-hidden mr-3 mt-3"
                          onClick={() => setSelect(index)}
                        />
                      </div>
                    ))}
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  ></div>
                </div>
              </div>
              {/* right Part */}
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{`${data.description}`}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discountPrice}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.originalPrice ? data.originalPrice + "$" : null}
                  </h3>
                </div>
                {/* Quantity Handler */}
                <div className="flex items-center mt-12 justify-between pr-3 ">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-md px-4 py-2 shadow-lg hover:opacity-95 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 px-4 font-medium py-[11px] rounded-md ">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-md px-4 py-2 shadow-lg hover:opacity-95 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={20}
                        className="cursor-pointer "
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={20}
                        className="cursor-pointer "
                        onClick={() => setClick(!click)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                {/* Add to cart Button */}
                <div
                  className={`${styles.button} !rounded !mt-6 capitalize text-[#fff] font-semibold !h-11 flex items-center`}
                >
                  <span className="text-white flex items-center gap-2">
                    add to cart
                    <AiOutlineShoppingCart />
                  </span>
                </div>
                {/* Selller part */}
                <div className="flex items-center pt-8 space-x-4">
                  <Link to={`/shop/preview/${data.shop?._id}`}>
                    <img
                      className="w-[50px] h-[50px] rounded-full  mr-2"
                      src={`${backend_url}/${data?.shop?.avatar}`}
                      alt=""
                    />
                    {/* rating icons */}
                    <div className="pr-8">
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data?.shop?.name}
                      </h3>
                      <h5 className="pb-3 text-[15px]">(4/5) Ratings</h5>
                    </div>
                  </Link>

                  <div
                    className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11 capitalize`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-[#fff] flex items-center gap-2 ">
                      send message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* Product Details and more Information */}
          <ProductsDetailsInfo data={data} products={products} />
        </div>
      ) : null}
    </div>
  );
};
const ProductsDetailsInfo = ({ data, products }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded ">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[10px] leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <div className="w-full min-h-40 flex items-center justify-center">
          <h1>No Reviews Yet</h1>
        </div>
      ) : null}
      {active === 3 ? (
        <div className="w-full block 800px:flex  justify-between m p-5">
          {/* left section */}
          <div className="w-full 800px:w-[50%]">
           <Link to={`/shop/preview/${data?.shop?._id}`} >
           <div className="flex items-center">
              <img
                src={`${backend_url}/${data?.shop?.avatar}`}
                alt=""
                className="w-[50px] h-[50px] rounded-full mr-2"
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="pb-2 text-[15px] ">(4/5)Ratings</h5>
              </div>
            </div>
           </Link>
           
            <p className="pt-2">{data?.shop?.description}</p>
          </div>
          {/* right section */}
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined On:
                <span className="font-[500] text-left">
                  {data.shop?.createdAt.slice(0, 10)}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:
                <span className="font-[500] text-left">
                  {products && products.length}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews:
                <span className="font-[500] text-left">1,223</span>
              </h5>
              <Link to={`/shop/preview/${data?.shop._id}`}>
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ProductDetails;
