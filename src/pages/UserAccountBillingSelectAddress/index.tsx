import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import AppRowlogo from "components/AppRowlogo";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const stackOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const stackOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const UserAccountBillingSelectAddressPage: React.FC = () => {
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
      label: "Profile",
      href: "/file",
      active: window.location.pathname === "/file",
    },
    {
      icon: (
        <Img
          className="h-6 w-10"
          src="images/img_clock_blue_gray_500_24x40.svg"
          alt="clock_One"
        />
      ),
      label: "Cards",
      href: "/usercards",
      active: window.location.pathname === "/usercards",
    },
    {
      icon: (
        <Img
          className="h-6 w-10"
          src="images/img_clock_blue_gray_500_24x40.svg"
          alt="clock_Two"
        />
      ),
      label: "List",
      href: "/productlist",
      active: window.location.pathname === "/productlist",
    },
    {
      icon: (
        <Img
          className="h-6 w-10"
          src="images/img_clock_blue_gray_500_24x40.svg"
          alt="clock_Three"
        />
      ),
      label: "Create",
      href: "/invoicecreate",
      active: window.location.pathname === "/invoicecreate",
    },
    {
      icon: (
        <Img
          className="h-6 w-10"
          src="images/img_clock_blue_gray_500_24x40.svg"
          alt="clock_Four"
        />
      ),
      label: "Edit",
      href: "/calendaraddeditevent",
      active: window.location.pathname === "/calendaraddeditevent",
    },
    {
      icon: (
        <Img
          className="h-6 w-10"
          src="images/img_checkmark_teal_500.svg"
          alt="checkmark"
        />
      ),
      label: "Account",
      href: "/useraccount",
      active: window.location.pathname === "/useraccount",
    },
  ];
  const [wrapvalue, setWrapvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-end mx-auto w-full">
        <AppRowlogo
          className="bg-white-A700 h-[1900px] md:h-[5170px] md:px-5 relative w-full"
          user="images/img_user_teal_500.svg"
          arrowright="images/img_arrowdown_teal_500_16x16.svg"
          volume="images/img_map.svg"
          p32="32+"
          label="Free"
          badge="1"
        />
      </div>
    </>
  );
};

export default UserAccountBillingSelectAddressPage;
