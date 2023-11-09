import React from "react";

import { Img, List, Text } from "components";

type HORIZONTALBankingColumnunionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "title"
  | "categoryone"
  | "categorytwo"
  | "categorythree"
  | "categoryfour"
  | "categoryfive"
  | "categorycounter"
  | "categorycounterOne"
  | "categorycounterTwo"
  | "categorycounterThree"
  | "categorycounterFour"
  | "categorycounter1"
  | "categorycounterone1"
  | "categorycountertwo1"
  | "categorycounterthree1"
  | "categories"
  | "categorycount"
  | "totalexpenses"
  | "totalexpenses1"
> &
  Partial<{
    title: string;
    categoryone: string;
    categorytwo: string;
    categorythree: string;
    categoryfour: string;
    categoryfive: string;
    categorycounter: string;
    categorycounterOne: string;
    categorycounterTwo: string;
    categorycounterThree: string;
    categorycounterFour: string;
    categorycounter1: string;
    categorycounterone1: string;
    categorycountertwo1: string;
    categorycounterthree1: string;
    categories: string;
    categorycount: string;
    totalexpenses: string;
    totalexpenses1: string;
  }>;

const HORIZONTALBankingColumnunion: React.FC<
  HORIZONTALBankingColumnunionProps
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
                {props?.title}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-10 gap-20 items-center justify-start pb-10 pt-4 px-10 sm:px-5 w-full">
          <div className="h-60 md:h-[231px] relative rounded-[24px] w-60">
            <div className="absolute md:h-[231px] h-[235px] inset-[0] justify-center m-auto w-[97%]">
              <Img
                className="absolute h-[231px] inset-[0] justify-center m-auto w-[231px]"
                src="images/img_union.svg"
                alt="union"
              />
              <div className="absolute flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto top-[0]">
                <Text
                  className="h-[15px] text-blue_gray-900 text-center text-xs"
                  size="txtPublicSansRegular12Bluegray900"
                >
                  {props?.categoryone}
                </Text>
                <Text
                  className="text-blue_gray-900 text-center text-xs"
                  size="txtPublicSansRegular12Bluegray900"
                >
                  {props?.categorytwo}
                </Text>
                <Text
                  className="text-blue_gray-900 text-center text-xs"
                  size="txtPublicSansRegular12Bluegray900"
                >
                  {props?.categorythree}
                </Text>
                <Text
                  className="text-blue_gray-900 text-center text-xs"
                  size="txtPublicSansRegular12Bluegray900"
                >
                  {props?.categoryfour}
                </Text>
                <Text
                  className="text-blue_gray-900 text-center text-xs"
                  size="txtPublicSansRegular12Bluegray900"
                >
                  {props?.categoryfive}
                </Text>
              </div>
            </div>
            <Img
              className="absolute h-[170px] right-[5%] top-[10%]"
              src="images/img_stack_orange_900.svg"
              alt="stack"
            />
            <Img
              className="absolute h-[172px] right-[5%] top-[10%]"
              src="images/img_union_white_a700.svg"
              alt="union_One"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-10 grid grid-cols-2 justify-start w-auto"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="bg-teal-500 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansMedium13Bluegray900"
                >
                  {props?.categorycounter}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="bg-indigo-900_01 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansMedium13Bluegray900"
                >
                  {props?.categorycounterOne}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="bg-cyan-A700 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansMedium13Bluegray900"
                >
                  {props?.categorycounterTwo}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="bg-green-A700_01 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansMedium13Bluegray900"
                >
                  {props?.categorycounterThree}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="bg-deep_orange-500 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansMedium13Bluegray900"
                >
                  {props?.categorycounterFour}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="bg-amber-A700 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansMedium13Bluegray900"
                >
                  {props?.categorycounter1}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="bg-orange-900 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansMedium13Bluegray900"
                >
                  {props?.categorycounterone1}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="bg-teal-900_01 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansMedium13Bluegray900"
                >
                  {props?.categorycountertwo1}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <div className="bg-light_blue-900 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-[13px] text-blue_gray-900 w-auto"
                  size="txtPublicSansMedium13Bluegray900"
                >
                  {props?.categorycounterthree1}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start outline-blue_gray-300_33 outline-dashed w-full">
          <div className="flex flex-1 flex-col gap-2 items-center justify-start sm:px-5 px-6 py-4 w-full">
            <Text
              className="text-blue_gray-500 text-center text-sm w-auto"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.categories}
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
              size="txtPublicSansBold24"
            >
              {props?.categorycount}
            </Text>
          </div>
          <div className="border-blue_gray-300_33 border-dashed border-l flex flex-1 flex-col gap-2 items-center justify-start sm:px-5 px-6 py-4 w-full">
            <Text
              className="text-blue_gray-500 text-center text-sm w-auto"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.totalexpenses}
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
              size="txtPublicSansBold24"
            >
              {props?.totalexpenses1}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALBankingColumnunion.defaultProps = {
  title: "Expenses Categories",
  categoryone: "25",
  categorytwo: "20",
  categorythree: "15",
  categoryfour: "10",
  categoryfive: "5",
  categorycounter: "Category 1",
  categorycounterOne: "Category 2",
  categorycounterTwo: "Category 3",
  categorycounterThree: "Category 4",
  categorycounterFour: "Category 5",
  categorycounter1: "Category 6",
  categorycounterone1: "Category 7",
  categorycountertwo1: "Category 8",
  categorycounterthree1: "Category 9",
  categories: "Categories",
  categorycount: "9",
  totalexpenses: "Total expenses",
  totalexpenses1: "$18,765",
};

export default HORIZONTALBankingColumnunion;
