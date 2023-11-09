import React from "react";

import { Img, Text } from "components";

type HomeHomeminimalProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "minimaltext"
  | "languagetext"
  | "brandingtext"
  | "customizetext"
  | "uiuxtext"
  | "descriptiontext"
  | "developmenttext"
  | "extendtext"
> &
  Partial<{
    minimaltext: string;
    languagetext: JSX.Element | string;
    brandingtext: string;
    customizetext: string;
    uiuxtext: string;
    descriptiontext: string;
    developmenttext: string;
    extendtext: string;
  }>;

const HomeHomeminimal: React.FC<HomeHomeminimalProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Text
            className="text-blue_gray-300 text-center text-xs uppercase w-auto"
            size="txtPublicSansBold12"
          >
            {props?.minimaltext}
          </Text>
          <Text
            className="leading-[64.00px] max-w-[332px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center"
            size="txtPublicSansExtraBold48"
          >
            {props?.languagetext}
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center w-full">
          <div className="flex flex-1 flex-col md:gap-10 gap-16 items-center justify-start px-10 sm:px-5 py-20 w-full">
            <Img className="h-12 w-12" src="images/img_car.svg" alt="car" />
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-center text-xl w-full"
                size="txtPublicSansBold20"
              >
                {props?.brandingtext}
              </Text>
              <Text
                className="leading-[24.00px] max-w-[250px] md:max-w-full text-base text-blue_gray-500 text-center"
                size="txtPublicSansRegular16"
              >
                {props?.customizetext}
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col md:gap-10 gap-16 items-center justify-start px-10 sm:px-5 py-20 rounded-[16px] shadow-bs3 w-full">
            <Img
              className="h-12 w-12"
              src="images/img_minimize.svg"
              alt="minimize"
            />
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-center text-xl w-full"
                size="txtPublicSansBold20"
              >
                {props?.uiuxtext}
              </Text>
              <Text
                className="leading-[24.00px] max-w-[250px] md:max-w-full text-base text-blue_gray-500 text-center"
                size="txtPublicSansRegular16"
              >
                {props?.descriptiontext}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col md:gap-10 gap-16 items-center justify-start px-10 sm:px-5 py-20 w-full">
            <Img
              className="h-12 w-12"
              src="images/img_volume.svg"
              alt="volume"
            />
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-center text-xl w-full"
                size="txtPublicSansBold20"
              >
                {props?.developmenttext}
              </Text>
              <Text
                className="leading-[24.00px] max-w-[250px] md:max-w-full text-base text-blue_gray-500 text-center"
                size="txtPublicSansRegular16"
              >
                {props?.extendtext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeHomeminimal.defaultProps = {
  minimaltext: "Minimal UI",
  languagetext: (
    <>
      What Minimal <br />
      helps you?{" "}
    </>
  ),
  brandingtext: "Branding",
  customizetext: "Consistent design makes it easy to brand your own.",
  uiuxtext: "UI & UX Design",
  descriptiontext:
    "The kit is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.",
  developmenttext: "Development",
  extendtext: "Easy to customize and extend, saving you time and money.",
};

export default HomeHomeminimal;
