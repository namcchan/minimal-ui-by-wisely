import React from "react";

import { Button, Img, List, Text } from "components";

type AboutAboutminimalProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "whatisminimal"
  | "description"
  | "development"
  | "language"
  | "design"
  | "language1"
  | "marketing"
  | "language2"
  | "ourWork"
> &
  Partial<{
    whatisminimal: string;
    description: string;
    development: string;
    language: string;
    design: string;
    language1: string;
    marketing: string;
    language2: string;
    ourWork: string;
  }>;

const AboutAboutminimal: React.FC<AboutAboutminimalProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col h-[292px] items-center justify-start rounded-[24px] shadow-bs7 w-full">
            <div className="flex flex-col h-[292px] items-center justify-start w-[292px]">
              <div className="black_900_00_black_900_border border-4 border-solid flex flex-col h-[292px] items-center justify-start rounded-[24px] w-[292px]">
                <Img
                  className="h-[292px] md:h-auto object-cover rounded-[24px] w-[292px]"
                  src="images/img_img_292x292.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-[24px] shadow-bs7 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="blue_gray_300_3d_blue_gray_300_3d_border border-4 border-solid flex flex-col items-center justify-start rounded-[24px] w-full">
                <Img
                  className="h-[390px] md:h-auto object-cover rounded-[24px] w-full"
                  src="images/img_img_390x292.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </List>
        <div className="flex flex-col gap-10 items-start justify-start w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
              size="txtPublicSansExtraBold48"
            >
              {props?.whatisminimal}
            </Text>
            <Text
              className="leading-[24.00px] max-w-[464px] md:max-w-full text-base text-blue_gray-500"
              size="txtPublicSansRegular16"
            >
              {props?.description}
            </Text>
          </div>
          <List
            className="flex flex-col gap-6 items-start w-auto"
            orientation="vertical"
          >
            <div className="flex flex-col gap-2 items-start justify-start my-0 w-[464px] sm:w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-base text-blue_gray-900 w-auto"
                  size="txtPublicSansSemiBold16"
                >
                  {props?.development}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.language}
                </Text>
              </div>
              <Img
                className="h-1.5 w-full"
                src="images/img_linearprogress_teal_500.svg"
                alt="linearprogress"
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start my-0 w-[464px] sm:w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-base text-blue_gray-900 w-auto"
                  size="txtPublicSansSemiBold16"
                >
                  {props?.design}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.language1}
                </Text>
              </div>
              <Img
                className="h-1.5 w-full"
                src="images/img_linearprogress_amber_a700_6x464.svg"
                alt="linearprogress"
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start my-0 w-[464px] sm:w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-base text-blue_gray-900 w-auto"
                  size="txtPublicSansSemiBold16"
                >
                  {props?.marketing}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.language2}
                </Text>
              </div>
              <Img
                className="h-1.5 w-full"
                src="images/img_linearprogress_deep_orange_500.svg"
                alt="linearprogress"
              />
            </div>
          </List>
          <Button
            className="cursor-pointer flex h-12 items-center justify-center min-w-[131px]"
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
              {props?.ourWork}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

AboutAboutminimal.defaultProps = {
  whatisminimal: "What is Minimal?",
  description:
    "Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end.",
  development: "Development",
  language: " 90%",
  design: "Design",
  language1: " 73%",
  marketing: "Marketing",
  language2: " 29%",
  ourWork: "Our Work",
};

export default AboutAboutminimal;
