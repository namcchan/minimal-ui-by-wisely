import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import AppRowlogo from "components/AppRowlogo";
import BlogPostBreadcrumb from "components/BlogPostBreadcrumb";
import UserCardsColumnimgcovermone from "components/UserCardsColumnimgcovermone";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const UserCardsPage: React.FC = () => {
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
          src="images/img_checkmark_teal_500.svg"
          alt="checkmark"
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
          alt="clock_One"
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
          alt="clock_Two"
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
          alt="clock_Three"
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
          src="images/img_clock_blue_gray_500_24x40.svg"
          alt="clock_Four"
        />
      ),
      label: "Account",
      href: "/useraccount",
      active: window.location.pathname === "/useraccount",
    },
  ];
  const userCardsColumnimgcovermonePropList = [
    {},
    {
      followercount: "41.3k",
      totalpostcount: "86.6k",
      followingcount: "85.k",
      userimage: "images/img_imgcoverm2_202x270.png",
    },
    {
      followercount: "73.8k",
      totalpostcount: "46.9k",
      followingcount: "8.2k",
      userimage: "images/img_imgcoverm3_202x270.png",
    },
    {
      followercount: "87.1k",
      totalpostcount: "34.9k",
      followingcount: "50.1k",
      userimage: "images/img_imgcoverm4_202x270.png",
    },
    {
      followercount: "25.k",
      totalpostcount: "46.9k",
      followingcount: "88.4k",
      userimage: "images/img_imgcoverm5_202x270.png",
    },
    {
      followercount: "24.4k",
      totalpostcount: "39.4k",
      followingcount: "92.3k",
      userimage: "images/img_imgcoverm6_202x270.png",
    },
    {
      followercount: "50.1k",
      totalpostcount: "34.5k",
      followingcount: "87.1k",
      userimage: "images/img_imgcoverm7_202x270.png",
    },
    {
      followercount: "25.k",
      totalpostcount: "47.9k",
      followingcount: "63.1k",
      userimage: "images/img_imgcoverm8.png",
    },
    {
      followercount: "38.4k",
      totalpostcount: "88.4k",
      followingcount: "58.9k",
      userimage: "images/img_imgcoverm9.png",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-publicsans h-[1600px] mx-auto relative w-full">
        <AppRowlogo
          className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full"
          user="images/img_user_teal_500.svg"
          arrowright="images/img_arrowdown_teal_500_16x16.svg"
          volume="images/img_map.svg"
          p32="32+"
          label="Free"
          badge="1"
        />
        <div className="absolute bottom-[0] flex flex-col gap-10 items-center justify-center max-w-[1160px] px-10 md:px-5 py-[88px] right-[0] w-full">
          <BlogPostBreadcrumb
            className="flex md:flex-col flex-row gap-2 items-center justify-start w-full"
            titleTwentyTwo="Cards"
            jobpage="User"
            listpage="Cards"
          />
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {userCardsColumnimgcovermonePropList.map((props, index) => (
                  <React.Fragment key={`UserCardsColumnimgcovermone${index}`}>
                    <UserCardsColumnimgcovermone
                      className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[16px] shadow-bs4 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCardsPage;
