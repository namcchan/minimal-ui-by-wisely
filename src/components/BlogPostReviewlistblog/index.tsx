import React from "react";

import { Button, Img, Input, Text } from "components";

type BlogPostReviewlistblogProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "namerand"
  | "dateOne"
  | "labelTwo"
  | "descriptionThree"
  | "namerandOne"
  | "dateTwo"
  | "descriptionFour"
  | "namerandTwo"
  | "dateThree"
  | "labelThree"
  | "descriptionFive"
  | "namerandThree"
  | "dateFour"
  | "descriptionSix"
  | "namerandFour"
  | "dateFive"
  | "labelFour"
  | "descriptionSeven"
  | "selected"
  | "two"
  | "three"
  | "four"
  | "five"
  | "twentysix"
> &
  Partial<{
    namerand: string;
    dateOne: string;
    labelTwo: string;
    descriptionThree: string;
    namerandOne: string;
    dateTwo: string;
    descriptionFour: string;
    namerandTwo: string;
    dateThree: string;
    labelThree: string;
    descriptionFive: string;
    namerandThree: string;
    dateFour: string;
    descriptionSix: string;
    namerandFour: string;
    dateFive: string;
    labelFour: string;
    descriptionSeven: string;
    selected: string;
    two: string;
    three: string;
    four: string;
    five: string;
    twentysix: string;
  }>;

const BlogPostReviewlistblog: React.FC<BlogPostReviewlistblogProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start pt-6 w-full">
          <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-12">
            <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[50%] w-12">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_imgavatar1_9.png"
                alt="imgavatarOne_Two"
              />
            </div>
          </div>
          <div className="border-b border-blue_gray-300_33 border-solid flex flex-1 flex-col gap-2 items-start justify-start pb-6 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namerand}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.dateOne}
                </Text>
              </div>
              <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_edit_blue_gray_900.svg"
                  alt="edit"
                />
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansBold13"
                >
                  {props?.labelTwo}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[22.00px] max-w-[624px] md:max-w-full text-blue_gray-900 text-sm"
              size="txtPublicSansRegular14"
            >
              {props?.descriptionThree}
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start md:pl-10 pl-16 sm:pl-5 pt-6 w-full">
          <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-12">
            <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[50%] w-12">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_imgavatar2_48x48.png"
                alt="imgavatarTwo_One"
              />
            </div>
          </div>
          <div className="border-b border-blue_gray-300_33 border-solid flex flex-1 flex-col gap-2 items-start justify-start pb-6 w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansSemiBold14"
              >
                {props?.namerandOne}
              </Text>
              <Text
                className="text-blue_gray-300 text-center text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.dateTwo}
              </Text>
            </div>
            <Text
              className="leading-[22.00px] max-w-[560px] md:max-w-full text-blue_gray-900 text-sm"
              size="txtPublicSansRegular14"
            >
              {props?.descriptionFour}
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start pt-6 w-full">
          <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-12">
            <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[50%] w-12">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_imgavatar3_48x48.png"
                alt="imgavatarThree"
              />
            </div>
          </div>
          <div className="border-b border-blue_gray-300_33 border-solid flex flex-1 flex-col gap-2 items-start justify-start pb-6 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namerandTwo}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.dateThree}
                </Text>
              </div>
              <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_edit_blue_gray_900.svg"
                  alt="edit_One"
                />
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansBold13"
                >
                  {props?.labelThree}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[22.00px] max-w-[624px] md:max-w-full text-blue_gray-900 text-sm"
              size="txtPublicSansRegular14"
            >
              {props?.descriptionFive}
            </Text>
            <div className="flex flex-col items-start justify-start pt-2 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Input
                  name="wrap"
                  placeholder="Comment..."
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start md:pl-10 pl-16 sm:pl-5 pt-6 w-full">
          <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-12">
            <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[50%] w-12">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_imgavatar4_48x48.png"
                alt="imgavatarFour_One"
              />
            </div>
          </div>
          <div className="border-b border-blue_gray-300_33 border-solid flex flex-1 flex-col gap-2 items-start justify-start pb-6 w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansSemiBold14"
              >
                {props?.namerandThree}
              </Text>
              <Text
                className="text-blue_gray-300 text-center text-xs w-auto"
                size="txtPublicSansRegular12Bluegray300"
              >
                {props?.dateFour}
              </Text>
            </div>
            <Text
              className="leading-[22.00px] max-w-[560px] md:max-w-full text-blue_gray-900 text-sm"
              size="txtPublicSansRegular14"
            >
              {props?.descriptionSix}
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start pt-6 w-full">
          <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-12">
            <div className="flex flex-col h-12 md:h-auto items-center justify-center rounded-[50%] w-12">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-12"
                src="images/img_imgavatar5_1.png"
                alt="imgavatarFive"
              />
            </div>
          </div>
          <div className="border-b border-blue_gray-300_33 border-solid flex flex-1 flex-col gap-2 items-start justify-start pb-6 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namerandFour}
                </Text>
                <Text
                  className="text-blue_gray-300 text-center text-xs w-auto"
                  size="txtPublicSansRegular12Bluegray300"
                >
                  {props?.dateFive}
                </Text>
              </div>
              <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_edit_blue_gray_900.svg"
                  alt="edit_Two"
                />
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansBold13"
                >
                  {props?.labelFour}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[22.00px] max-w-[624px] md:max-w-full text-blue_gray-900 text-sm"
              size="txtPublicSansRegular14"
            >
              {props?.descriptionSeven}
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-1.5 items-end justify-center py-10 w-full">
          <Button
            className="flex h-8 items-center justify-center rounded-[50%] w-8"
            shape="circle"
            size="md"
          >
            <Img
              className="h-5"
              src="images/img_arrowleft_blue_gray_500.svg"
              alt="arrowleft"
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
            {props?.twentysix}
          </Text>
          <Button
            className="flex h-8 items-center justify-center rounded-[50%] w-8"
            shape="circle"
            size="md"
          >
            <Img
              className="h-5"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

BlogPostReviewlistblog.defaultProps = {
  namerand: "Janiya Williamson",
  dateOne: "28 Nov 2022",
  labelTwo: "Reply",
  descriptionThree:
    "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.",
  namerandOne: "Jaqueline Spencer",
  dateTwo: "08 Jun 2022",
  descriptionFour:
    "Simultaneously we had a problem with prisoner drunkenness that we couldn’t figure out. I mean , the guards searched cells multiple times to no avail. ",
  namerandTwo: "Reece Chung",
  dateThree: "18 Jul 2022",
  labelThree: "Reply",
  descriptionFive:
    "An average healthy 7 year old boy weighs about 50 lb (23 kg). If we suppose the same amount of alcohol as in a 150 lb adult, that might amount to 3.1 to 6.0 mg/L in the child’s body—still far below an intoxicating effect. ",
  namerandThree: "Jamie Kline",
  dateFour: "20 Apr 2022",
  descriptionSix:
    "Alcohol based exposures through inadvertently consuming hand sanitizer, have been observed to produce more negative side effects for children than non-alcohol based.",
  namerandFour: "Angelique Morse",
  dateFive: "07 Jul 2022",
  labelFour: "Reply",
  descriptionSeven:
    "In most states, the legal limit in blood alcohol to not be considered DUI is 500 to 1,000 mg/L. Therefore, this is way below a level considered to be intoxication. ",
  selected: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  twentysix: "…",
};

export default BlogPostReviewlistblog;
