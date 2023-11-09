import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, List, RatingBar, Text } from "components";
import AppRowlogo from "components/AppRowlogo";
import ProductDetailsProductdetails from "components/ProductDetailsProductdetails";
import ProductDetailsProductvalues from "components/ProductDetailsProductvalues";
import ProductDetailsTabs from "components/ProductDetailsTabs";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const ProductDetailsPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_dashboard_blue_gray_500.svg"
          alt="dashboard"
        />
      ),
      label: "App",
      href: "/app",
      active: window.location.pathname === "/app",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_icon_blue_gray_300.svg"
          alt="icon"
        />
      ),
      label: "E-commerce",
      href: "/ecommerce",
      active: window.location.pathname === "/ecommerce",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_icon_blue_gray_300_24x24.svg"
          alt="icon_One"
        />
      ),
      label: "Analytics",
      href: "/analytics",
      active: window.location.pathname === "/analytics",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_icon_blue_gray_500_24x24.svg"
          alt="icon_Two"
        />
      ),
      label: "Banking",
      href: "/banking",
      active: window.location.pathname === "/banking",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_icon_24x24.svg"
          alt="icon_Three"
        />
      ),
      label: "Booking",
      href: "/booking",
      active: window.location.pathname === "/booking",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_icon_1.svg" alt="icon_Four" />
      ),
      label: "File",
      href: "/file",
      active: window.location.pathname === "/file",
    },
  ];
  const sideBarMenu1: SideBarMenuType = [
    {
      icon: (
        <Img className="h-6 mb-0.5 w-6" src="images/img_map.svg" alt="map" />
      ),
      label: <Text>File Manager</Text>,
      href: "/file",
      active: window.location.pathname === "/file",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_bag.svg" alt="bag" />,
      label: (
        <>
          <Text>Mail</Text>
          <Button className="bg-deep_orange-500_28 cursor-pointer font-bold h-6 min-w-[35px] py-1 rounded-md text-center text-red-900 text-xs">
            32+
          </Button>
        </>
      ),
      href: "/mail",
      active: window.location.pathname === "/mail",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_call_blue_gray_500.svg"
          alt="call_One"
        />
      ),
      label: <Text>Chat</Text>,
      href: "/chat",
      active: window.location.pathname === "/chat",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_calendar.svg" alt="calendar" />
      ),
      label: <Text>Calendar</Text>,
      href: "/calendar",
      active: window.location.pathname === "/calendar",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_icon_5.svg" alt="icon_Eight" />
      ),
      label: <Text>Kanban</Text>,
      href: "/kanban",
      active: window.location.pathname === "/kanban",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-publicsans h-[1800px] mx-auto relative w-full">
        <AppRowlogo
          className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full"
          iconFive="images/img_icon_11.svg"
          arrowrightOne="images/img_arrowdown_teal_500_16x16.svg"
          volume="images/img_map.svg"
          p32="32+"
          label="Free"
          badge="1"
        />
        <div className="absolute bottom-[0] flex flex-col gap-10 items-center justify-center max-w-[1160px] px-10 md:px-5 py-[88px] right-[0] w-full">
          <div className="flex flex-col gap-10 items-center justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-end w-full">
              <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-2 rounded-lg w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansBold14"
                >
                  Back
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-3 grid grid-cols-2 w-[5%]"
                orientation="horizontal"
              >
                <div className="flex flex-col h-9 md:h-auto items-center justify-center rounded-[10px] w-auto">
                  <Img
                    className="h-5 rounded-tl-[50%] rounded-tr-[50%] w-5"
                    src="images/img_iconssolidic_blue_gray_500_20x20.svg"
                    alt="iconssolidic"
                  />
                </div>
                <div className="flex flex-col h-9 md:h-auto items-center justify-center rounded-[10px] w-auto">
                  <Img
                    className="h-5 rounded-tl-[50%] rounded-tr-[50%] w-5"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                </div>
              </List>
              <Button
                className="cursor-pointer flex h-9 items-center justify-center min-w-[119px]"
                rightIcon={
                  <Img
                    className="h-5 ml-2"
                    src="images/img_arrowdown_white_a700.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="blue_gray_900"
                size="md"
                variant="fill"
              >
                <div className="font-bold text-center text-sm">Published</div>
              </Button>
            </div>
            <ProductDetailsProductdetails className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-full" />
          </div>
          <ProductDetailsProductvalues className="md:h-[199px] h-[204px] py-10 relative w-full" />
          <div className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-full">
            <ProductDetailsTabs
              className="sm:px-5 px-6 relative w-full"
              userdescription="Description"
            />
            <div className="flex flex-col gap-10 items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-lg w-full"
                  size="txtPublicSansBold18Bluegray900"
                >
                  Specifications
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    Category
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    Shoes
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    Manufacturer
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    Nike
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    Serial number
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    358607726380311
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    Ships From
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    United States
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-lg w-full"
                  size="txtPublicSansBold18Bluegray900"
                >
                  Product Details
                </Text>
                <Text
                  className="leading-[22.00px] text-blue_gray-900 text-sm"
                  size="txtPublicSansRegular14"
                >
                  <>
                    The foam sockliner feels soft and comfortable
                    <br />
                    Pull tab
                    <br />
                    Not intended for use as Personal Protective Equipment
                    <br />
                    Colour Shown: White/Black/Oxygen Purple/Action Grape
                    <br />
                    Style: 921826-109
                    <br />
                    Country/Region of Origin: China
                  </>
                </Text>
                <Text
                  className="text-blue_gray-900 text-lg w-full"
                  size="txtPublicSansBold18Bluegray900"
                >
                  Benefits
                </Text>
                <Text
                  className="leading-[22.00px] text-blue_gray-900 text-sm"
                  size="txtPublicSansRegular14"
                >
                  <>
                    Mesh and synthetic materials on the upper keep the fluid
                    look of the OG while adding comfort and durability.
                    <br />
                    Originally designed for performance running, the full-length
                    Max Air unit adds soft, comfortable cushioning underfoot.
                    <br />
                    The foam midsole feels springy and soft.
                    <br />
                    The rubber outsole adds traction and durability.
                  </>
                </Text>
                <Text
                  className="text-blue_gray-900 text-lg w-full"
                  size="txtPublicSansBold18Bluegray900"
                >
                  Delivery and Returns
                </Text>
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansRegular14"
                >
                  Your order of $200 or more gets free standard delivery.
                </Text>
                <Text
                  className="leading-[22.00px] text-blue_gray-900 text-sm"
                  size="txtPublicSansRegular14"
                >
                  <>
                    Standard delivered 4-5 Business Days <br />
                    Express delivered 2-4 Business Days
                  </>
                </Text>
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansRegular14"
                >
                  Orders are processed and delivered Monday-Friday (excluding
                  public holidays)
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
