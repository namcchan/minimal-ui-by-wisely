import React from "react";

import { Button, Img, Text } from "components";

type HomeHomethemecolorProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "styletext" | "colorpresetstext" | "styledescriptiontext"
> &
  Partial<{
    styletext: string;
    colorpresetstext: string;
    styledescriptiontext: string;
  }>;

const HomeHomethemecolor: React.FC<HomeHomethemecolorProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-auto">
          <Text
            className="text-blue_gray-300 text-center text-xs uppercase w-auto"
            size="txtPublicSansBold12"
          >
            {props?.styletext}
          </Text>
          <div className="flex flex-col gap-[31px] items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center w-auto"
              size="txtPublicSansExtraBold48"
            >
              {props?.colorpresetstext}
            </Text>
            <Text
              className="text-base text-blue_gray-500 text-center w-auto"
              size="txtPublicSansRegular16"
            >
              {props?.styledescriptiontext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start w-auto">
          <Img
            className="h-6 w-[100px]"
            src="images/img_volume_deep_orange_500.svg"
            alt="volume_One"
          />
          <Img
            className="h-6 w-[62px]"
            src="images/img_close_deep_purple_a200_01.svg"
            alt="close_Two"
          />
          <Button
            className="flex h-6 items-center justify-center rounded-[50%] w-6"
            shape="circle"
            color="teal_500"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-4"
              src="images/img_iconssolidic_white_a700.svg"
              alt="iconssolidic_Six"
            />
          </Button>
        </div>
        <Img
          className="h-[720px] sm:h-auto object-cover w-[1152px] md:w-full"
          src="images/img_preview1.png"
          alt="previewOne"
        />
      </div>
    </>
  );
};

HomeHomethemecolor.defaultProps = {
  styletext: "choose your style",
  colorpresetstext: "Color Presets",
  styledescriptiontext: "Express your own style with just one click",
};

export default HomeHomethemecolor;
