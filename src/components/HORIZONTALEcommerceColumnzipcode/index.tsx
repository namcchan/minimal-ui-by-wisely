import React from "react";

import { Img, SelectBox, Text } from "components";

type HORIZONTALEcommerceColumnzipcodeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleNineteen"
  | "subtitle"
  | "legendTwo"
  | "legendThree"
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
  | "chartarea"
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
    titleNineteen: string;
    subtitle: string;
    legendTwo: string;
    legendThree: string;
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
    chartarea: string;
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

const zipcodeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HORIZONTALEcommerceColumnzipcode: React.FC<
  HORIZONTALEcommerceColumnzipcodeProps
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
                {props?.titleNineteen}
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
            className="!text-blue_gray-900 md:flex-1 font-publicsans font-semibold text-left text-sm w-[11%] md:w-full"
            placeholderClassName="!text-blue_gray-900"
            indicator={
              <Img
                className="h-4 w-4"
                src="images/img_arrowup_blue_gray_900.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="zipcode"
            options={zipcodeOptionsList}
            isSearchable={false}
            placeholder="2019"
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
              {props?.legendTwo}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="bg-amber-A700 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansMedium13Bluegray900"
            >
              {props?.legendThree}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-6 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
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
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[200px] inset-x-[0] items-center justify-end mx-auto pt-10 top-[0] w-[97%]"
                    style={{
                      backgroundImage: "url('images/img_chartarea.png')",
                    }}
                  >
                    <Img
                      className="h-40 md:h-auto object-cover"
                      alt="chartarea"
                      src={props?.chartarea}
                    />
                  </div>
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

HORIZONTALEcommerceColumnzipcode.defaultProps = {
  titleNineteen: "Yearly Sales",
  subtitle: "(+43%) than last year",
  legendTwo: "Total Income",
  legendThree: "Total Expenses",
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
  chartarea: "images/img_chartarea_amber_a700.png",
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

export default HORIZONTALEcommerceColumnzipcode;
