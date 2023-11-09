import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import MINIAppRowlogo from "components/MINIAppRowlogo";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const actionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MINIBankingPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_iconsduotoneicecommerce.svg"
          alt="iconsduotoneice"
        />
      ),
      label: <></>,
    },
    {
      label: "E-commerce",
      href: "/ecommerce",
      active: window.location.pathname === "/ecommerce",
    },
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_iconsduotoneicanalytics.svg"
          alt="iconsduotoneica"
        />
      ),
      label: <></>,
    },
    {
      label: "Analytics",
      href: "/analytics",
      active: window.location.pathname === "/analytics",
    },
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_icon_7.svg"
          alt="iconsduotoneicb"
        />
      ),
      label: <></>,
    },
    {
      label: "Banking",
      href: "/banking",
      active: window.location.pathname === "/banking",
    },
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_icon_24x24.svg"
          alt="iconsduotoneicb_One"
        />
      ),
      label: <></>,
    },
    {
      label: "Booking",
      href: "/booking",
      active: window.location.pathname === "/booking",
    },
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_icon_1.svg"
          alt="iconsduotoneicf"
        />
      ),
      label: <></>,
    },
    {
      label: "File",
      href: "/file",
      active: window.location.pathname === "/file",
    },
  ];
  const sideBarMenu1: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_map.svg"
          alt="map"
        />
      ),
      label: <></>,
    },
    {
      label: "File manager",
      href: "/file",
      active: window.location.pathname === "/file",
    },
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_bag.svg"
          alt="bag"
        />
      ),
      label: <></>,
    },
    {
      label: "Mail",
      href: "/mail",
      active: window.location.pathname === "/mail",
    },
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_call_blue_gray_500.svg"
          alt="call_One"
        />
      ),
      label: <></>,
    },
    {
      label: "Chat",
      href: "/chat",
      active: window.location.pathname === "/chat",
    },
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_calendar.svg"
          alt="calendar"
        />
      ),
      label: <></>,
    },
    {
      label: "Calendar",
      href: "/calendar",
      active: window.location.pathname === "/calendar",
    },
    {
      icon: (
        <Img
          className="h-[22px] mb-[5px] w-[22px]"
          src="images/img_icon_5.svg"
          alt="iconsduotoneick"
        />
      ),
      label: <></>,
    },
    {
      label: "Kanban",
      href: "/kanban",
      active: window.location.pathname === "/kanban",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <MINIAppRowlogo
          className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full"
          iconsduotoneicb="images/img_icon_7.svg"
          iconsduotoneicbOne="images/img_icon_24x24.svg"
        />
      </div>
    </>
  );
};

export default MINIBankingPage;
