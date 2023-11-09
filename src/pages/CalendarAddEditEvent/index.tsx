import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import {
  Button,
  FloatingInput,
  Img,
  Input,
  List,
  Text,
  TextArea,
} from "components";
import AppRowlogo from "components/AppRowlogo";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const CalendarAddEditEventPage: React.FC = () => {
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
        <Img
          className="h-6 w-6"
          src="images/img_calendar_teal_500.svg"
          alt="calendar"
        />
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
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-end mx-auto w-full">
        <AppRowlogo
          className="bg-white-A700 h-[1600px] md:h-[6241px] md:px-5 relative w-full"
          volume="images/img_map.svg"
          p32="32+"
          calendar="images/img_calendar_teal_500.svg"
          label="Free"
          badge="1"
        />
      </div>
    </>
  );
};

export default CalendarAddEditEventPage;
