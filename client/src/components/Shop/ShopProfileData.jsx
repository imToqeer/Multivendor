import React, { useEffect, useState } from "react";
import ProductCard from "../Route/ProductCard/ProductCard";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
const ShopProfileData = ({ isOwner }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllProductsShop(id));
  }, [dispatch]);
  const [active, setActive] = useState(1);
  return (
    <div className="w-full">
      {/* Toggle Part  */}
      <div className="flex w-full items-center justify-between pr-[20px]">
        <div className="w-full flex">
          <div onClick={() => setActive(1)} className="flex items-center">
            <h5
              className={`${
                active == 1 ? "text-red-500" : "text-[#333]"
              } font-[600] text-[20px] cursor-pointer mr-4`}
            >
              Shop Products
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`${
                active == 2 ? "text-red-500" : "text-[#333]"
              } font-[600] text-[20px] cursor-pointer mr-4`}
            >
              Running Events
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5
              className={`${
                active == 3 ? "text-red-500" : "text-[#333]"
              } font-[600] text-[20px] cursor-pointer mr-4`}
            >
              Shop Reviews
            </h5>
          </div>
        </div>
        <div>
          <Link to="/dashboard">
            <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
              <span className="text-[#fff] capitalize">Go to Dashboard</span>
            </div>
          </Link>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
        {products &&
          products.map((i, index) => (
            <ProductCard data={i} key={index} isShop={true} />
          ))}
      </div>
    </div>
  );
};
export default ShopProfileData;
