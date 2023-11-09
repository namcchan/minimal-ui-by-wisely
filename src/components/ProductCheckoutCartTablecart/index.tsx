import React from "react";

import { Button, Img, Input, Line, Text } from "components";

type ProductCheckoutCartTablecartProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleOne"
  | "thtext"
  | "thtextOne"
  | "thtextTwo"
  | "producttitleone"
  | "tabletdone"
  | "nine"
  | "priceOne"
  | "one"
  | "availableCounter"
  | "priceTwo"
  | "producttitletwo"
  | "tabletdoneOne"
  | "five"
  | "priceThree"
  | "oneOne"
  | "availableCounterOne"
  | "priceFour"
  | "producttitlethree"
  | "tabletdoneTwo"
  | "seven"
  | "priceFive"
  | "oneTwo"
  | "availableCounterTwo"
  | "priceSix"
> &
  Partial<{
    titleOne: string;
    thtext: string;
    thtextOne: string;
    thtextTwo: string;
    producttitleone: string;
    tabletdone: string;
    nine: string;
    priceOne: string;
    one: string;
    availableCounter: string;
    priceTwo: string;
    producttitletwo: string;
    tabletdoneOne: string;
    five: string;
    priceThree: string;
    oneOne: string;
    availableCounterOne: string;
    priceFour: string;
    producttitlethree: string;
    tabletdoneTwo: string;
    seven: string;
    priceFive: string;
    oneTwo: string;
    availableCounterTwo: string;
    priceSix: string;
  }>;

const ProductCheckoutCartTablecart: React.FC<
  ProductCheckoutCartTablecartProps
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
                {props?.titleOne}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[712px] w-full">
          <Input
            name="tablecell"
            placeholder="Product"
            className="!placeholder:text-blue_gray-500 !text-blue_gray-500 font-publicsans font-semibold p-0 text-left text-sm w-full"
            wrapClassName="md:flex-1 w-[45%] md:w-full"
            shape="square"
            color="gray_100"
            size="sm"
            variant="fill"
          ></Input>
          <div className="bg-gray-100 flex flex-col items-center justify-start w-[100px]">
            <div className="flex flex-col items-center justify-start p-4 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.thtext}
              </Text>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start w-[130px]">
            <div className="flex flex-col items-center justify-start p-4 w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.thtextOne}
              </Text>
            </div>
          </div>
          <div className="h-14 relative w-[103px]">
            <div className="absolute bg-gray-100 h-14 inset-[0] m-auto w-[98%]"></div>
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-end m-auto p-4 w-auto">
              <Text
                className="text-blue_gray-500 text-right text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.thtextTwo}
              </Text>
            </div>
          </div>
          <div className="bg-gray-100 h-14 w-[10%]"></div>
        </div>
        <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[712px] w-full">
          <div className="flex flex-1 flex-row gap-4 items-center justify-start p-4 w-full">
            <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-16">
              <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                <Img
                  className="md:h-auto h-full object-cover rounded-[12px] w-full"
                  src="images/img_imgproducts1.png"
                  alt="imgproductsOne"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.producttitleone}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    {props?.tabletdone}
                  </Text>
                  <Button
                    className="!text-blue_gray-500 cursor-pointer font-bold font-publicsans h-6 rounded-md text-center text-xs w-6"
                    shape="round"
                    color="blue_gray_300_28"
                    size="xs"
                    variant="fill"
                  >
                    {props?.nine}
                  </Button>
                </div>
                <Line className="bg-blue_gray-300_33 border border-blue_gray-300_33 border-solid h-4 w-px" />
                <Img
                  className="h-[18px] w-[42px]"
                  src="images/img_stack_white_a700_18x42.svg"
                  alt="stack"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[100px]">
            <div className="flex flex-col items-center justify-end py-4 w-auto">
              <div className="flex flex-col items-start justify-center px-4 w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.priceOne}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start px-4 w-[130px]">
            <div className="flex flex-col gap-2 items-end justify-start w-auto">
              <div className="border border-blue_gray-300_33 border-solid flex flex-row items-center justify-between p-1 rounded-lg w-[88px]">
                <div className="flex flex-col h-[26px] md:h-auto items-center justify-center w-[26px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_menu_blue_gray_500_16x16.svg"
                    alt="menu"
                  />
                </div>
                <Text
                  className="flex-1 text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.one}
                </Text>
                <div className="flex flex-col h-[26px] md:h-auto items-center justify-center w-[26px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_plus_blue_gray_500.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <Text
                className="text-blue_gray-500 text-right text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.availableCounter}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end w-[100px]">
            <div className="flex flex-col items-center justify-end py-4 w-auto">
              <div className="flex flex-col items-start justify-center px-4 w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.priceTwo}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end p-4 w-[68px]">
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_trash_blue_gray_500.svg"
                alt="trash"
              />
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 border-b border-blue_gray-300_33 border-dashed flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[712px] w-full">
          <div className="flex flex-1 flex-row gap-4 items-center justify-start p-4 w-full">
            <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-16">
              <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                <Img
                  className="md:h-auto h-full object-cover rounded-[12px] w-full"
                  src="images/img_imgproducts2.png"
                  alt="imgproductsTwo"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.producttitletwo}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    {props?.tabletdoneOne}
                  </Text>
                  <Button
                    className="!text-blue_gray-500 cursor-pointer font-bold font-publicsans h-6 rounded-md text-center text-xs w-6"
                    shape="round"
                    color="blue_gray_300_28"
                    size="xs"
                    variant="fill"
                  >
                    {props?.five}
                  </Button>
                </div>
                <Line className="bg-blue_gray-300_33 border border-blue_gray-300_33 border-solid h-4 w-px" />
                <Img
                  className="h-[18px] w-[30px]"
                  src="images/img_search_white_a700.svg"
                  alt="search"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[100px]">
            <div className="flex flex-col items-center justify-end py-4 w-auto">
              <div className="flex flex-col items-start justify-center px-4 w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.priceThree}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start px-4 w-[130px]">
            <div className="flex flex-col gap-2 items-end justify-start w-auto">
              <div className="border border-blue_gray-300_33 border-solid flex flex-row items-center justify-between p-1 rounded-lg w-[88px]">
                <div className="flex flex-col h-[26px] md:h-auto items-center justify-center w-[26px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_menu_blue_gray_500_16x16.svg"
                    alt="menu_One"
                  />
                </div>
                <Text
                  className="flex-1 text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.oneOne}
                </Text>
                <div className="flex flex-col h-[26px] md:h-auto items-center justify-center w-[26px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_plus_blue_gray_500.svg"
                    alt="plus_One"
                  />
                </div>
              </div>
              <Text
                className="text-blue_gray-500 text-right text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.availableCounterOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end w-[100px]">
            <div className="flex flex-col items-center justify-end py-4 w-auto">
              <div className="flex flex-col items-start justify-center px-4 w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.priceFour}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end p-4 w-[68px]">
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_trash_blue_gray_500.svg"
                alt="trash_One"
              />
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[712px] w-full">
          <div className="flex flex-1 flex-row gap-4 items-center justify-start p-4 w-full">
            <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-16">
              <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                <Img
                  className="md:h-auto h-full object-cover rounded-[12px] w-full"
                  src="images/img_imgproducts3.png"
                  alt="imgproductsThree"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansSemiBold14"
              >
                {props?.producttitlethree}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    {props?.tabletdoneTwo}
                  </Text>
                  <Button
                    className="!text-blue_gray-500 cursor-pointer font-bold font-publicsans h-6 rounded-md text-center text-xs w-6"
                    shape="round"
                    color="blue_gray_300_28"
                    size="xs"
                    variant="fill"
                  >
                    {props?.seven}
                  </Button>
                </div>
                <Line className="bg-blue_gray-300_33 border border-blue_gray-300_33 border-solid h-4 w-px" />
                <Img
                  className="h-[18px] w-[30px]"
                  src="images/img_computer_white_a700_18x30.svg"
                  alt="computer"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[100px]">
            <div className="flex flex-col items-center justify-end py-4 w-auto">
              <div className="flex flex-col items-start justify-center px-4 w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.priceFive}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start px-4 w-[130px]">
            <div className="flex flex-col gap-2 items-end justify-start w-auto">
              <div className="border border-blue_gray-300_33 border-solid flex flex-row items-center justify-between p-1 rounded-lg w-[88px]">
                <div className="flex flex-col h-[26px] md:h-auto items-center justify-center w-[26px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_menu_blue_gray_500_16x16.svg"
                    alt="menu_Two"
                  />
                </div>
                <Text
                  className="flex-1 text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.oneTwo}
                </Text>
                <div className="flex flex-col h-[26px] md:h-auto items-center justify-center w-[26px]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_plus_blue_gray_500.svg"
                    alt="plus_Two"
                  />
                </div>
              </div>
              <Text
                className="text-blue_gray-500 text-right text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.availableCounterTwo}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end w-[100px]">
            <div className="flex flex-col items-center justify-end py-4 w-auto">
              <div className="flex flex-col items-start justify-center px-4 w-auto">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.priceSix}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end p-4 w-[68px]">
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_trash_blue_gray_500.svg"
                alt="trash_Two"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCheckoutCartTablecart.defaultProps = {
  titleOne: "Cart (3)",
  thtext: "Price",
  thtextOne: "Quantity",
  thtextTwo: "Total Price",
  producttitleone: "Nike Air Force 1 NDESTRUKT",
  tabletdone: "size:",
  nine: "9",
  priceOne: "$17.42",
  one: "1",
  availableCounter: "Available: 2",
  priceTwo: "$83.08",
  producttitletwo: "Foundations Matte Flip Flop",
  tabletdoneOne: "size:",
  five: "5",
  priceThree: "$60.96",
  oneOne: "1",
  availableCounterOne: "Available: 2",
  priceFour: "$65.80",
  producttitlethree: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
  tabletdoneTwo: "size:",
  seven: "7",
  priceFive: "$16.19",
  oneTwo: "1",
  availableCounterTwo: "Available: 2",
  priceSix: "$78.83",
};

export default ProductCheckoutCartTablecart;
