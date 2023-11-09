import React from "react";

import { Img, Text } from "components";

type LoginClassicAuthbannerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "welcometext"
> &
  Partial<{ welcometext: string }>;

const LoginClassicAuthbanner: React.FC<LoginClassicAuthbannerProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-end justify-end w-full">
          <div className="overflow-x-auto w-full">
            <div className="h-[1052px] relative w-full">
              <Img
                className="absolute h-[1052px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_img.png"
                alt="img"
              />
              <div className="absolute bg-white-A700_a9 flex flex-col gap-[58px] h-full inset-[0] justify-center m-auto pb-[206px] md:pr-10 sm:pr-5 pr-[206px] w-full">
                <div className="flex flex-col items-start justify-start p-10 sm:px-5 w-[120px]">
                  <Img
                    className="h-10 md:h-auto object-cover rounded-[16px] w-10"
                    src="images/img_logo.png"
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col md:gap-10 gap-20 items-center justify-start md:ml-[0] ml-[120px] mr-[154px] w-auto md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-auto"
                    size="txtPublicSansBold32"
                  >
                    {props?.welcometext}
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[540px] md:h-auto object-cover w-full"
                      src="images/img_img_540x720.png"
                      alt="img_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LoginClassicAuthbanner.defaultProps = { welcometext: "Hi, Welcome back" };

export default LoginClassicAuthbanner;
