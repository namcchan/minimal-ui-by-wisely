import React from "react";

import { Button, Img, List, Text } from "components";

type TourDetailsColumncountryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "country"
  | "text"
  | "textOne"
  | "textTwo"
  | "language"
  | "languageOne"
  | "textThree"
  | "language1"
  | "text1"
  | "text2"
  | "textone1"
  | "text3"
  | "duration"
  | "text4"
  | "textone2"
  | "textFour"
  | "descriptionOne"
  | "textFive"
  | "descriptionTwo"
  | "textSix"
  | "daycounter"
  | "descriptionThree"
  | "daycounterOne"
  | "descriptionFour"
  | "daycounterTwo"
  | "descriptionFive"
  | "textSeven"
  | "text5"
  | "textone3"
  | "texttwo1"
  | "textthree1"
  | "textfour1"
  | "text6"
  | "textone4"
  | "texttwo2"
  | "textthree2"
  | "textfour2"
> &
  Partial<{
    country: string;
    text: string;
    textOne: string;
    textTwo: string;
    language: string;
    languageOne: JSX.Element | string;
    textThree: string;
    language1: string;
    text1: string;
    text2: string;
    textone1: string;
    text3: string;
    duration: string;
    text4: string;
    textone2: string;
    textFour: string;
    descriptionOne: string;
    textFive: string;
    descriptionTwo: JSX.Element | string;
    textSix: string;
    daycounter: string;
    descriptionThree: string;
    daycounterOne: string;
    descriptionFour: string;
    daycounterTwo: string;
    descriptionFive: string;
    textSeven: string;
    text5: string;
    textone3: string;
    texttwo1: string;
    textthree1: string;
    textfour1: string;
    text6: string;
    textone4: string;
    texttwo2: string;
    textthree2: string;
    textfour2: string;
  }>;

const TourDetailsColumncountry: React.FC<TourDetailsColumncountryProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-row gap-6 items-center justify-between w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
              size="txtPublicSansBold24"
            >
              {props?.country}
            </Text>
            <div className="flex flex-row items-start justify-start w-auto">
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_share_blue_gray_500.svg"
                  alt="share"
                />
              </Button>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_favorite_deep_orange_500.svg"
                  alt="favorite"
                />
              </Button>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full">
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_star_amber_a700.svg"
                alt="star"
              />
              <Text
                className="text-blue_gray-900 text-center text-sm w-auto"
                size="txtPublicSansSemiBold14"
              >
                {props?.text}
              </Text>
              <Text
                className="text-blue_gray-500 text-center text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.textOne}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_location_deep_orange_500.svg"
                alt="location"
              />
              <Text
                className="text-blue_gray-900 text-center text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.textTwo}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_iconssolidic_cyan_a700.svg"
                alt="iconssolidic"
              />
              <div className="flex flex-row items-center justify-start w-auto">
                <Text
                  className="text-blue_gray-500 text-center text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.language}
                </Text>
                {props?.languageOne}
              </div>
            </div>
          </div>
        </div>
        <Img
          className="h-px w-full"
          src="images/img_divider_blue_gray_300_1x587.svg"
          alt="divider"
        />
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-lg w-auto"
            size="txtPublicSansBold18Bluegray900"
          >
            {props?.textThree}
          </Text>
          <List
            className="flex flex-col gap-6 justify-start w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
              <Img
                className="h-5 w-5"
                src="images/img_iconssolidic_blue_gray_900_20x20.svg"
                alt="iconssolidic"
              />
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.language1}
                </Text>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.text1}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
              <Img
                className="h-5 w-5"
                src="images/img_iconssolidic_20x20.svg"
                alt="iconssolidic"
              />
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.text2}
                </Text>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.textone1}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
              <Img
                className="h-5 w-5"
                src="images/img_clock_blue_gray_900.svg"
                alt="clock"
              />
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.text3}
                </Text>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.duration}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-3 items-start justify-start my-0 w-full">
              <Img
                className="h-5 w-5"
                src="images/img_call_blue_gray_900.svg"
                alt="call"
              />
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.text4}
                </Text>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.textone2}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <Img
          className="h-px w-full"
          src="images/img_divider_blue_gray_300_1x587.svg"
          alt="divider_One"
        />
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-lg w-auto"
            size="txtPublicSansBold18Bluegray900"
          >
            {props?.textFour}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[587px] md:max-w-full text-base text-blue_gray-900"
            size="txtPublicSansRegular16Bluegray900"
          >
            {props?.descriptionOne}
          </Text>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-lg w-auto"
            size="txtPublicSansBold18Bluegray900"
          >
            {props?.textFive}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[587px] md:max-w-full text-base text-blue_gray-900"
            size="txtPublicSansRegular16Bluegray900"
          >
            {props?.descriptionTwo}
          </Text>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-lg w-auto"
            size="txtPublicSansBold18Bluegray900"
          >
            {props?.textSix}
          </Text>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.daycounter}
            </Text>
            <Text
              className="leading-[24.00px] max-w-[587px] md:max-w-full text-base text-blue_gray-900"
              size="txtPublicSansRegular16Bluegray900"
            >
              {props?.descriptionThree}
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.daycounterOne}
            </Text>
            <Text
              className="leading-[24.00px] max-w-[587px] md:max-w-full text-base text-blue_gray-900"
              size="txtPublicSansRegular16Bluegray900"
            >
              {props?.descriptionFour}
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.daycounterTwo}
            </Text>
            <Text
              className="leading-[24.00px] max-w-[587px] md:max-w-full text-base text-blue_gray-900"
              size="txtPublicSansRegular16Bluegray900"
            >
              {props?.descriptionFive}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-blue_gray-900 text-lg w-auto"
            size="txtPublicSansBold18Bluegray900"
          >
            {props?.textSeven}
          </Text>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_2.svg"
                  alt="checkmark"
                />
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtPublicSansRegular16Bluegray900"
                >
                  {props?.text5}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_2.svg"
                  alt="checkmark_One"
                />
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtPublicSansRegular16Bluegray900"
                >
                  {props?.textone3}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_blue_gray_300.svg"
                  alt="checkmark_Two"
                />
                <Text
                  className="text-base text-blue_gray-300 w-auto"
                  size="txtPublicSansRegular16Bluegray300"
                >
                  {props?.texttwo1}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_blue_gray_300.svg"
                  alt="checkmark_Three"
                />
                <Text
                  className="text-base text-blue_gray-300 w-auto"
                  size="txtPublicSansRegular16Bluegray300"
                >
                  {props?.textthree1}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_blue_gray_300.svg"
                  alt="checkmark_Four"
                />
                <Text
                  className="text-base text-blue_gray-300 w-auto"
                  size="txtPublicSansRegular16Bluegray300"
                >
                  {props?.textfour1}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_2.svg"
                  alt="checkmark"
                />
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtPublicSansRegular16Bluegray900"
                >
                  {props?.text6}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_2.svg"
                  alt="checkmark_One"
                />
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtPublicSansRegular16Bluegray900"
                >
                  {props?.textone4}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_blue_gray_300.svg"
                  alt="checkmark_Two"
                />
                <Text
                  className="text-base text-blue_gray-300 w-auto"
                  size="txtPublicSansRegular16Bluegray300"
                >
                  {props?.texttwo2}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_blue_gray_300.svg"
                  alt="checkmark_Three"
                />
                <Text
                  className="text-base text-blue_gray-300 w-auto"
                  size="txtPublicSansRegular16Bluegray300"
                >
                  {props?.textthree2}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_blue_gray_300.svg"
                  alt="checkmark_Four"
                />
                <Text
                  className="text-base text-blue_gray-300 w-auto"
                  size="txtPublicSansRegular16Bluegray300"
                >
                  {props?.textfour2}
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

TourDetailsColumncountry.defaultProps = {
  country: "Estonia City Tour",
  text: "4.6",
  textOne: "(234 reviews)",
  textTwo: "Tokyo, Jappan",
  language: "Guide by ",
  languageOne: (
    <Text
      className="text-blue_gray-900 text-center text-sm w-auto"
      size="txtPublicSansSemiBold14"
    >
      <span className="text-blue_gray-900 font-publicsans font-semibold">
        {" "}
        Kevin Francis,{" "}
      </span>
      <span className="text-blue_gray-900 font-publicsans font-semibold">
        {" "}
        Lucian Obrien
      </span>
    </Text>
  ),
  textThree: "Overview",
  language1: "Available ",
  text1: "03/01/2019 - 01/30/2023",
  text2: "Contact name",
  textone1: "Kevin Francis",
  text3: "Durations",
  duration: "4 days 3 nights",
  text4: "Contact phone",
  textone2: "(308) 555-0121",
  textFour: "Description",
  descriptionOne:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  textFive: "Highlights",
  descriptionTwo: (
    <>
      A fermentum in morbi pretium aliquam adipiscing donec tempus.
      <br />
      Vulputate placerat amet pulvinar lorem nisl.
      <br />
      Consequat feugiat habitant gravida quisque elit bibendum id adipiscing
      sed.
      <br />
      Etiam duis lobortis in fames ultrices commodo nibh.
    </>
  ),
  textSix: "Program",
  daycounter: "Day 1",
  descriptionThree:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  daycounterOne: "Day 2",
  descriptionFour:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  daycounterTwo: "Day 3",
  descriptionFive:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  textSeven: "Services",
  text5: "Audio guide",
  textone3: "Food and drinks",
  texttwo1: "Lunch",
  textthree1: "Private tour",
  textfour1: "Special activities",
  text6: "Entrance fees",
  textone4: "Gratuities",
  texttwo2: "Pick-up and drop off",
  textthree2: "Professional guide",
  textfour2: "Transport by air-conditioned",
};

export default TourDetailsColumncountry;
