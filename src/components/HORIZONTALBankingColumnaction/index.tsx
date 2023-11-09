import React from "react";

import { Img, SelectBox, Text } from "components";

type HORIZONTALBankingColumnactionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleEighteen"
  | "subtitle"
  | "legend"
  | "legendOne"
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
> &
  Partial<{
    titleEighteen: string;
    subtitle: string;
    legend: string;
    legendOne: string;
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
  }>;

const actionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HORIZONTALBankingColumnaction: React.FC<
  HORIZONTALBankingColumnactionProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
          <div className="flex flex-1 flex-col items-center justify-start w-full">
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
          <SelectBox
            className="!text-blue_gray-900 md:flex-1 font-publicsans font-semibold text-left text-sm w-[10%] md:w-full"
            placeholderClassName="!text-blue_gray-900"
            indicator={
              <Img
                className="h-4 w-4"
                src="images/img_arrowup_blue_gray_900.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="action"
            options={actionOptionsList}
            isSearchable={false}
            placeholder="Year"
            shape="round"
            color="blue_gray_300_14"
            size="xs"
            variant="fill"
          />
        </div>
        <div className="flex flex-row gap-4 items-start justify-end sm:px-5 px-6 w-full">
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
              {props?.legendOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start p-6 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
            <div className="flex flex-col gap-[41px] h-[259px] md:h-auto items-end justify-start w-auto">
              <div className="flex flex-col items-end justify-start w-auto">
                <Text
                  className="text-blue_gray-300 text-right text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.label}
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start w-auto">
                <Text
                  className="text-blue_gray-300 text-right text-xs"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelOne}
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start w-auto">
                <Text
                  className="text-blue_gray-300 text-right text-xs"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelTwo}
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start w-auto">
                <Text
                  className="text-blue_gray-300 text-right text-xs"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelThree}
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start w-auto">
                <Text
                  className="text-blue_gray-300 text-right text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelFour}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start justify-center w-full">
              <div className="flex flex-col gap-[42px] items-start justify-start w-full">
                <Img
                  className="h-[18px] w-full"
                  alt="divider"
                  src={props?.divider}
                />
                <div className="relative w-full">
                  <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                    <div className="flex flex-col gap-[42px] items-center justify-start w-full">
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
                  </div>
                  <Img
                    className="absolute h-[200px] inset-x-[0] mx-auto top-[0] w-[598px]"
                    src="images/img_chartcolumn.svg"
                    alt="chartcolumn"
                  />
                </div>
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
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.labelEleven}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALBankingColumnaction.defaultProps = {
  titleEighteen: "Balance Statistics",
  subtitle: "(+43% Income | +12% Expense) than last year",
  legend: "Income",
  legendOne: "Expense",
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
  labelFive: "Page A",
  labelSix: "Page B",
  labelSeven: "Page C",
  labelEight: "Page D",
  labelNine: "Page E",
  labelTen: "Page F",
  labelEleven: "Page G",
};

export default HORIZONTALBankingColumnaction;
