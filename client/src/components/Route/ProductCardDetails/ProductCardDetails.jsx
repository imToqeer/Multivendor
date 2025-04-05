import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { backend_url } from "../../../server";

const ProductCardDetails = ({ setOpens, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);
  const handleMessageSubmit = () => {
    console.log("Done!");
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#000] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpens(false)}
            />
            {/* Main Container */}
            <div className="block w-full 800px:flex overflow-hidden">
              {/* Left Container */}
              <div className="w-full 800px:w-[50%]">
                {data.images && data.images[0] && (
                  <img
                    src={`${backend_url}/${data.images[0]}`}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                )}

                <div className="flex ">
                  {data.shop && data.shop.avatar && (
                    <img
                      src={`${backend_url}/${data.shop.avatar}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  )}
                  {/* Ratings to Product */}
                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px] ">
                      ({data?.shop?.ratings}) Ratings
                    </h5>
                  </div>
                </div>
                <div
                  className={`${styles.button}  bg-[#000000] mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff]  flex items-center ">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
                <h5 className="text-16px text-red-600 mt-5">
                  {`${data.sold_out}`} sold Out
                </h5>
              </div>
              {/* Right Container */}
              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]  ">
                <h1 className={`${styles.productTitle} text-[20px] `}>
                  {data.name}
                </h1>
                <p>{data.description}</p>
                <div className="flex pt-3 ">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discountPrice}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
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
                  {/* Heart icon */}
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

                <div
                  className={`${styles.button}  bg-[#000000] mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff]  flex items-center ">
                    Add to Cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductCardDetails;
