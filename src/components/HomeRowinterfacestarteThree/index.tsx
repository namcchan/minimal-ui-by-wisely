import React from "react";

import { Button, Img, Text } from "components";

type HomeRowinterfacestarteThreeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "usertext" | "usertextmultiline" | "userbutton"
> &
  Partial<{ usertext: string; usertextmultiline: string; userbutton: string }>;

const HomeRowinterfacestarteThree: React.FC<
  HomeRowinterfacestarteThreeProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start w-auto">
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <Text
              className="text-blue_gray-300 text-center text-xs uppercase w-auto"
              size="txtPublicSansBold12"
            >
              {props?.usertext}
            </Text>
            <Text
              className="leading-[64.00px] max-w-[366px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
              size="txtPublicSansExtraBold48"
            >
              {props?.usertextmultiline}
            </Text>
          </div>
          <Button
            className="cursor-pointer flex h-12 items-center justify-center min-w-[237px]"
            rightIcon={
              <Img
                className="h-6 ml-2"
                src="images/img_arrowright_blue_gray_900.svg"
                alt="arrow_right"
              />
            }
            shape="round"
            color="blue_gray_300_51"
            size="lg"
            variant="outline"
          >
            <div className="font-bold font-publicsans text-[15px] text-left">
              {props?.userbutton}
            </div>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-start w-[58%] md:w-full">
          <Img
            className="h-[510px] md:h-auto object-cover w-full"
            src="images/img_img_510x662.png"
            alt="img_Five"
          />
        </div>
      </div>
    </>
  );
};

HomeRowinterfacestarteThree.defaultProps = {
  usertext: "Looking For a",
  usertextmultiline: "Landing Page Template?",
  userbutton: "Visit Zone Landing Page",
};

export default HomeRowinterfacestarteThree;
