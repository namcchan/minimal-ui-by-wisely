import React from "react";

import { Img, Text } from "components";

type ProductDetailsProductvaluesProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "duration"
  | "marshmallowbiscOne"
  | "p100original"
  | "chocolatebarcanOne"
  | "durationOne"
  | "cottoncandygingOne"
> &
  Partial<{
    duration: string;
    marshmallowbiscOne: string;
    p100original: string;
    chocolatebarcanOne: string;
    durationOne: string;
    cottoncandygingOne: string;
  }>;

const ProductDetailsProductvalues: React.FC<
  ProductDetailsProductvaluesProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-1 flex-col h-full inset-[0] items-center justify-center m-auto max-w-[1080px] py-10 w-full">
          <div className="flex flex-col gap-4 items-center justify-start px-10 sm:px-5 w-[357px]">
            <Img
              className="h-8 w-8"
              src="images/img_clock_teal_500.svg"
              alt="clock_Three"
            />
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-900 text-center w-full"
                size="txtPublicSansSemiBold16"
              >
                {props?.duration}
              </Text>
              <Text
                className="leading-[22.00px] max-w-[277px] md:max-w-full text-blue_gray-500 text-center text-sm"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.marshmallowbiscOne}
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-4 h-max inset-y-[0] items-center justify-start left-[0] my-auto px-10 sm:px-5 w-[357px]">
          <Img
            className="h-8 w-8"
            src="images/img_checkmark_32x32.svg"
            alt="checkmark_Two"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-900 text-center w-full"
              size="txtPublicSansSemiBold16"
            >
              {props?.p100original}
            </Text>
            <Text
              className="leading-[22.00px] max-w-[277px] md:max-w-full text-blue_gray-500 text-center text-sm"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.chocolatebarcanOne}
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col gap-4 h-max inset-y-[0] items-center justify-start my-auto px-10 sm:px-5 right-[0] w-[357px]">
          <Img
            className="h-8 w-8"
            src="images/img_checkmark_1.svg"
            alt="checkmark_Three"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-900 text-center w-full"
              size="txtPublicSansSemiBold16"
            >
              {props?.durationOne}
            </Text>
            <Text
              className="leading-[22.00px] max-w-[277px] md:max-w-full text-blue_gray-500 text-center text-sm"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.cottoncandygingOne}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ProductDetailsProductvalues.defaultProps = {
  duration: "10 Day Replacement",
  marshmallowbiscOne: "Marshmallow biscuit donut dragée fruitcake wafer.",
  p100original: "100% Original",
  chocolatebarcanOne:
    "Chocolate bar candy canes ice cream toffee cookie halvah.",
  durationOne: "1 Year Warranty",
  cottoncandygingOne: "Cotton candy gingerbread cake I love sugar sweet.",
};

export default ProductDetailsProductvalues;
