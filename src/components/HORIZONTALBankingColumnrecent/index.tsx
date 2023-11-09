import React from "react";

import { Button, Img, Line, List, Text } from "components";

type HORIZONTALBankingColumnrecentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titletext"
  | "recent"
  | "viewalltext"
  | "insertamount"
  | "currencytext"
  | "amounttext"
  | "text"
  | "balancetext"
  | "balanceamounttext"
  | "transfernowtext"
> &
  Partial<{
    titletext: string;
    recent: string;
    viewalltext: string;
    insertamount: string;
    currencytext: string;
    amounttext: string;
    text: string;
    balancetext: string;
    balanceamounttext: string;
    transfernowtext: string;
  }>;

const HORIZONTALBankingColumnrecent: React.FC<
  HORIZONTALBankingColumnrecentProps
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
                {props?.titletext}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row items-center justify-between sm:pl-5 pl-6 pr-4 w-full">
            <Text
              className="flex-1 text-blue_gray-500 text-xs uppercase w-auto"
              size="txtPublicSansBold12Bluegray500"
            >
              {props?.recent}
            </Text>
            <div className="flex flex-row gap-2 items-center justify-center px-1 rounded-lg w-auto">
              <Text
                className="text-[13px] text-blue_gray-900 w-auto"
                size="txtPublicSansBold13"
              >
                {props?.viewalltext}
              </Text>
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_arrowright.svg"
                alt="arrowright_Eight"
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center py-10 w-[296px]">
            <div className="bg-gray-300_85 flex flex-col items-center justify-center rounded-[9px] w-auto">
              <div className="flex flex-col h-10 md:h-auto items-center justify-center w-[19px]">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                  src="images/img_avatar7.png"
                  alt="avatarSeven"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[30%]"
              orientation="horizontal"
            >
              <div className="bg-gray-300_85 flex flex-col items-center justify-center rounded-[50%] w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_imgavatar2_1.png"
                    alt="avatarTwo"
                  />
                </div>
              </div>
              <div className="bg-gray-300_85 flex flex-col items-center justify-center rounded-[50%] w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_imgavatar3.png"
                    alt="avatarThree"
                  />
                </div>
              </div>
            </List>
            <div className="h-16 relative w-16">
              <div className="absolute bg-gray-300 h-[50px] inset-[0] m-auto rounded-[50%] shadow-bs13 w-[50px]"></div>
              <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto w-16">
                <Img
                  className="h-16 md:h-auto rounded-[50%] w-16"
                  src="images/img_imgavatar1_64x64.png"
                  alt="imgavatarOne_One"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[30%]"
              orientation="horizontal"
            >
              <div className="bg-gray-300_85 flex flex-col items-center justify-center rounded-[50%] w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_avatar5.png"
                    alt="avatarFive"
                  />
                </div>
              </div>
              <div className="bg-gray-300_85 flex flex-col items-center justify-center rounded-[50%] w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_imgavatar4.png"
                    alt="avatarFour"
                  />
                </div>
              </div>
            </List>
            <div className="bg-gray-300_85 flex flex-col items-center justify-center rounded-[9px] w-auto">
              <div className="flex flex-col h-10 md:h-auto items-center justify-center w-[19px]">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                  src="images/img_avatar6.png"
                  alt="avatarSix"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start sm:px-5 px-6 w-full">
          <Text
            className="text-blue_gray-500 text-xs uppercase w-auto"
            size="txtPublicSansBold12Bluegray500"
          >
            {props?.insertamount}
          </Text>
          <div className="flex flex-col relative w-full">
            <div className="flex flex-row gap-2 items-start justify-center mt-[-NaNpx] mx-auto w-[296px] z-[1]">
              <Text
                className="text-blue_gray-900 text-center text-xl w-auto"
                size="txtPublicSansBold20"
              >
                {props?.currencytext}
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-auto"
                size="txtPublicSansBold32"
              >
                {props?.amounttext}
              </Text>
            </div>
            <div className="h-11 mt-[-8px] mx-auto w-full z-[1]">
              <div className="flex flex-col gap-[-2px] items-center justify-center mb-[-12px] mt-auto w-auto z-[1]">
                <div className="flex flex-col items-center justify-start w-[27px]">
                  <div className="bg-blue_gray-900 flex flex-col items-start justify-start px-1.5 py-[3px] rounded w-auto">
                    <Text
                      className="text-center text-white-A700 text-xs"
                      size="txtPublicSansRegular12WhiteA700"
                    >
                      {props?.text}
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
              <div
                className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start mt-auto mx-auto py-[5px] w-full"
                style={{ backgroundImage: "url('images/img_group102.svg')" }}
              >
                <Line className="bg-teal-500_77 h-0.5 rounded-[1px] w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-[296px]">
            <Text
              className="flex-1 text-base text-blue_gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.balancetext}
            </Text>
            <Text
              className="flex-1 text-base text-blue_gray-900 text-right w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.balanceamounttext}
            </Text>
          </div>
          <Button
            className="cursor-pointer font-bold font-publicsans h-12 text-[15px] text-center w-full"
            shape="round"
            color="blue_gray_900"
            size="xl"
            variant="fill"
          >
            {props?.transfernowtext}
          </Button>
        </div>
      </div>
    </>
  );
};

HORIZONTALBankingColumnrecent.defaultProps = {
  titletext: "Quick Transfer",
  recent: "Recent",
  viewalltext: "View All",
  insertamount: "insert amount",
  currencytext: "$",
  amounttext: "999.00",
  text: "20",
  balancetext: "Your Balance",
  balanceamounttext: "$34,212.00",
  transfernowtext: "Transfer Now",
};

export default HORIZONTALBankingColumnrecent;
