import React from "react";

import { Button, Img, Text } from "components";

type HomeColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "usertext" | "purchasebutton" | "freeversionbutton"
> &
  Partial<{
    usertext: JSX.Element | string;
    purchasebutton: string;
    freeversionbutton: string;
  }>;

const HomeColumn: React.FC<HomeColumnProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gradient1  flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-6xl rounded-[24px] w-full">
            <div className="flex sm:flex-1 flex-col h-[456px] sm:h-auto items-center justify-start w-[456px] sm:w-full">
              <Img
                className="h-[456px] md:h-auto object-cover w-[456px] sm:w-full"
                src="images/img_img_456x456.png"
                alt="img_Six"
              />
            </div>
            <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-auto sm:w-full">
              <Text
                className="leading-[64.00px] max-w-[402px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtPublicSansExtraBold48WhiteA700"
              >
                {props?.usertext}
              </Text>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Button
                  className="!text-blue_gray-900 cursor-pointer font-bold font-publicsans h-12 min-w-[134px] text-[15px] text-center"
                  shape="round"
                  color="white_A700"
                  size="xl"
                  variant="fill"
                >
                  {props?.purchasebutton}
                </Button>
                <Button
                  className="cursor-pointer flex h-12 items-center justify-center min-w-[183px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-2"
                      src="images/img_end_icon.svg"
                      alt="end icon"
                    />
                  }
                  shape="round"
                  color="white_A700_7a"
                  size="lg"
                  variant="outline"
                >
                  <div className="!text-white-A700 font-bold font-publicsans text-[15px] text-left">
                    {props?.freeversionbutton}
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeColumn.defaultProps = {
  usertext: (
    <>
      Get started with <br />
      Minimal kit today
    </>
  ),
  purchasebutton: "Purchase Now",
  freeversionbutton: "Get Free Version",
};

export default HomeColumn;
