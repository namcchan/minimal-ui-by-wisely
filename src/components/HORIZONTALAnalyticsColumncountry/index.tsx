import React from "react";

import { Img, Text } from "components";

type HORIZONTALAnalyticsColumncountryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleTwenty"
  | "subtitleOne"
  | "country"
  | "countryOne"
  | "countryTwo"
  | "countryThree"
  | "labelSeventeen"
  | "dividerFive"
  | "dividerSix"
  | "dividerSeven"
  | "dividerEight"
  | "dividerNine"
  | "labelEighteen"
  | "labelNineteen"
  | "labelTwenty"
  | "labelTwentyOne"
  | "zipcode"
> &
  Partial<{
    titleTwenty: string;
    subtitleOne: string;
    country: string;
    countryOne: string;
    countryTwo: string;
    countryThree: string;
    labelSeventeen: string;
    dividerFive: string;
    dividerSix: string;
    dividerSeven: string;
    dividerEight: string;
    dividerNine: string;
    labelEighteen: string;
    labelNineteen: string;
    labelTwenty: string;
    labelTwentyOne: string;
    zipcode: string;
  }>;

const HORIZONTALAnalyticsColumncountry: React.FC<
  HORIZONTALAnalyticsColumncountryProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-lg w-full"
                size="txtPublicSansBold18Bluegray900"
              >
                {props?.titleTwenty}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.subtitleOne}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-6 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
            <div className="flex flex-col gap-[37px] h-[258px] md:h-auto items-end justify-start w-auto">
              <div className="flex flex-col items-end justify-start w-auto">
                <Text
                  className="text-blue_gray-300 text-right text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.country}
                </Text>
              </div>
              <div className="flex flex-col gap-[37px] items-center justify-start w-[43%] md:w-full">
                <div className="flex flex-col items-end justify-start w-auto">
                  <Text
                    className="text-blue_gray-300 text-right text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray300"
                  >
                    {props?.countryOne}
                  </Text>
                </div>
                <div className="flex flex-col items-end justify-start w-auto">
                  <Text
                    className="text-blue_gray-300 text-right text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray300"
                  >
                    {props?.countryTwo}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start w-auto">
                <Text
                  className="text-blue_gray-300 text-right text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.countryThree}
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start w-auto">
                <Text
                  className="text-blue_gray-300 text-right text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelSeventeen}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-center w-full">
              <div className="flex flex-col gap-[42px] items-start justify-start w-full">
                <div className="relative w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                      <Img
                        className="h-[18px] w-full"
                        alt="divider_Five"
                        src={props?.dividerFive}
                      />
                      <Img
                        className="h-[18px] w-full"
                        alt="divider_Six"
                        src={props?.dividerSix}
                      />
                      <Img
                        className="h-[18px] w-full"
                        alt="divider_Seven"
                        src={props?.dividerSeven}
                      />
                      <Img
                        className="h-[18px] w-full"
                        alt="divider_Eight"
                        src={props?.dividerEight}
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute h-[232px] inset-y-[0] left-[0] my-auto w-[520px]"
                    src="images/img_chartbar.svg"
                    alt="chartbar"
                  />
                </div>
                <Img
                  className="h-[18px] w-full"
                  alt="divider_Nine"
                  src={props?.dividerNine}
                />
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelEighteen}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelNineteen}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelTwenty}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelTwentyOne}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.zipcode}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALAnalyticsColumncountry.defaultProps = {
  titleTwenty: "Conversion Rates",
  subtitleOne: "(+43%) than last year",
  country: "Italy",
  countryOne: "Japan",
  countryTwo: "China",
  countryThree: "Canada",
  labelSeventeen: "United States",
  dividerFive: "images/img_divider_blue_gray_300_18x567.svg",
  dividerSix: "images/img_divider_blue_gray_300_18x567.svg",
  dividerSeven: "images/img_divider_blue_gray_300_18x567.svg",
  dividerEight: "images/img_divider_blue_gray_300_18x567.svg",
  dividerNine: "images/img_divider_blue_gray_300_18x567.svg",
  labelEighteen: "0",
  labelNineteen: "300",
  labelTwenty: "600",
  labelTwentyOne: "900",
  zipcode: "1200",
};

export default HORIZONTALAnalyticsColumncountry;
