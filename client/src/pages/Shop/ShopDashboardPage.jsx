import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import ShopDashboardSidebar from "../../components/shop/Layout/ShopDashboardSidebar";
import DashBoardHero from "../../components/Shop/DashBoardHero";
const ShopDashboardPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="800px:w-[330px] w-[80px]">
          <ShopDashboardSidebar active={1} />
        </div>
        <DashBoardHero />
      </div>
    </div>
  );
};

export default ShopDashboardPage;
