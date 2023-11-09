import React from "react";

import { Img, Text } from "components";

type PreviewComponentsColumnimgProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "startanewprojectext" | "descriptiontext"
> &
  Partial<{
    startanewprojectext: string;
    descriptiontext: JSX.Element | string;
  }>;

const PreviewComponentsColumnimg: React.FC<PreviewComponentsColumnimgProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-end w-full">
          <div className="h-[860px] md:h-[994px] relative rotate-[180deg] w-full">
            <Img
              className="absolute h-[860px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_img_860x1440.png"
              alt="img"
            />
            <div className="absolute bg-white-A700_ab flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto p-36 md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-6 items-start justify-start md:mt-0 mt-4 w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                  size="txtPublicSansBold32"
                >
                  {props?.startanewprojectext}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[335px] md:max-w-full text-base text-blue_gray-500"
                  size="txtPublicSansRegular16"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start mb-[236px] md:mt-0 mt-4 w-[28%] md:w-full">
                <Img
                  className="h-80 md:h-auto object-cover w-full"
                  src="images/img_img_320x312.png"
                  alt="img_One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PreviewComponentsColumnimg.defaultProps = {
  startanewprojectext: "Components",
  descriptiontext: (
    <>
      With huge resource pack making deployment
      <br />
      easy and expanding more effectively
    </>
  ),
};

export default PreviewComponentsColumnimg;
