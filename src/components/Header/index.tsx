import React from "react";

import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header
        className={props.className}
        style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
      >
        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
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
          <div className="flex flex-row gap-2 sm:hidden items-center justify-start w-auto">
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
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              Need help?
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
