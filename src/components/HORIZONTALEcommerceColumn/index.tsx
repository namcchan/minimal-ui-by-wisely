import React from "react";

import { Button, Img, Text } from "components";

type HORIZONTALEcommerceColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "productsold" | "numberlongrand" | "numberpercentra" | "thanlastweek"
> &
  Partial<{
    productsold: string;
    numberlongrand: string;
    numberpercentra: string;
    thanlastweek: string;
  }>;

const HORIZONTALEcommerceColumn: React.FC<HORIZONTALEcommerceColumnProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtPublicSansSemiBold14"
          >
            {props?.productsold}
          </Text>
          <div className="flex flex-row items-center justify-between mt-0.5 w-full">
            <div className="flex flex-col items-center justify-start pb-2 pt-4 w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                size="txtPublicSansBold32"
              >
                {props?.numberlongrand}
              </Text>
            </div>
            <Img
              className="h-[46px] md:h-auto object-cover w-24"
              src="images/img_chartsparkline_46x96.png"
              alt="chartsparkline"
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Button
              className="flex h-6 items-center justify-center rounded-[50%] w-6"
              shape="circle"
              color="green_A700_28"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-4"
                src="images/img_checkmark_green_a700_01_24x24.svg"
                alt="checkmark"
              />
            </Button>
            <div className="flex flex-row gap-1 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansSemiBold14"
              >
                {props?.numberpercentra}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.thanlastweek}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALEcommerceColumn.defaultProps = {
  productsold: "Product Sold",
  numberlongrand: "31,968",
  numberpercentra: "+39.4%",
  thanlastweek: "than last week",
};

export default HORIZONTALEcommerceColumn;
