import React from "react";

import { Img, List, Text } from "components";

type HORIZONTALAnalyticsColumncheckmarkProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleTwentyThree"
  | "price"
  | "duration"
  | "title"
  | "duration1"
  | "title1"
  | "date"
  | "title2"
  | "date1"
  | "title3"
  | "date2"
> &
  Partial<{
    titleTwentyThree: string;
    price: string;
    duration: string;
    title: string;
    duration1: string;
    title1: string;
    date: string;
    title2: string;
    date1: string;
    title3: string;
    date2: string;
  }>;

const HORIZONTALAnalyticsColumncheckmark: React.FC<
  HORIZONTALAnalyticsColumncheckmarkProps
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
                {props?.titleTwentyThree}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pb-6 sm:px-5 px-6 w-full">
          <List className="flex flex-col gap-px w-[82%]" orientation="vertical">
            <div className="flex flex-row gap-4 items-start justify-start w-60">
              <div className="flex flex-col h-[68px] md:h-auto items-center justify-center">
                <Img
                  className="h-9 w-3"
                  src="images/img_checkmark_teal_500.svg"
                  alt="checkmark"
                />
                <Img
                  className="h-full w-3"
                  src="images/img_grid_blue_gray_300_32x12.svg"
                  alt="grid"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.price}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-300 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray300"
                  >
                    {props?.duration}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-60">
              <div className="flex flex-col h-[68px] md:h-auto items-center justify-center">
                <Img
                  className="h-9 w-3"
                  src="images/img_settings_amber_a700.svg"
                  alt="settings"
                />
                <Img
                  className="h-full w-3"
                  src="images/img_grid_blue_gray_300_32x12.svg"
                  alt="grid"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.title}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-300 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray300"
                  >
                    {props?.duration1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-60">
              <div className="flex flex-col h-[68px] md:h-auto items-center justify-center">
                <Img
                  className="h-9 w-3"
                  src="images/img_close_cyan_a700.svg"
                  alt="close"
                />
                <Img
                  className="h-full w-3"
                  src="images/img_grid_blue_gray_300_32x12.svg"
                  alt="grid"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.title1}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-300 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray300"
                  >
                    {props?.date}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-60">
              <div className="flex flex-col h-[68px] md:h-auto items-center justify-center">
                <Img
                  className="h-9 w-3"
                  src="images/img_checkmark_deep_orange_500_36x12.svg"
                  alt="checkmark"
                />
                <Img
                  className="h-full w-3"
                  src="images/img_grid_blue_gray_300_32x12.svg"
                  alt="grid"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.title2}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-300 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray300"
                  >
                    {props?.date1}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start w-60">
              <Img
                className="h-full w-3"
                src="images/img_computer_deep_purple_a200_01_68x12.svg"
                alt="computer"
              />
              <div className="flex flex-col items-start justify-start pt-1.5 w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.title3}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-300 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray300"
                  >
                    {props?.date2}
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

HORIZONTALAnalyticsColumncheckmark.defaultProps = {
  titleTwentyThree: "Order Timeline",
  price: "1983, orders, $4220",
  duration: "2 hours ago",
  title: "12 Invoices have been paid",
  duration1: "2 hours ago",
  title1: "Order #37745 from September",
  date: "25 Jul 2020",
  title2: "New order placed #XF-2356",
  date1: "22 Nov 2020",
  title3: "New order placed #XF-2356",
  date2: "24 Sep 2020",
};

export default HORIZONTALAnalyticsColumncheckmark;
