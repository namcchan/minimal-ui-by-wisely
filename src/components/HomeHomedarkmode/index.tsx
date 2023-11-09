import React from "react";

import { Img, Text } from "components";

type HomeHomedarkmodeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "easyswitchbetwe" | "mode" | "adarkthemethat"
> &
  Partial<{ easyswitchbetwe: string; mode: string; adarkthemethat: string }>;

const HomeHomedarkmode: React.FC<HomeHomedarkmodeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Text
            className="text-teal-500 text-xs uppercase w-auto"
            size="txtPublicSansBold12Teal500"
          >
            {props?.easyswitchbetwe}
          </Text>
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
            size="txtPublicSansExtraBold48WhiteA700"
          >
            {props?.mode}
          </Text>
          <Text
            className="text-base text-blue_gray-300 w-auto"
            size="txtPublicSansRegular16Bluegray300"
          >
            {props?.adarkthemethat}
          </Text>
          <Img
            className="h-[38px] w-[33px]"
            src="images/img_switchcontainer.svg"
            alt="switchcontainer_One"
          />
        </div>
        <div className="h-[648px] relative rounded-[16px] shadow-bs6 w-full">
          <Img
            className="absolute h-[648px] inset-[0] justify-center m-auto object-cover rounded-[16px] w-full"
            src="images/img_img_648x1152.png"
            alt="img_Three"
          />
          <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-700_90 blur-[80.00px] bottom-[0] h-[403px] right-[15%] rotate-[24deg] rounded-[201px] w-[27%]"></div>
          <Img
            className="absolute h-[648px] inset-y-[0] my-auto object-cover right-[0] w-1/2"
            src="images/img_dark.png"
            alt="dark"
          />
        </div>
      </div>
    </>
  );
};

HomeHomedarkmode.defaultProps = {
  easyswitchbetwe: "Easily switch between mode",
  mode: "Dark Mode",
  adarkthemethat: "A dark theme that feels easier on the eyes.",
};

export default HomeHomedarkmode;
