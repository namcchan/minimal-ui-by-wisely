import React from "react";

import { Button, Img, List, RatingBar, Text } from "components";

type ProductDetailsProductdetailsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "thirtyfive"
  | "sale"
  | "newarrival"
  | "ae247activehoodone"
  | "labelOne"
  | "oldprice"
  | "price"
  | "description"
  | "color"
  | "size"
  | "p105"
  | "helpertext"
  | "quantity"
  | "one"
  | "availableCounter"
  | "addToCart"
  | "buyNow"
  | "compare"
  | "favoriteOne"
  | "share"
> &
  Partial<{
    thirtyfive: string;
    sale: string;
    newarrival: string;
    ae247activehoodone: string;
    labelOne: string;
    oldprice: string;
    price: string;
    description: string;
    color: string;
    size: string;
    p105: string;
    helpertext: string;
    quantity: string;
    one: string;
    availableCounter: string;
    addToCart: string;
    buyNow: string;
    compare: string;
    favoriteOne: string;
    share: string;
  }>;

const ProductDetailsProductdetails: React.FC<
  ProductDetailsProductdetailsProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
          <div className="flex flex-col sm:h-auto items-center justify-start w-[574px] sm:w-full">
            <div className="sm:h-auto relative rounded-[16px] w-[574px]">
              <Img
                className="absolute h-[574px] inset-[0] justify-center m-auto object-cover rounded-[16px] w-[574px] sm:w-full"
                src="images/img_imgproductl2.png"
                alt="imgproductlTwo"
              />
              <div className="absolute bottom-[0] flex flex-col items-center justify-start p-4 right-[0] w-auto">
                <div className="flex flex-col items-center justify-center rounded-lg w-auto">
                  <div className="bg-blue_gray-900 flex flex-row gap-0.5 items-center justify-start px-1 py-0.5 rounded-lg w-auto">
                    <Button
                      className="flex h-7 items-center justify-center rounded-[50%] w-7"
                      shape="circle"
                      size="sm"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_arrowleft_white_a700.svg"
                        alt="arrowleft_One"
                      />
                    </Button>
                    <Text
                      className="text-center text-sm text-white-A700 w-auto"
                      size="txtPublicSansSemiBold14WhiteA700"
                    >
                      {props?.thirtyfive}
                    </Text>
                    <Button
                      className="flex h-7 items-center justify-center rounded-[50%] w-7"
                      shape="circle"
                      size="sm"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_arrowright_white_a700.svg"
                        alt="arrowright_Six"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
            <div className="flex flex-col items-center justify-center rounded-[12px] w-16">
              <div className="h-16 md:h-auto relative rounded-[12px] w-16">
                <Img
                  className="h-full m-auto object-cover rounded-[12px] w-full"
                  src="images/img_imgproducts7.png"
                  alt="imgproductsSeven"
                />
                <div className="absolute bg-gradient4  h-16 inset-y-[0] left-[0] my-auto w-[63%]"></div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-4 grid grid-cols-3 w-[59%] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-center rounded-[12px] w-full">
                <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_imgproducts6.png"
                    alt="imgproductsSix"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center outline outline-[2px] outline-teal-500 rounded-[12px] w-full">
                <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_imgproducts2.png"
                    alt="imgproductsTwo"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-[12px] w-full">
                <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_imgproducts5_48x48.png"
                    alt="imgproductsFive"
                  />
                </div>
              </div>
            </List>
            <div className="flex flex-col items-center justify-center rounded-[12px] w-16">
              <div className="h-16 md:h-auto relative rounded-[12px] w-16">
                <Img
                  className="h-full m-auto object-cover rounded-[12px] w-full"
                  src="images/img_imgproducts4_48x48.png"
                  alt="imgproductsFour"
                />
                <div className="absolute bg-gradient4  h-16 inset-y-[0] my-auto right-[0] rotate-[180deg] w-[63%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start pt-6 w-[442px] sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Button
              className="!text-red-900 cursor-pointer font-bold font-publicsans h-6 min-w-[44px] rounded-md text-center text-xs"
              shape="round"
              color="deep_orange_500_28"
              size="xs"
              variant="fill"
            >
              {props?.sale}
            </Button>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-cyan-A700 text-xs uppercase w-auto"
                size="txtPublicSansBold12CyanA700"
              >
                {props?.newarrival}
              </Text>
              <Text
                className="text-blue_gray-900 text-xl w-full"
                size="txtPublicSansBold20"
              >
                {props?.ae247activehoodone}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <RatingBar
                className="flex justify-between w-[100px]"
                value={1}
                starCount={5}
                size={20}
              ></RatingBar>
              <Text
                className="text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.labelOne}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start w-auto">
              <Text
                className="line-through text-blue_gray-300 text-xl w-auto"
                size="txtPublicSansBold20Bluegray300"
              >
                {props?.oldprice}
              </Text>
              <Text
                className="text-blue_gray-900 text-xl w-auto"
                size="txtPublicSansBold20"
              >
                {props?.price}
              </Text>
            </div>
            <Text
              className="leading-[22.00px] max-w-[442px] md:max-w-full text-blue_gray-500 text-sm"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.description}
            </Text>
          </div>
          <Img
            className="h-px w-full"
            src="images/img_divider_blue_gray_300_1x442.svg"
            alt="divider"
          />
          <div className="flex flex-row items-start justify-between w-full">
            <Text
              className="flex-1 text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.color}
            </Text>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row items-end justify-start w-auto">
                <div className="h-9 md:h-auto relative w-9">
                  <div className="bg-teal-500 h-[26px] m-auto outline outline-[2px] outline-teal-500_14 rounded-[50%] shadow-bs16 w-[26px]"></div>
                  <Img
                    className="absolute h-[18px] inset-[0] justify-center m-auto w-[18px]"
                    src="images/img_checkmark_white_a700.svg"
                    alt="checkmark_One"
                  />
                </div>
                <Img
                  className="h-9 w-9"
                  src="images/img_close_cyan_a700_36x36.svg"
                  alt="close"
                />
                <Img
                  className="h-9 w-9"
                  src="images/img_brightness.svg"
                  alt="brightness"
                />
                <Img
                  className="h-9 w-9"
                  src="images/img_signal_amber_a700.svg"
                  alt="signal"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between w-full">
            <Text
              className="flex-1 text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.size}
            </Text>
            <div className="flex flex-col items-end justify-start w-[88px]">
              <Button
                className="cursor-pointer flex h-10 items-center justify-center w-full"
                rightIcon={
                  <Img
                    className="h-5 ml-[17px]"
                    src="images/img_arrowdown_blue_gray_500.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="blue_gray_300_33"
                size="lg"
                variant="outline"
              >
                <div className="!text-blue_gray-900 font-publicsans text-left text-sm">
                  {props?.p105}
                </div>
              </Button>
              <div className="flex flex-col items-center justify-end pl-3 pt-2 w-full">
                <Text
                  className="text-blue_gray-900 text-xs underline w-auto"
                  size="txtPublicSansRegular12Bluegray900"
                >
                  {props?.helpertext}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between w-full">
            <Text
              className="flex-1 text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.quantity}
            </Text>
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
                className="text-blue_gray-900 text-right text-xs w-auto"
                size="txtPublicSansRegular12Bluegray900"
              >
                {props?.availableCounter}
              </Text>
            </div>
          </div>
          <Img
            className="h-px w-full"
            src="images/img_divider_blue_gray_300_1x442.svg"
            alt="divider_One"
          />
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[213px]"
              leftIcon={
                <Img
                  className="h-6 mr-2.5"
                  src="images/img_cart_blue_gray_900_24x24.svg"
                  alt="cart"
                />
              }
              shape="round"
              color="amber_A700"
              size="lg"
              variant="fill"
            >
              <div className="!text-blue_gray-900 font-bold font-publicsans text-[15px] text-left">
                {props?.addToCart}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold font-publicsans h-12 text-[15px] text-center w-full"
              shape="round"
              color="blue_gray_900"
              size="xl"
              variant="fill"
            >
              {props?.buyNow}
            </Button>
          </div>
          <div className="flex flex-row gap-6 items-center justify-center w-auto">
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_plus_blue_gray_500.svg"
                alt="plus_One"
              />
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.compare}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_favorite.svg"
                alt="favorite"
              />
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.favoriteOne}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_search_blue_gray_500.svg"
                alt="search_One"
              />
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.share}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductDetailsProductdetails.defaultProps = {
  thirtyfive: "3/5",
  sale: "SALE",
  newarrival: "New Arrival",
  ae247activehoodone: "AE 24/7 Active Hoodie With Gaiter",
  labelOne: "(11.78k reviews)",
  oldprice: " $82.97",
  price: " $62.97",
  description:
    "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
  color: "Color",
  size: "Size",
  p105: "10.5",
  helpertext: "Size Chart",
  quantity: "Quantity",
  one: "1",
  availableCounter: "Available: 6",
  addToCart: " Add to Cart",
  buyNow: "Buy Now",
  compare: "Compare",
  favoriteOne: "Favorite",
  share: "Share",
};

export default ProductDetailsProductdetails;
