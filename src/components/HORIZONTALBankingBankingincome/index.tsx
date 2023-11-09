import React from "react";

import { Button, Img, Text } from "components";

type HORIZONTALBankingBankingincomeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "totalactiveuser"
  | "p18765"
  | "numberlongone"
  | "cursor"
  | "numberpercentone"
  | "totalactiveuserOne"
  | "chartarea"
> &
  Partial<{
    totalactiveuser: string;
    p18765: string;
    numberlongone: string;
    cursor: string;
    numberpercentone: string;
    totalactiveuserOne: string;
    chartarea: string;
  }>;

const HORIZONTALBankingBankingincome: React.FC<
  HORIZONTALBankingBankingincomeProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[16px] w-full">
          <div className="bg-gradient2  h-[276px] rounded-[16px] w-full"></div>
        </div>
        <div className="flex flex-row gap-6 items-start justify-between mx-auto p-6 sm:px-5 relative w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-sm text-teal-900 w-auto"
              size="txtPublicSansSemiBold14Teal900"
            >
              {props?.totalactiveuser}
            </Text>
            <div className="flex flex-row items-center justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900 w-auto"
                size="txtPublicSansBold32Teal900"
              >
                {props?.p18765}
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900 w-auto"
                size="txtPublicSansBold32Teal900"
              >
                {props?.numberlongone}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img className="h-5 w-5" alt="cursor" src={props?.cursor} />
              <Text
                className="text-sm text-teal-900 w-auto"
                size="txtPublicSansSemiBold14Teal900"
              >
                {props?.numberpercentone}
              </Text>
              <Text
                className="text-sm text-teal-900_a2 w-auto"
                size="txtPublicSansRegular14Teal900a2"
              >
                {props?.totalactiveuserOne}
              </Text>
            </div>
          </div>
          <Button
            className="flex h-12 items-center justify-center rounded-[50%] w-12"
            shape="circle"
            color="teal_700"
            size="lg"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_iconssolidic_green_a100.svg"
              alt="iconssolidic"
            />
          </Button>
        </div>
        <Img
          className="h-[120px] mt-auto mx-auto object-cover relative w-full"
          alt="chartarea"
          src={props?.chartarea}
        />
      </div>
    </>
  );
};

HORIZONTALBankingBankingincome.defaultProps = {
  totalactiveuser: "Income",
  p18765: "$",
  numberlongone: "9,990",
  cursor: "images/img_cursor.svg",
  numberpercentone: "+ 8.2%",
  totalactiveuserOne: "than last month",
  chartarea: "images/img_chartarea_teal_700.png",
};

export default HORIZONTALBankingBankingincome;
