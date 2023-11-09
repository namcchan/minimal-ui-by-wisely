import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, List, SelectBox, Text } from "components";
import AppRowlogo from "components/AppRowlogo";

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

const ChatDetailsCollapseNavPage: React.FC = () => {
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
          src="images/img_icon_teal_500.svg"
          alt="icon_Eight"
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
        <Img className="h-6 w-6" src="images/img_icon_5.svg" alt="icon_Nine" />
      ),
      label: <Text>Kanban</Text>,
      href: "/kanban",
      active: window.location.pathname === "/kanban",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-end mx-auto w-full">
        <AppRowlogo
          className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full"
          volume="images/img_map.svg"
          p32="32+"
          callOne="images/img_icon_teal_500.svg"
          label="Free"
          badge="1"
        />
      </div>
    </>
  );
};

export default ChatDetailsCollapseNavPage;
