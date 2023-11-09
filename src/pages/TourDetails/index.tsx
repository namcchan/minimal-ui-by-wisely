import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";
import AppRowlogo from "components/AppRowlogo";
import ProductDetailsTabs from "components/ProductDetailsTabs";
import TourDetailsColumncountry from "components/TourDetailsColumncountry";
import TourDetailsRowimgtravelsone from "components/TourDetailsRowimgtravelsone";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const TourDetailsPage: React.FC = () => {
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
        <Img
          className="h-6 w-10"
          src="images/img_clock_blue_gray_500_24x40.svg"
          alt="clock"
        />
      ),
      label: <Text>List</Text>,
      href: "/productlist",
      active: window.location.pathname === "/productlist",
    },
    {
      icon: (
        <Img
          className="h-6 w-10"
          src="images/img_checkmark_teal_500.svg"
          alt="checkmark"
        />
      ),
      label: <Text className="font-semibold text-blue_gray-900">Details</Text>,
      href: "/kanbantaskdetails",
      active: window.location.pathname === "/kanbantaskdetails",
    },
    {
      icon: (
        <Img
          className="h-6 w-10"
          src="images/img_clock_blue_gray_500_24x40.svg"
          alt="clock_One"
        />
      ),
      label: <Text>Create</Text>,
      href: "/invoicecreate",
      active: window.location.pathname === "/invoicecreate",
    },
    {
      icon: (
        <Img
          className="h-6 w-10"
          src="images/img_clock_blue_gray_500_24x40.svg"
          alt="clock_Two"
        />
      ),
      label: <Text>Edit</Text>,
      href: "/calendaraddeditevent",
      active: window.location.pathname === "/calendaraddeditevent",
    },
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
      <div className="bg-white-A700 font-publicsans h-[2300px] mx-auto relative w-full">
        <AppRowlogo
          className="absolute bg-white-A700 bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-evenly mx-auto w-full"
          iconSeven="images/img_icon_13.svg"
          arrowrightSix="images/img_arrowdown_teal_500_16x16.svg"
          volume="images/img_map.svg"
          p32="32+"
          label="Free"
          badge="1"
        />
        <div className="absolute bottom-[0] flex flex-col gap-10 items-center justify-center max-w-[1160px] px-10 md:px-5 py-[88px] right-[0] w-full">
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
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[80px]"
              leftIcon={
                <Img
                  className="h-5 mr-2"
                  src="images/img_edit_blue_gray_900.svg"
                  alt="edit"
                />
              }
              shape="round"
              color="blue_gray_300_51"
              size="md"
              variant="outline"
            >
              <div className="font-bold text-center text-sm">Edit</div>
            </Button>
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
          <ProductDetailsTabs
            className="flex flex-row gap-10 items-center justify-start w-full"
            userreviews="Booker"
          />
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <TourDetailsRowimgtravelsone className="flex md:flex-col flex-row gap-2 items-start justify-start max-w-[1080px] w-full" />
            <TourDetailsColumncountry
              className="bg-white-A700 flex flex-col gap-10 items-center justify-start w-[587px] sm:w-full"
              languageOne={
                <Text className="font-semibold text-blue_gray-900 text-center text-sm w-auto">
                  <span className="text-blue_gray-900 font-publicsans">
                    {" "}
                    Kevin Francis,{" "}
                  </span>
                  <span className="text-blue_gray-900 font-publicsans">
                    {" "}
                    Lucian Obrien
                  </span>
                </Text>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetailsPage;
