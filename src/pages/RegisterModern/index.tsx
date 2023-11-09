import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const RegisterModernPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    { label: "Get started absolutely free" },
    { label: "Already have an account?" },
    { label: "First name" },
    {
      label: "Email address",
      href: "/mail",
      active: window.location.pathname === "/mail",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-publicsans sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[480px] flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-[16px] top-[0]">
          <Img
            className="h-10 md:h-auto ml-16 md:ml-[0] mr-[376px] mt-16 object-cover rounded-[16px] w-10"
            src="images/img_logo.png"
            alt="logo"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                flexDirection: "column",
                marginTop: "3px",
                paddingBottom: "38px",
                color: "#212b36",
                fontSize: "14px",
                paddingLeft: "38px",
                paddingRight: "38px",
                [`&:hover, &.ps-active`]: {
                  color: "#919eab",
                  fontWeight: "400 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mt-[69px] md:pr-10 pr-32 sm:pr-5 w-[74%]"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          <div className="flex flex-col items-start justify-start mt-5 mx-auto w-[352px]">
            <div className="border border-blue_gray-300_33 border-solid flex flex-row h-[54px] md:h-auto items-center justify-between px-3.5 rounded-lg w-full">
              <Text
                className="flex-1 text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                Password
              </Text>
              <div className="flex flex-col h-10 md:h-auto items-center justify-center w-10">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img className="h-6 w-6" src="images/img_eye.svg" alt="eye" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900 flex flex-row gap-2 h-12 md:h-auto items-center justify-center mt-5 mx-auto px-4 rounded-lg w-[352px]">
            <a
              href="javascript:"
              className="flex-1 text-[15px] text-white-A700 w-auto"
            >
              <Text size="txtPublicSansBold15">Create Account</Text>
            </a>
            <Img
              className="h-6 w-6"
              src="images/img_arrowright_white_a700_24x24.svg"
              alt="arrowright"
            />
          </div>
          <Text
            className="mt-[22px] mx-auto text-blue_gray-500 text-center text-xs w-full"
            size="txtPublicSansRegular12"
          >
            <span className="text-blue_gray-500 font-publicsans font-normal">
              By signing up, I agree to{" "}
            </span>
            <a
              href="javascript:"
              className="text-blue_gray-900 font-publicsans font-normal underline"
            >
              Terms of Use
            </a>
            <span className="text-blue_gray-900 font-publicsans font-normal">
              {" "}
            </span>
            <span className="text-blue_gray-500 font-publicsans font-normal">
              and
            </span>
            <span className="text-blue_gray-900 font-publicsans font-normal">
              {" "}
            </span>
            <a
              href="javascript:"
              className="text-blue_gray-900 font-publicsans font-normal underline"
            >
              Privacy Policy
            </a>
            <span className="text-blue_gray-900 font-publicsans font-normal">
              .
            </span>
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center mt-5 mx-auto w-[352px]">
            <Img
              className="flex-1 h-[22px] w-full"
              src="images/img_divider.svg"
              alt="divider"
            />
            <Text
              className="text-blue_gray-300 text-center text-xs uppercase w-auto"
              size="txtPublicSansBold12"
            >
              OR
            </Text>
            <Img
              className="flex-1 h-[22px] w-full"
              src="images/img_divider.svg"
              alt="divider_One"
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center mb-[336px] mt-5 mx-auto w-[352px]">
            <div className="flex flex-col h-9 md:h-auto items-center justify-center rounded-[50%] w-9">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                <Img
                  className="h-[18px] md:h-auto object-cover w-[18px]"
                  src="images/img_icgoogle1.png"
                  alt="icgoogleOne"
                />
              </div>
            </div>
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_facebook.svg"
                alt="facebook"
              />
            </Button>
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img className="h-5" src="images/img_twitter.svg" alt="twitter" />
            </Button>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col h-full items-center justify-center p-4 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-[992px] md:h-auto object-cover w-full"
              src="images/img_img_992x928.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModernPage;
