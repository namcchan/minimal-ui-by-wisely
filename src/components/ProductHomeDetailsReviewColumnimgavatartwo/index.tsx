import React from "react";

import { Button, Img, List, RatingBar, Text } from "components";

type ProductHomeDetailsReviewColumnimgavatartwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "namefour"
  | "date"
  | "verifiedpurchasOne"
  | "text"
  | "label"
  | "labelOne"
  | "namethree"
  | "date1"
  | "verifiedpurchasone1"
  | "description"
  | "label1"
  | "labelone1"
  | "nametwo"
  | "date2"
  | "description1"
  | "label2"
  | "labelone2"
  | "nameone"
  | "date3"
  | "verifiedpurchasone2"
  | "description2"
  | "label3"
  | "labelone3"
  | "selected"
  | "two"
  | "three"
  | "four"
  | "five"
  | "twentyseven"
> &
  Partial<{
    namefour: string;
    date: string;
    verifiedpurchasOne: string;
    text: string;
    label: string;
    labelOne: string;
    namethree: string;
    date1: string;
    verifiedpurchasone1: string;
    description: string;
    label1: string;
    labelone1: string;
    nametwo: string;
    date2: string;
    description1: string;
    label2: string;
    labelone2: string;
    nameone: string;
    date3: string;
    verifiedpurchasone2: string;
    description2: string;
    label3: string;
    labelone3: string;
    selected: string;
    two: string;
    three: string;
    four: string;
    five: string;
    twentyseven: string;
  }>;

const ProductHomeDetailsReviewColumnimgavatartwo: React.FC<
  ProductHomeDetailsReviewColumnimgavatartwoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="flex flex-col gap-10 items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start pr-10 sm:pr-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-60">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-16">
                <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[50%] w-16">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_imgavatar2_64x64.png"
                    alt="imgavatarTwo"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namefour}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.date}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <RatingBar
                  className="flex justify-between w-[100px]"
                  value={1}
                  starCount={5}
                  size={20}
                ></RatingBar>
              </div>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark_32x32.svg"
                  alt="checkmark"
                />
                <Text
                  className="text-teal-500 text-xs w-auto"
                  size="txtPublicSansRegular12Teal500"
                >
                  {props?.verifiedpurchasOne}
                </Text>
              </div>
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansRegular14"
              >
                {props?.text}
              </Text>
              <List
                className="sm:flex-col flex-row gap-2 grid grid-cols-3 justify-start pt-2 w-auto"
                orientation="horizontal"
              >
                <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-full">
                  <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_imgproducts1.png"
                      alt="imgproductsOne"
                    />
                  </div>
                </div>
                <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-full">
                  <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_imgproducts2.png"
                      alt="imgproductsTwo"
                    />
                  </div>
                </div>
                <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-full">
                  <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_imgproducts3.png"
                      alt="imgproductsThree"
                    />
                  </div>
                </div>
              </List>
              <div className="flex flex-row gap-4 items-center justify-start pt-3 w-auto">
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_thumbsup_blue_gray_900.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray900"
                  >
                    {props?.label}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_airplane_blue_gray_900_16x16.svg"
                    alt="airplane"
                  />
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray900"
                  >
                    {props?.labelOne}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start pr-10 sm:pr-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-60">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-16">
                <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[50%] w-16">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_imgavatar3_64x64.png"
                    alt="imgavatarThree"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namethree}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.date1}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <RatingBar
                  className="flex justify-between w-[100px]"
                  value={1}
                  starCount={5}
                  size={20}
                ></RatingBar>
              </div>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark_32x32.svg"
                  alt="checkmark"
                />
                <Text
                  className="text-teal-500 text-xs w-auto"
                  size="txtPublicSansRegular12Teal500"
                >
                  {props?.verifiedpurchasone1}
                </Text>
              </div>
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansRegular14"
              >
                {props?.description}
              </Text>
              <div className="flex flex-row gap-4 items-center justify-start pt-3 w-auto">
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_thumbsup_blue_gray_900_16x16.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray900"
                  >
                    {props?.label1}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_airplane_blue_gray_900_16x16.svg"
                    alt="airplane"
                  />
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray900"
                  >
                    {props?.labelone1}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start pr-10 sm:pr-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-60">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-16">
                <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[50%] w-16">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_imgavatar4_64x64.png"
                    alt="imgavatarFour"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.nametwo}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.date2}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <RatingBar
                  className="flex justify-between w-[100px]"
                  value={1}
                  starCount={5}
                  size={20}
                ></RatingBar>
              </div>
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansRegular14"
              >
                {props?.description1}
              </Text>
              <div className="flex flex-row gap-2 items-start justify-start pt-2 w-auto">
                <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-16">
                  <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_imgproducts4_48x48.png"
                      alt="imgproductsFour"
                    />
                  </div>
                </div>
                <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[12px] w-16">
                  <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[12px] w-16">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_imgproducts5_48x48.png"
                      alt="imgproductsFive"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start pt-3 w-auto">
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_thumbsup_blue_gray_900_16x16.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray900"
                  >
                    {props?.label2}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_airplane_blue_gray_900_16x16.svg"
                    alt="airplane"
                  />
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray900"
                  >
                    {props?.labelone2}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start pr-10 sm:pr-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-60">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-16">
                <div className="flex flex-col h-16 md:h-auto items-center justify-center rounded-[50%] w-16">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_imgavatar5_64x64.png"
                    alt="imgavatarFive"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.nameone}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.date3}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <RatingBar
                  className="flex justify-between w-[100px]"
                  value={1}
                  starCount={5}
                  size={20}
                ></RatingBar>
              </div>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark_32x32.svg"
                  alt="checkmark"
                />
                <Text
                  className="text-teal-500 text-xs w-auto"
                  size="txtPublicSansRegular12Teal500"
                >
                  {props?.verifiedpurchasone2}
                </Text>
              </div>
              <Text
                className="text-blue_gray-900 text-sm w-full"
                size="txtPublicSansRegular14"
              >
                {props?.description2}
              </Text>
              <div className="flex flex-row gap-4 items-center justify-start pt-3 w-auto">
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_thumbsup_blue_gray_900_16x16.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray900"
                  >
                    {props?.label3}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-center w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_airplane_blue_gray_900_16x16.svg"
                    alt="airplane"
                  />
                  <Text
                    className="text-blue_gray-900 text-xs w-auto"
                    size="txtPublicSansRegular12Bluegray900"
                  >
                    {props?.labelone3}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
        <div className="flex flex-row gap-1.5 items-center justify-center w-full">
          <Button
            className="flex h-8 items-center justify-center rounded-[50%] w-8"
            shape="circle"
            size="md"
          >
            <Img
              className="h-5"
              src="images/img_arrowleft_blue_gray_500.svg"
              alt="arrowleft_One"
            />
          </Button>
          <Text
            className="bg-blue_gray-900 flex h-8 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-8"
            size="txtPublicSansSemiBold14WhiteA700"
          >
            {props?.selected}
          </Text>
          <Text
            className="text-base text-blue_gray-900 text-center w-2.5"
            size="txtPublicSansRegular16Bluegray900"
          >
            {props?.two}
          </Text>
          <Text
            className="text-base text-blue_gray-900 text-center w-2.5"
            size="txtPublicSansRegular16Bluegray900"
          >
            {props?.three}
          </Text>
          <Text
            className="text-base text-blue_gray-900 text-center w-2.5"
            size="txtPublicSansRegular16Bluegray900"
          >
            {props?.four}
          </Text>
          <Text
            className="text-base text-blue_gray-900 text-center w-2.5"
            size="txtPublicSansRegular16Bluegray900"
          >
            {props?.five}
          </Text>
          <Text
            className="text-blue_gray-900 text-center text-sm w-2.5"
            size="txtPublicSansRegular14"
          >
            {props?.twentyseven}
          </Text>
          <Button
            className="flex h-8 items-center justify-center rounded-[50%] w-8"
            shape="circle"
            size="md"
          >
            <Img
              className="h-5"
              src="images/img_arrowright.svg"
              alt="arrowright_One"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

ProductHomeDetailsReviewColumnimgavatartwo.defaultProps = {
  namefour: "Harrison Stein",
  date: "09 Aug 2022",
  verifiedpurchasOne: "Verified purchase",
  text: "Good Looking.........",
  label: "234",
  labelOne: "234",
  namethree: "Deja Brady",
  date1: "10 Sep 2022",
  verifiedpurchasone1: "Verified purchase",
  description:
    "Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the ",
  label1: "234",
  labelone1: "234",
  nametwo: "Lucian Obrien",
  date2: "11 Feb 2022",
  description1:
    "Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the ",
  label2: "234",
  labelone2: "234",
  nameone: "Jayvion Simon",
  date3: "12 Jan 2022",
  verifiedpurchasone2: "Verified purchase",
  description2:
    "Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the ",
  label3: "234",
  labelone3: "234",
  selected: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  twentyseven: "…",
};

export default ProductHomeDetailsReviewColumnimgavatartwo;
