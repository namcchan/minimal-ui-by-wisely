import React from "react";

import { Button, Img, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[83px] items-center justify-center w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-between max-w-6xl w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-[270px]">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_logo.png"
                  alt="logo_One"
                />
                <Text
                  className="leading-[22.00px] max-w-[270px] md:max-w-full text-blue_gray-900 text-sm"
                  size="txtPublicSansRegular14"
                >
                  The starting point for your next project with Minimal UI Kit,
                  built on the newest version of Material-UI ©, ready to be
                  customized to your style.
                </Text>
              </div>
              <div className="flex flex-row items-start justify-start w-auto">
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
                  <Img
                    className="h-5"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                </Button>
                <Button
                  className="flex h-9 items-center justify-center w-9"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-5"
                    src="images/img_iconssocialiclinkedin.svg"
                    alt="iconssocialicli"
                  />
                </Button>
                <Button
                  className="flex h-9 items-center justify-center w-9"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-5"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                </Button>
              </div>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-end w-[564px] sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-[172px]">
                <Text
                  className="text-blue_gray-900 text-xs uppercase w-full"
                  size="txtPublicSansBold12Bluegray900"
                >
                  Minimal
                </Text>
                <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtPublicSansRegular14"
                    >
                      About us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtPublicSansRegular14"
                    >
                      Contact us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtPublicSansRegular14"
                    >
                      FAQ
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-[172px]">
                <Text
                  className="text-blue_gray-900 text-xs uppercase w-full"
                  size="txtPublicSansBold12Bluegray900"
                >
                  Legal
                </Text>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-full"
                    size="txtPublicSansRegular14"
                  >
                    Terms and Condition
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-full"
                    size="txtPublicSansRegular14"
                  >
                    Privacy Policy
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-[172px]">
                <Text
                  className="text-blue_gray-900 text-xs uppercase w-full"
                  size="txtPublicSansBold12Bluegray900"
                >
                  Contact
                </Text>
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansRegular14"
                >
                  support@minimals.cc
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtPublicSansRegular14"
          >
            © 2023. All rights reserved
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
