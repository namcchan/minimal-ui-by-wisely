import React from "react";

import { Button, Img, List, Text } from "components";

type HORIZONTALBankingColumnlabelFourteenProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleTwentyTwo"
  | "subtitleOne"
  | "labelFourteen"
  | "namerand"
  | "email"
  | "namerand1"
  | "email1"
  | "namerand2"
  | "email2"
  | "namerand3"
  | "email3"
  | "namerand4"
  | "email4"
> &
  Partial<{
    titleTwentyTwo: string;
    subtitleOne: string;
    labelFourteen: string;
    namerand: string;
    email: string;
    namerand1: string;
    email1: string;
    namerand2: string;
    email2: string;
    namerand3: string;
    email3: string;
    namerand4: string;
    email4: string;
  }>;

const HORIZONTALBankingColumnlabelFourteen: React.FC<
  HORIZONTALBankingColumnlabelFourteenProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-lg w-full"
                size="txtPublicSansBold18Bluegray900"
              >
                {props?.titleTwentyTwo}
              </Text>
              <Text
                className="text-blue_gray-500 text-sm w-full"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.subtitleOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
            <Text
              className="text-[13px] text-blue_gray-900 w-auto"
              size="txtPublicSansBold13"
            >
              {props?.labelFourteen}
            </Text>
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_arrowright.svg"
              alt="arrowright_Nine"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pb-6 sm:px-5 px-6 w-full">
          <List
            className="flex flex-col gap-6 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_imgavatar2_40x40.png"
                    alt="imgavatarTwo"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start rounded-[22px] w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namerand}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.email}
                </Text>
              </div>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_1.svg"
                  alt="iconssolidic"
                />
              </Button>
            </div>
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_imgavatar3_40x40.png"
                    alt="imgavatarThree"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start rounded-[22px] w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namerand1}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.email1}
                </Text>
              </div>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_1.svg"
                  alt="iconssolidic"
                />
              </Button>
            </div>
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_imgavatar4_40x40.png"
                    alt="imgavatarFour"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 items-start justify-start rounded-[22px] w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namerand2}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.email2}
                </Text>
              </div>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_1.svg"
                  alt="iconssolidic"
                />
              </Button>
            </div>
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_imgavatar5_40x40.png"
                    alt="imgavatarFive"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[5px] items-start justify-start rounded-[22px] w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namerand3}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.email3}
                </Text>
              </div>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_1.svg"
                  alt="iconssolidic"
                />
              </Button>
            </div>
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-center rounded-[50%] w-10">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_imgavatar6_40x40.png"
                    alt="imgavatarSix"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start rounded-[22px] w-full">
                <Text
                  className="text-blue_gray-900 text-sm w-full"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.namerand4}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.email4}
                </Text>
              </div>
              <Button
                className="flex h-9 items-center justify-center w-9"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_iconssolidic_1.svg"
                  alt="iconssolidic"
                />
              </Button>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

HORIZONTALBankingColumnlabelFourteen.defaultProps = {
  titleTwentyTwo: "Contacts",
  subtitleOne: "You have 122 contacts",
  labelFourteen: "View All",
  namerand: "Esperanza Mcintyre",
  email: "aditya_greenfelder31@gmail.com",
  namerand1: "Jayvion Simon",
  email1: "vergie_block82@hotmail.com",
  namerand2: "Hudson Alvarez",
  email2: "constantin91@yahoo.com",
  namerand3: "Izayah Pope",
  email3: "joana.simonis84@gmail.com",
  namerand4: "Ariana Lang",
  email4: "luella.ryan33@gmail.com",
};

export default HORIZONTALBankingColumnlabelFourteen;
