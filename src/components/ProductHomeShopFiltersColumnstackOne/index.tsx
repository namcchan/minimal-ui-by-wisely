import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";

type ProductHomeShopFiltersColumnstackOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "genderOne"
  | "label"
  | "label1"
  | "label2"
  | "categoryOne"
  | "label3"
  | "label4"
  | "label5"
  | "colour"
  | "priceTwelve"
  | "text"
  | "textOne"
  | "textTwo"
  | "twohundred"
  | "textThree"
  | "textFour"
  | "priceThirteen"
  | "textFive"
  | "textSix"
  | "textSeven"
  | "textEight"
  | "textNine"
  | "rating"
  | "labelFive"
  | "labelSix"
  | "labelSeven"
  | "labelEight"
> &
  Partial<{
    genderOne: string;
    label: string;
    label1: string;
    label2: string;
    categoryOne: string;
    label3: string;
    label4: string;
    label5: string;
    colour: string;
    priceTwelve: string;
    text: string;
    textOne: string;
    textTwo: string;
    twohundred: string;
    textThree: string;
    textFour: string;
    priceThirteen: string;
    textFive: string;
    textSix: string;
    textSeven: string;
    textEight: string;
    textNine: string;
    rating: string;
    labelFive: string;
    labelSix: string;
    labelSeven: string;
    labelEight: string;
  }>;

const ProductHomeShopFiltersColumnstackOne: React.FC<
  ProductHomeShopFiltersColumnstackOneProps
> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          backgroundImage: "url('images/img_ecommerceproductfilters.svg')",
        }}
      >
        <div className="flex flex-col gap-6 h-full items-center justify-start w-full">
          <Input
            name="stack_One"
            placeholder="Filters"
            className="!placeholder:text-blue_gray-900 !text-blue_gray-900 font-bold font-publicsans p-0 text-left text-lg w-full"
            wrapClassName="flex w-full"
            suffix={
              <Img
                className="h-5 ml-[35px] my-px"
                src="images/img_refresh.svg"
                alt="refresh"
              />
            }
            shape="square"
            color="blue_gray_300_33"
            size="md"
            variant="outline"
          ></Input>
          <div className="flex flex-col gap-2 items-start justify-start px-5 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-full"
              size="txtPublicSansSemiBold14"
            >
              {props?.genderOne}
            </Text>
            <List
              className="flex flex-col items-start w-auto"
              orientation="vertical"
            >
              <div className="flex flex-row items-center justify-start my-0 w-auto">
                <div className="flex flex-col items-center justify-center p-2 w-9">
                  <Img
                    className="h-5 w-5"
                    src="images/img_checkmark_teal_500_20x20.svg"
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.label}
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start my-0 w-auto">
                <div className="flex flex-col items-center justify-center p-2 w-9">
                  <Img
                    className="h-5 w-5"
                    src="images/img_clock_blue_gray_500.svg"
                    alt="clock"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.label1}
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start my-0 w-auto">
                <div className="flex flex-col items-center justify-center p-2 w-9">
                  <Img
                    className="h-5 w-5"
                    src="images/img_clock_blue_gray_500.svg"
                    alt="clock"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.label2}
                </Text>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start px-5 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-full"
              size="txtPublicSansSemiBold14"
            >
              {props?.categoryOne}
            </Text>
            <List
              className="flex flex-col items-start w-auto"
              orientation="vertical"
            >
              <div className="flex flex-row items-center justify-start my-0 w-auto">
                <div className="flex flex-col items-start justify-start p-2 w-9">
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconssolidicradioon_teal_500.svg"
                    alt="iconssolidicrad"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.label3}
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start my-0 w-auto">
                <div className="flex flex-col items-start justify-start p-2 w-9">
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconssolidicradiooff.svg"
                    alt="iconssolidicrad"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.label4}
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start my-0 w-auto">
                <div className="flex flex-col items-start justify-start p-2 w-9">
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconssolidicradiooff.svg"
                    alt="iconssolidicrad"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.label5}
                </Text>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start px-5 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-full"
              size="txtPublicSansSemiBold14"
            >
              {props?.colour}
            </Text>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row items-end justify-start w-auto">
                <div className="h-9 md:h-auto relative w-9">
                  <div className="bg-teal-500 h-[26px] m-auto outline outline-[2px] outline-teal-500_14 rounded-[50%] shadow-bs16 w-[26px]"></div>
                  <Img
                    className="absolute h-[18px] inset-[0] justify-center m-auto w-[18px]"
                    src="images/img_checkmark_white_a700.svg"
                    alt="checkmark"
                  />
                </div>
                <Img
                  className="h-9 w-9"
                  src="images/img_close_cyan_a700_36x36.svg"
                  alt="close_One"
                />
                <Img
                  className="h-9 w-9"
                  src="images/img_brightness.svg"
                  alt="brightness"
                />
                <Img
                  className="h-9 w-9"
                  src="images/img_signal_amber_a700.svg"
                  alt="signal_Two"
                />
              </div>
              <div className="flex flex-row items-center justify-start w-auto">
                <Img className="h-9 w-9" src="images/img_save.svg" alt="save" />
                <Img
                  className="h-9 w-9"
                  src="images/img_checkmark_red_900.svg"
                  alt="checkmark_One"
                />
                <List
                  className="sm:flex-col flex-row gap-px grid grid-cols-2 w-1/2"
                  orientation="horizontal"
                >
                  <div className="h-9 md:h-auto relative w-full">
                    <div className="bg-deep_purple-A200_01 h-[26px] m-auto outline outline-[2px] outline-deep_purple-A200_14 rounded-[50%] shadow-bs17 w-[26px]"></div>
                    <Img
                      className="absolute h-[18px] inset-[0] justify-center m-auto w-[18px]"
                      src="images/img_checkmark_white_a700.svg"
                      alt="checkmark"
                    />
                  </div>
                  <div className="h-9 md:h-auto relative w-full">
                    <div className="bg-black-900 h-[26px] m-auto outline outline-[2px] outline-black-900_14 rounded-[50%] shadow-bs18 w-[26px]"></div>
                    <Img
                      className="absolute h-[18px] inset-[0] justify-center m-auto w-[18px]"
                      src="images/img_checkmark_white_a700.svg"
                      alt="checkmark"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start px-5 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-full"
              size="txtPublicSansSemiBold14"
            >
              {props?.priceTwelve}
            </Text>
            <div className="flex flex-col relative w-full">
              <div className="flex flex-row gap-6 items-center justify-between mt-[-NaNpx] mx-auto w-60 z-[1]">
                <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                  <Text
                    className="flex-1 text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansSemiBold14Bluegray300"
                  >
                    {props?.text}
                  </Text>
                  <div className="bg-blue_gray-300_14 flex flex-col items-center justify-start px-2 py-1.5 rounded-md w-12">
                    <Text
                      className="text-blue_gray-900 text-right text-sm w-auto"
                      size="txtPublicSansRegular14"
                    >
                      {props?.textOne}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                  <Text
                    className="flex-1 text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansSemiBold14Bluegray300"
                  >
                    {props?.textTwo}
                  </Text>
                  <Button
                    className="!text-blue_gray-900 cursor-pointer font-publicsans rounded-md text-center text-sm w-12"
                    shape="round"
                    color="blue_gray_300_14"
                    size="md"
                    variant="fill"
                  >
                    {props?.twohundred}
                  </Button>
                </div>
              </div>
              <div className="h-11 mt-[-16px] mx-auto w-full z-[1]">
                <div className="flex flex-col gap-[-2px] items-center justify-center mb-[-12px] mt-auto w-auto z-[1]">
                  <div className="flex flex-col items-center justify-start w-[27px]">
                    <div className="bg-blue_gray-900 flex flex-col items-start justify-start px-1.5 py-[3px] rounded w-auto">
                      <Text
                        className="text-center text-white-A700 text-xs"
                        size="txtPublicSansRegular12WhiteA700"
                      >
                        {props?.textThree}
                      </Text>
                    </div>
                    <Img
                      className="h-1 w-2"
                      src="images/img_arrow.svg"
                      alt="arrow"
                    />
                  </div>
                  <div className="h-3 relative w-[91%]">
                    <Line className="absolute bg-teal-500 h-0.5 inset-y-[0] left-[0] my-auto rounded-[1px] w-[86%]" />
                    <div className="absolute bg-teal-500 h-3 inset-y-[0] my-auto right-[0] rounded-[50%] w-3"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-[-2px] items-center justify-end mb-[-12px] ml-auto mt-auto w-auto z-[1]">
                  <div className="flex flex-col items-center justify-start w-7">
                    <div className="bg-blue_gray-900 flex flex-col items-start justify-start px-1.5 py-[3px] rounded w-auto">
                      <Text
                        className="text-center text-white-A700 text-xs"
                        size="txtPublicSansRegular12WhiteA700"
                      >
                        {props?.textFour}
                      </Text>
                    </div>
                    <Img
                      className="h-1 w-2"
                      src="images/img_arrow.svg"
                      alt="arrow_One"
                    />
                  </div>
                  <div className="flex relative w-[90%]">
                    <div className="bg-teal-500 h-3 ml-[undefinedpx] my-auto rounded-[50%] w-3 z-[1]"></div>
                    <Line className="bg-teal-500 h-0.5 ml-[-2px] my-auto rounded-[1px] w-[86%] z-[1]" />
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start mt-auto mx-auto py-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_group102.svg')" }}
                >
                  <Line className="bg-teal-500_77 h-0.5 rounded-[1px] w-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-start justify-between w-full">
              <Text
                className="text-blue_gray-300 text-xs"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.priceThirteen}
              </Text>
              <Text
                className="text-blue_gray-300 text-xs"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.textFive}
              </Text>
              <Text
                className="text-blue_gray-300 text-xs"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.textSix}
              </Text>
              <Text
                className="text-blue_gray-300 text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.textSeven}
              </Text>
              <Text
                className="text-blue_gray-300 text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.textEight}
              </Text>
              <Text
                className="text-blue_gray-300 text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.textNine}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start px-5 w-full">
            <Text
              className="text-blue_gray-900 text-sm w-full"
              size="txtPublicSansSemiBold14"
            >
              {props?.rating}
            </Text>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <RatingBar
                className="flex justify-between w-[120px]"
                value={1}
                starCount={5}
                size={24}
              ></RatingBar>
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.labelFive}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <RatingBar
                className="flex justify-between w-[120px]"
                value={1}
                starCount={5}
                size={24}
              ></RatingBar>
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.labelSix}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <RatingBar
                className="flex justify-between w-[120px]"
                value={1}
                starCount={5}
                size={24}
              ></RatingBar>
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.labelSeven}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <RatingBar
                className="flex justify-between w-[120px]"
                value={1}
                starCount={5}
                size={24}
              ></RatingBar>
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.labelEight}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductHomeShopFiltersColumnstackOne.defaultProps = {
  genderOne: "Gender",
  label: "Men",
  label1: "Women",
  label2: "Kids",
  categoryOne: "Category",
  label3: "Shose",
  label4: "Apparel",
  label5: "Accessories",
  colour: "Color",
  priceTwelve: "Price",
  text: "Min ($)",
  textOne: "0",
  textTwo: "Max ($)",
  twohundred: "200",
  textThree: "20",
  textFour: "80",
  priceThirteen: "$0",
  textFive: "40",
  textSix: "80",
  textSeven: "120",
  textEight: "160",
  textNine: "200",
  rating: "Rating",
  labelFive: "& Up",
  labelSix: "& Up",
  labelSeven: "& Up",
  labelEight: "& Up",
};

export default ProductHomeShopFiltersColumnstackOne;
