import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/style";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import { all } from "axios";
const BestSelling = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.totalSell - all.totalSell);
    setData(d);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data &&
            data.map((i, index) => {
              return <ProductCard data={i} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default BestSelling;
