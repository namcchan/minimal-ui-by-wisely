import React from "react";

import { Img, List, RatingBar, Text } from "components";

type AboutColumnimgTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "testimonials"
  | "wholovemywork"
  | "descriptionTwo"
  | "label"
  | "nameone"
  | "date"
  | "description"
  | "nametwo"
  | "dateOne"
  | "descriptionOne"
  | "namefour"
  | "date1"
  | "description1"
  | "namefive"
  | "dateone1"
  | "descriptionone1"
> &
  Partial<{
    testimonials: string;
    wholovemywork: JSX.Element | string;
    descriptionTwo: string;
    label: string;
    nameone: string;
    date: string;
    description: JSX.Element | string;
    nametwo: string;
    dateOne: string;
    descriptionOne: string;
    namefour: string;
    date1: string;
    description1: string;
    namefive: string;
    dateone1: string;
    descriptionone1: string;
  }>;

const AboutColumnimgTwo: React.FC<AboutColumnimgTwoProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[1363px] h-[840px] relative w-full">
            <Img
              className="absolute h-[840px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_img_840x1440.png"
              alt="img_Two"
            />
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto rounded-[16px] w-full"
              style={{ backgroundImage: "url('images/img_group108.svg')" }}
            >
              <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[153px] justify-start md:mt-0 mt-[263px] w-[39%] md:w-full">
                    <div className="flex flex-col gap-6 items-start justify-start ml-36 md:ml-[0] w-[360px]">
                      <Text
                        className="text-right text-white-A700_85 text-xs uppercase w-auto"
                        size="txtPublicSansBold12WhiteA70085"
                      >
                        {props?.testimonials}
                      </Text>
                      <Text
                        className="leading-[64.00px] max-w-[217px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                        size="txtPublicSansExtraBold48WhiteA700"
                      >
                        {props?.wholovemywork}
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[360px] md:max-w-full text-base text-white-A700"
                        size="txtPublicSansRegular16WhiteA700"
                      >
                        {props?.descriptionTwo}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-20 md:pl-10 pl-36 sm:pl-5 w-auto">
                      <div className="flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center px-1 rounded-lg w-auto">
                        <Text
                          className="text-[13px] text-teal-500 w-auto"
                          size="txtPublicSansBold13Teal500"
                        >
                          {props?.label}
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_arrowright_teal_500.svg"
                          alt="arrowright_One"
                        />
                      </div>
                    </div>
                  </div>
                  <List
                    className="sm:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 justify-start w-[564px] sm:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="bg-white-A700_14 flex flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <RatingBar
                            className="flex justify-between w-[100px]"
                            value={1}
                            starCount={5}
                            size={20}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                          <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-10">
                            <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_imgavatar1_1.png"
                                alt="imgavatarOne"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPublicSansSemiBold16WhiteA700"
                            >
                              {props?.nameone}
                            </Text>
                            <Text
                              className="text-white-A700_94 text-xs w-auto"
                              size="txtPublicSansRegular12WhiteA70094"
                            >
                              {props?.date}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700_14 flex flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                        <Img
                          className="h-10 w-10"
                          src="images/img_iconssolidic_white_a700_40x40.svg"
                          alt="iconssolidic"
                        />
                        <Text
                          className="leading-[22.00px] max-w-[222px] md:max-w-full text-sm text-white-A700"
                          size="txtPublicSansRegular14WhiteA700"
                        >
                          {props?.description}
                        </Text>
                        <div className="flex flex-col items-center justify-start w-auto">
                          <RatingBar
                            className="flex justify-between w-[100px]"
                            value={1}
                            starCount={5}
                            size={20}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                          <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-10">
                            <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_imgavatar2_40x40.png"
                                alt="imgavatarTwo"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPublicSansSemiBold16WhiteA700"
                            >
                              {props?.nametwo}
                            </Text>
                            <Text
                              className="text-white-A700_94 text-xs w-auto"
                              size="txtPublicSansRegular12WhiteA70094"
                            >
                              {props?.dateOne}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700_14 flex flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                        <Img
                          className="h-10 w-10"
                          src="images/img_iconssolidic_white_a700_40x40.svg"
                          alt="iconssolidic_One"
                        />
                        <Text
                          className="leading-[22.00px] max-w-[222px] md:max-w-full text-sm text-white-A700"
                          size="txtPublicSansRegular14WhiteA700"
                        >
                          {props?.descriptionOne}
                        </Text>
                        <div className="flex flex-col items-center justify-start w-auto">
                          <RatingBar
                            className="flex justify-between w-[100px]"
                            value={1}
                            starCount={5}
                            size={6}
                          ></RatingBar>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="bg-white-A700_14 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                          <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-10">
                            <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_imgavatar4_40x40.png"
                                alt="imgavatarFour"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPublicSansSemiBold16WhiteA700"
                            >
                              {props?.namefour}
                            </Text>
                            <Text
                              className="text-white-A700_94 text-xs w-auto"
                              size="txtPublicSansRegular12WhiteA70094"
                            >
                              {props?.date1}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700_14 flex flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                        <Img
                          className="h-10 w-10"
                          src="images/img_iconssolidic_white_a700_40x40.svg"
                          alt="iconssolidic"
                        />
                        <Text
                          className="leading-[22.00px] max-w-[222px] md:max-w-full text-sm text-white-A700"
                          size="txtPublicSansRegular14WhiteA700"
                        >
                          {props?.description1}
                        </Text>
                        <div className="flex flex-col items-center justify-start w-auto">
                          <RatingBar
                            className="flex justify-between w-[100px]"
                            value={1}
                            starCount={5}
                            size={20}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                          <div className="bg-gray-300 flex flex-col items-center justify-center rounded-[50%] w-10">
                            <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_imgavatar5_40x40.png"
                                alt="imgavatarFive"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtPublicSansSemiBold16WhiteA700"
                            >
                              {props?.namefive}
                            </Text>
                            <Text
                              className="text-white-A700_94 text-xs w-auto"
                              size="txtPublicSansRegular12WhiteA70094"
                            >
                              {props?.dateone1}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700_14 flex flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                        <Img
                          className="h-10 w-10"
                          src="images/img_iconssolidic_white_a700_40x40.svg"
                          alt="iconssolidic_One"
                        />
                        <Text
                          className="leading-[22.00px] max-w-[222px] md:max-w-full text-sm text-white-A700"
                          size="txtPublicSansRegular14WhiteA700"
                        >
                          {props?.descriptionone1}
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutColumnimgTwo.defaultProps = {
  testimonials: "Testimonials",
  wholovemywork: (
    <>
      Who love <br />
      my work
    </>
  ),
  descriptionTwo:
    "Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.",
  label: "Read more testimonials",
  nameone: "Jayvion Simon",
  date: "12 Jan 2022",
  description: (
    <>
      It&#39;s a very good dashboard and we are really liking the product .
      We&#39;ve done some things, like migrate to TS and implementing a react
      useContext api, to fit our job methodology but the product is one of the
      best in terms of design and application architecture. The team did a
      really good job.
    </>
  ),
  nametwo: "Lucian Obrien",
  dateOne: "12 Jan 2022",
  descriptionOne:
    "Customer support is realy fast and helpful the desgin of this theme is looks amazing also the code is very clean and readble realy good job !",
  namefour: "Harrison Stein",
  date1: "12 Jan 2022",
  description1:
    "Got a few questions after purchasing the product. The owner responded very fast and very helpfull. Overall the code is excellent and works very good. 5/5 stars!",
  namefive: "Reece Chung",
  dateone1: "12 Jan 2022",
  descriptionone1:
    "CEO of Codealy.io here. We’ve built a developer assessment platform that makes sense - tasks are based on git repositories and run in virtual machines. We automate the pain points - storing candidates code, running it and sharing test results with the whole team, remotely. Bought this template as we need to provide an awesome dashboard for our early customers. I am super happy with purchase. The code is just as good as the design. Thanks!",
};

export default AboutColumnimgTwo;
