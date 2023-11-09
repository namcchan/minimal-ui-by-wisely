import React from "react";

import { Button, Img, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header
        className={props.className}
        style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
      >
        <div className="flex flex-row items-center justify-center w-full">
          <div className="header-row ">
            <Img
              className="h-10 md:h-auto object-cover w-10"
              src="images/img_logo.png"
              alt="logo"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex flex-1 flex-row gap-10 md:hidden items-center justify-end w-full common-row-list">
            <li>
              <Text
                className="text-blue_gray-900 text-sm hover:text-teal-500"
                size="txtPublicSansSemiBold14"
              >
                Home
              </Text>
            </li>
            <li>
              <Text
                className="text-blue_gray-900 text-sm hover:text-teal-500"
                size="txtPublicSansSemiBold14"
              >
                Components
              </Text>
            </li>
            <li>
              <div className="flex flex-row gap-1 items-center justify-start">
                <div className="bg-teal-500_85 h-1.5 rounded-[50%] w-1.5"></div>
                <Text
                  className="text-sm text-teal-500 w-auto"
                  size="txtPublicSansSemiBold14Teal500"
                >
                  Pages
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_teal_500_16x16.svg"
                  alt="arrowdown"
                />
              </div>
            </li>
            <li>
              <Text
                className="text-blue_gray-900 text-sm hover:text-teal-500"
                size="txtPublicSansSemiBold14"
              >
                Docs
              </Text>
            </li>
          </ul>
          <div className="flex flex-col sm:hidden items-center justify-center px-5 w-auto">
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_iconsduotoneicsettings.svg"
                alt="iconsduotoneics"
              />
            </Button>
          </div>
          <div className="flex flex-row gap-2 sm:hidden items-center justify-center w-auto">
            <Button
              className="cursor-pointer font-bold font-publicsans h-9 min-w-[64px] text-center text-sm"
              shape="round"
              color="blue_gray_300_51"
              size="md"
              variant="outline"
            >
              Login
            </Button>
            <Button
              className="cursor-pointer font-bold font-publicsans h-9 min-w-[119px] text-center text-sm"
              shape="round"
              color="blue_gray_900"
              size="md"
              variant="fill"
            >
              Purchase Now
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
