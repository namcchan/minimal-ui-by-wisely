import React from "react";

import { Img, Text } from "components";

type HORIZONTALEcommerceColumnstrokeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titleEighteen" | "text" | "totalnumber" | "menslegend" | "womenslegend"
> &
  Partial<{
    titleEighteen: string;
    text: string;
    totalnumber: string;
    menslegend: string;
    womenslegend: string;
  }>;

const HORIZONTALEcommerceColumnstroke: React.FC<
  HORIZONTALEcommerceColumnstrokeProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-lg w-full"
                size="txtPublicSansBold18Bluegray900"
              >
                {props?.titleEighteen}
              </Text>
            </div>
          </div>
        </div>
        <div className="h-60 md:h-[228px] p-1.5 relative w-60">
          <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto outline outline-[6px] outline-blue_gray-300_28 md:pl-10 sm:pl-5 pl-[94px] rounded-[50%] w-[188px]">
            <Img
              className="h-[188px] md:h-auto object-cover"
              src="images/img_stroke.png"
              alt="stroke"
            />
          </div>
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto outline outline-[6px] outline-blue_gray-300_28 rounded-[50%] w-[228px]">
            <Img
              className="h-[228px] md:h-auto object-cover rounded-tl-[50%] rounded-tr-[50%] w-[228px]"
              src="images/img_group87.png"
              alt="stroke_One"
            />
          </div>
          <div className="absolute flex flex-col gap-2.5 h-max inset-[0] items-center justify-start m-auto w-auto">
            <Text
              className="text-blue_gray-500 text-center text-sm w-auto"
              size="txtPublicSansSemiBold14Bluegray500"
            >
              {props?.text}
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-auto"
              size="txtPublicSansBold32"
            >
              {props?.totalnumber}
            </Text>
          </div>
        </div>
        <div className="border-blue_gray-300_33 border-dashed border-t flex flex-row gap-4 items-center justify-center py-6 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-teal-500 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.menslegend}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-amber-A700 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.womenslegend}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALEcommerceColumnstroke.defaultProps = {
  titleEighteen: "Sale By Gender",
  text: "Total",
  totalnumber: "10,989",
  menslegend: "Mens",
  womenslegend: "Womens",
};

export default HORIZONTALEcommerceColumnstroke;
