import React from "react";

import { Img, List, Text } from "components";

type HORIZONTALEcommerceColumntotalprofitProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleTwenty"
  | "totalprofit"
  | "price"
  | "language"
  | "totalincome"
  | "price1"
  | "language1"
  | "totalexpenses"
  | "price2"
  | "language2"
> &
  Partial<{
    titleTwenty: string;
    totalprofit: string;
    price: string;
    language: string;
    totalincome: string;
    price1: string;
    language1: string;
    totalexpenses: string;
    price2: string;
    language2: string;
  }>;

const HORIZONTALEcommerceColumntotalprofit: React.FC<
  HORIZONTALEcommerceColumntotalprofitProps
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
                {props?.titleTwenty}
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex flex-col gap-8 items-start pb-6 sm:px-5 px-6 w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="flex-1 text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.totalprofit}
              </Text>
              <div className="flex flex-row items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-right text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.price}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.language}
                </Text>
              </div>
            </div>
            <Img
              className="h-1 w-full"
              src="images/img_linearprogress_teal_500.svg"
              alt="linearprogress"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="flex-1 text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.totalincome}
              </Text>
              <div className="flex flex-1 md:flex-1 flex-row items-start justify-start w-auto md:w-full">
                <Text
                  className="text-blue_gray-900 text-right text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.price1}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.language1}
                </Text>
              </div>
            </div>
            <Img
              className="h-1 w-full"
              src="images/img_linearprogress_cyan_a700_4x664.svg"
              alt="linearprogress"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 items-start justify-start my-0 w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="flex-1 text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.totalexpenses}
              </Text>
              <div className="flex flex-row items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-right text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.price2}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.language2}
                </Text>
              </div>
            </div>
            <Img
              className="h-1 w-full"
              src="images/img_linearprogress_amber_a700_6x464.svg"
              alt="linearprogress"
            />
          </div>
        </List>
      </div>
    </>
  );
};

HORIZONTALEcommerceColumntotalprofit.defaultProps = {
  titleTwenty: "Sales Overview",
  totalprofit: "Total Profit",
  price: "$37,406",
  language: " (60%)",
  totalincome: "Total Income",
  price1: "$1,519",
  language1: " (23%)",
  totalexpenses: "Total Expenses",
  price2: "$17,214",
  language2: " (12%)",
};

export default HORIZONTALEcommerceColumntotalprofit;
