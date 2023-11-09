import React from "react";

import { Img, Text } from "components";

type HomeStackimgFourProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "cleancleartext" | "beautifulmoderntext"
> &
  Partial<{ cleancleartext: string; beautifulmoderntext: string }>;

const HomeStackimgFour: React.FC<HomeStackimgFourProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start m-auto w-full">
          <Img
            className="h-[1010px] sm:h-auto object-cover w-full"
            src="images/img_img_1010x1440.png"
            alt="img_Four"
          />
        </div>
        <div className="absolute flex flex-col gap-6 items-start justify-end left-[0] md:pl-10 pl-36 sm:pl-5 pt-[120px] top-[0] w-auto">
          <Text
            className="text-blue_gray-300 text-center text-xs uppercase w-auto"
            size="txtPublicSansBold12"
          >
            {props?.cleancleartext}
          </Text>
          <Text
            className="leading-[64.00px] max-w-[519px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
            size="txtPublicSansExtraBold48"
          >
            {props?.beautifulmoderntext}
          </Text>
        </div>
      </div>
    </>
  );
};

HomeStackimgFour.defaultProps = {
  cleancleartext: "clean & clear",
  beautifulmoderntext: "Beautiful, modern and clean user interfaces",
};

export default HomeStackimgFour;
