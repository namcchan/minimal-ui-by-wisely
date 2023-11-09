import React from "react";

import { Button, Img, List, Text } from "components";

type AboutAboutteamProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "dreamteam"
  | "greatteamisthe"
  | "descriptionOne"
  | "nameone"
  | "roleone"
  | "nametwo"
  | "roletwo"
  | "namethree"
  | "rolethree"
  | "namefour"
  | "rolefour"
  | "allMembers"
> &
  Partial<{
    dreamteam: string;
    greatteamisthe: string;
    descriptionOne: string;
    nameone: string;
    roleone: string;
    nametwo: string;
    roletwo: string;
    namethree: string;
    rolethree: string;
    namefour: string;
    rolefour: string;
    allMembers: string;
  }>;

const AboutAboutteam: React.FC<AboutAboutteamProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
          <Text
            className="text-blue_gray-300 text-center text-xs uppercase w-auto"
            size="txtPublicSansBold12"
          >
            {props?.dreamteam}
          </Text>
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
            size="txtPublicSansExtraBold48"
          >
            {props?.greatteamisthe}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[630px] md:max-w-full text-base text-blue_gray-500 text-center"
            size="txtPublicSansRegular16"
          >
            {props?.descriptionOne}
          </Text>
        </div>
        <div className="relative w-[1152px] md:w-full">
          <div className="flex flex-col items-center justify-start m-auto w-full">
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:ml-[0] px-2 rounded-[16px] shadow-bs4 w-full">
                <div className="flex flex-col gap-1 items-center justify-center py-5 w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtPublicSansSemiBold16"
                  >
                    {props?.nameone}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.roleone}
                  </Text>
                </div>
                <div className="bg-orange-50 flex flex-col items-start justify-start rounded-[12px] w-[254px]">
                  <Img
                    className="h-[254px] md:h-auto object-cover rounded-[12px] w-[254px]"
                    src="images/img_imgportrait1.png"
                    alt="imgportraitOne"
                  />
                </div>
                <div className="flex flex-row items-center justify-center py-5 w-auto">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_iconssocialiclinkedin.svg"
                      alt="iconssocialicli"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:ml-[0] px-2 rounded-[16px] shadow-bs4 w-full">
                <div className="flex flex-col gap-1 items-center justify-center py-5 w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtPublicSansSemiBold16"
                  >
                    {props?.nametwo}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.roletwo}
                  </Text>
                </div>
                <div className="bg-orange-50 flex flex-col items-start justify-start rounded-[12px] w-[254px]">
                  <Img
                    className="h-[254px] md:h-auto object-cover rounded-[12px] w-[254px]"
                    src="images/img_imgportrait2.png"
                    alt="imgportraitTwo"
                  />
                </div>
                <div className="flex flex-row items-center justify-center py-5 w-auto">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_iconssocialiclinkedin.svg"
                      alt="iconssocialicli"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:ml-[0] px-2 rounded-[16px] shadow-bs4 w-full">
                <div className="flex flex-col gap-1 items-center justify-center py-5 w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtPublicSansSemiBold16"
                  >
                    {props?.namethree}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.rolethree}
                  </Text>
                </div>
                <div className="bg-orange-50 flex flex-col items-start justify-start rounded-[12px] w-[254px]">
                  <Img
                    className="h-[254px] md:h-auto object-cover rounded-[12px] w-[254px]"
                    src="images/img_imgportrait3.png"
                    alt="imgportraitThree"
                  />
                </div>
                <div className="flex flex-row items-center justify-center py-5 w-auto">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_iconssocialiclinkedin.svg"
                      alt="iconssocialicli"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:ml-[0] px-2 rounded-[16px] shadow-bs4 w-full">
                <div className="flex flex-col gap-1 items-center justify-center py-5 w-full">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtPublicSansSemiBold16"
                  >
                    {props?.namefour}
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray500"
                  >
                    {props?.rolefour}
                  </Text>
                </div>
                <div className="bg-orange-50 flex flex-col items-start justify-start rounded-[12px] w-[254px]">
                  <Img
                    className="h-[254px] md:h-auto object-cover rounded-[12px] w-[254px]"
                    src="images/img_imgportrait4.png"
                    alt="imgportraitFour"
                  />
                </div>
                <div className="flex flex-row items-center justify-center py-5 w-auto">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_iconssocialiclinkedin.svg"
                      alt="iconssocialicli"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    size="md"
                  >
                    <Img
                      className="h-5"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <div className="absolute flex flex-row flex-wrap md:gap-12 h-max inset-[0] items-center justify-between m-auto max-w-6xl px-4 w-full">
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              color="blue_gray_900_85"
              size="md"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrowleft"
              />
            </Button>
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              color="blue_gray_900"
              size="md"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_arrowright_white_a700.svg"
                alt="arrowright"
              />
            </Button>
          </div>
        </div>
        <Button
          className="cursor-pointer flex h-12 items-center justify-center min-w-[155px]"
          rightIcon={
            <Img
              className="h-6 ml-2"
              src="images/img_arrowright_blue_gray_900.svg"
              alt="arrow_right"
            />
          }
          shape="round"
          color="blue_gray_300_51"
          size="lg"
          variant="outline"
        >
          <div className="font-bold font-publicsans text-[15px] text-left">
            {props?.allMembers}
          </div>
        </Button>
      </div>
    </>
  );
};

AboutAboutteam.defaultProps = {
  dreamteam: "Dream team",
  greatteamisthe: "Great team is the key",
  descriptionOne:
    "Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation.",
  nameone: "Jayvion Simon",
  roleone: "CEO",
  nametwo: "Lucian Obrien",
  roletwo: "CFO",
  namethree: "Deja Brady",
  rolethree: "CTO",
  namefour: "Harrison Stein",
  rolefour: "HR Manager",
  allMembers: "All Members",
};

export default AboutAboutteam;
