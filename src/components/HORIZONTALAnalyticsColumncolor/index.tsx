import React from "react";

import { Img, List, Text } from "components";

type HORIZONTALAnalyticsColumncolorProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleEighteen"
  | "subtitle"
  | "legend"
  | "legend1"
  | "legend2"
  | "chartline"
  | "chartarea"
  | "label"
  | "labelOne"
  | "labelTwo"
  | "labelThree"
  | "labelFour"
  | "divider"
  | "dividerOne"
  | "dividerTwo"
  | "dividerThree"
  | "dividerFour"
  | "labelFive"
  | "labelSix"
  | "labelSeven"
  | "labelEight"
  | "labelNine"
  | "labelTen"
  | "labelEleven"
  | "labelTwelve"
  | "labelThirteen"
  | "labelFourteen"
  | "labelFifteen"
  | "labelSixteen"
> &
  Partial<{
    titleEighteen: string;
    subtitle: string;
    legend: string;
    legend1: string;
    legend2: string;
    chartline: string;
    chartarea: string;
    label: string;
    labelOne: string;
    labelTwo: string;
    labelThree: string;
    labelFour: string;
    divider: string;
    dividerOne: string;
    dividerTwo: string;
    dividerThree: string;
    dividerFour: string;
    labelFive: string;
    labelSix: string;
    labelSeven: string;
    labelEight: string;
    labelNine: string;
    labelTen: string;
    labelEleven: string;
    labelTwelve: string;
    labelThirteen: string;
    labelFourteen: string;
    labelFifteen: string;
    labelSixteen: string;
  }>;

const HORIZONTALAnalyticsColumncolor: React.FC<
  HORIZONTALAnalyticsColumncolorProps
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
                {props?.titleEighteen}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.subtitle}
              </Text>
            </div>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-end sm:px-5 px-6 w-full"
          orientation="horizontal"
        >
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-teal-500 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.legend}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-amber-A700 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.legend1}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-cyan-A700 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.legend2}
            </Text>
          </div>
        </List>
        <div className="p-6 sm:px-5 relative w-full">
          <Img
            className="absolute h-[200px] inset-y-[0] max-h-[200px] my-auto right-[7%]"
            alt="chartline"
            src={props?.chartline}
          />
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[200px] items-center justify-start ml-auto my-auto pt-1 px-1 relative w-[86%] md:w-full"
            style={{ backgroundImage: "url('images/img_group67.svg')" }}
          >
            <Img
              className="h-[150px] sm:h-auto mt-[46px] object-cover w-[600px] md:w-full"
              alt="chartarea"
              src={props?.chartarea}
            />
          </div>
          <div className="flex flex-1 md:flex-col flex-row gap-5 items-start justify-between m-auto relative w-full">
            <div className="flex flex-col gap-[42px] h-[258px] md:h-auto items-start justify-start w-6">
              <Text
                className="text-blue_gray-300 text-right text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.label}
              </Text>
              <Text
                className="text-blue_gray-300 text-right text-xs"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.labelOne}
              </Text>
              <Text
                className="text-blue_gray-300 text-right text-xs"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.labelTwo}
              </Text>
              <Text
                className="text-blue_gray-300 text-right text-xs"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.labelThree}
              </Text>
              <Text
                className="text-blue_gray-300 text-right text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.labelFour}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-center w-full">
              <div className="flex flex-col gap-[42px] items-start justify-start w-full">
                <Img
                  className="h-[18px] w-full"
                  alt="divider"
                  src={props?.divider}
                />
                <Img
                  className="h-[18px] w-full"
                  alt="divider_One"
                  src={props?.dividerOne}
                />
                <Img
                  className="h-[18px] w-full"
                  alt="divider_Two"
                  src={props?.dividerTwo}
                />
                <Img
                  className="h-[18px] w-full"
                  alt="divider_Three"
                  src={props?.dividerThree}
                />
                <Img
                  className="h-[18px] w-full"
                  alt="divider_Four"
                  src={props?.dividerFour}
                />
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelFive}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelSix}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelSeven}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelEight}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelNine}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelTen}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelEleven}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelTwelve}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelThirteen}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelFourteen}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelFifteen}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelSixteen}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALAnalyticsColumncolor.defaultProps = {
  titleEighteen: "Website Visits",
  subtitle: "(+43%) than last year",
  legend: "Team A",
  legend1: "Team B",
  legend2: "Team C",
  chartline: "images/img_chartline_cyan_a700.svg",
  chartarea: "images/img_chartarea_amber_a700_150x600.png",
  label: "100",
  labelOne: "80",
  labelTwo: "40",
  labelThree: "20",
  labelFour: "0",
  divider: "images/img_divider_blue_gray_300_18x620.svg",
  dividerOne: "images/img_divider_blue_gray_300_18x620.svg",
  dividerTwo: "images/img_divider_blue_gray_300_18x620.svg",
  dividerThree: "images/img_divider_blue_gray_300_18x620.svg",
  dividerFour: "images/img_divider_blue_gray_300_18x620.svg",
  labelFive: "Jan",
  labelSix: "Feb",
  labelSeven: "Mar",
  labelEight: "Apr",
  labelNine: "May",
  labelTen: "Jun",
  labelEleven: "Jul",
  labelTwelve: "Aug",
  labelThirteen: "Sep",
  labelFourteen: "Oct",
  labelFifteen: "Nov",
  labelSixteen: "Dec",
};

export default HORIZONTALAnalyticsColumncolor;
