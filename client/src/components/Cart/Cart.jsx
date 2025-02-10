import React from "react";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/style";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const CartData = [
    {
      name: "Iphone 14 Pro Max 256GB SSD and 8GB RAM",
      description:
        "The latest iPhone with advanced features and high performance.",
      price: "$1099",
      image_Url:
        "https://islamicmart.com.pk/cdn/shop/files/ReadQuranChargeyourimanBrown_823x_953bc26d-2ad9-4c74-973e-cca68b66e571@2x.jpg?v=1708059890",
    },
    {
      name: "Samsung Galaxy S23 Ultra 512GB SSD and 12GB RAM",
      description:
        "A premium smartphone with a stunning display and exceptional camera performance.",
      price: "$1199",
      image_Url:
        "https://www.bpmcdn.com/f/files/peacearch/import/2019-11/19401729_web1_191115-BPD-M-2019-Chevrolet-Blazer-049.jpeg;w=480;h=320;mode=crop",
    },
    {
      name: "Google Pixel 8 Pro 256GB SSD and 8GB RAM",
      description:
        "Experience the purest Android experience with exceptional camera quality and AI features.",
      price: "$999",
      image_Url:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/153099/harleydavidson-x440-right-front-three-quarter1.jpeg?isig=0&q=80",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 m-h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5 ">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Items Length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>
          {/* Card Single Items */}
          <br />
          <div className="w-full border-t ">
            {CartData &&
              CartData.map((item, index) => (
                <CartSingle key={index} item={item} />
              ))}
          </div>
        </div>
        <div className="px-5 mb-3 ">
          {/* Checkout buttons */}
          <Link
            to="/checkout"
            className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
          >
            <h1 className="text-[#fff] text-[20px] font-[500] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]">
              CheckOut Now USD$1080
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ item }) => {
  const [value, setValue] = useState(1);
  const totalPrice = item.price * value;
  return (
    <div className="border-b p-4 ">
      <div className="w-full flex  items-center">
        {/* Quantity Controls */}
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px]  ${styles.noramlFlex}  justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={20} className="text-[#fff]" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={16} className="text-[#7d879d]" />
          </div>
        </div>
        {/* Product Image */}
        <img
          className="w-[80px] h-[80px] ml-2"
          src={item.image_Url}
          alt="Static Product"
        />
        <div className="pl-[5px]">
          <h1>{item.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#000]">
            $${item.price}*{value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[13px] text-[red] font-Roboto">
            US$ {totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Cart;
