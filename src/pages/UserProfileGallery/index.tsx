import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import AppRowlogo from "components/AppRowlogo";
import BlogPostBreadcrumb from "components/BlogPostBreadcrumb";
import UserProfileGalleryColumnimgcovermone from "components/UserProfileGalleryColumnimgcovermone";
import UserProfileGalleryStackimgcoverlfour from "components/UserProfileGalleryStackimgcoverlfour";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const UserProfileGalleryPage: React.FC = () => {
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
          src="images/img_checkmark_teal_500.svg"
          alt="checkmark"
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
          alt="clock"
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
  const userProfileGalleryColumnimgcovermonePropList = [
    {},
    {
      titletext: "Building a Strong Personal Brand: Tips and Strategies",
      imgcovermone: "images/img_imgcoverm2_202x270.png",
      datetext: "08 Jun 2022",
    },
    {
      titletext: "The Rise of Remote Work and its Impact on the Workforce",
      imgcovermone: "images/img_imgcoverm3_202x270.png",
      datetext: "10 Mar 2022",
    },
    {
      titletext: <>A Beginner&#39;s Guide to Investing in Stocks</>,
      imgcovermone: "images/img_imgcoverm4_202x270.png",
      datetext: "06 May 2022",
    },
    {
      titletext: "The Influence of Music on Mood and Emotions",
      imgcovermone: "images/img_imgcoverm5_202x270.png",
      datetext: "10 Sep 2022",
    },
    {
      titletext: "The Benefits of Mindfulness Meditation",
      imgcovermone: "images/img_imgcoverm6_202x270.png",
      datetext: "07 Jul 2022",
    },
    {
      titletext: "The Art of Landscape Photography: Techniques and Inspiration",
      imgcovermone: "images/img_imgcoverm7_202x270.png",
      datetext: "23 Jul 2022",
    },
    {
      titletext: "Delicious Recipes for a Vegan Diet",
      imgcovermone: "images/img_imgcoverm8.png",
      datetext: "09 Nov 2022",
    },
    {
      titletext: "Travel Photography Tips: Capturing Memories Around the World",
      imgcovermone: "images/img_imgcoverm9.png",
      datetext: "08 Jun 2022",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-publicsans h-[1440px] sm:h-auto md:h-auto mx-auto relative w-[1440px] sm:w-full md:w-full">
        <AppRowlogo
          className="absolute bg-white-A700 bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-evenly mx-auto w-full"
          user="images/img_user_teal_500.svg"
          arrowright="images/img_arrowdown_teal_500_16x16.svg"
          volume="images/img_map.svg"
          p32="32+"
          label="Free"
          badge="1"
        />
        <div className="absolute bottom-[0] flex flex-col gap-10 items-center justify-center max-w-[1160px] px-10 md:px-5 py-[88px] right-[0] w-full">
          <BlogPostBreadcrumb
            className="flex flex-col gap-2 items-center justify-start w-full"
            titleTwentyTwo="Profile"
            jobpage="User"
            listpage="Hudson Alvarez"
          />
          <UserProfileGalleryStackimgcoverlfour
            className="relative rounded-[16px] shadow-bs4 w-[1080px] md:w-full"
            favoriteicon="images/img_favorite.svg"
            followerslabel="Followers"
            starticon="images/img_iconssolidic_2.svg"
            friendslabel="Friends"
          />
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
            size="txtPublicSansBold24"
          >
            Gallery
          </Text>
          <div className="flex flex-col md:h-auto items-start justify-start w-[1080px] md:w-full">
            <div className="flex flex-col h-[1080px] md:h-auto items-center justify-start w-[1080px]">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[1080px] justify-center min-h-[auto] w-[1080px]">
                {userProfileGalleryColumnimgcovermonePropList.map(
                  (props, index) => (
                    <React.Fragment
                      key={`UserProfileGalleryColumnimgcovermone${index}`}
                    >
                      <UserProfileGalleryColumnimgcovermone
                        className="flex flex-col h-[344px] items-center justify-start rounded-[16px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileGalleryPage;
