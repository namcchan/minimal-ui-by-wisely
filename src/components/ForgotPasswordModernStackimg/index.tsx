import React from "react";

import { Button, FloatingInput, Img, Input, Line, Text } from "components";

type ForgotPasswordModernStackimgProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "iconsothericema"
  | "pleasecheckyour"
  | "weveemaileda"
  | "email"
  | "two"
  | "twoOne"
  | "twoTwo"
  | "twoThree"
  | "layer"
  | "three"
  | "wrap"
  | "wrapOne"
  | "updatePassword"
  | "language"
  | "resendcode"
  | "arrowleft"
  | "resendcode1"
  | "home"
> &
  Partial<{
    iconsothericema: string;
    pleasecheckyour: string;
    weveemaileda: string;
    email: string;
    two: string;
    twoOne: string;
    twoTwo: string;
    twoThree: string;
    layer: string;
    three: string;
    wrap: string;
    wrapOne: string;
    updatePassword: string;
    language: string;
    resendcode: string;
    arrowleft: string;
    resendcode1: string;
    home: string;
  }>;

const ForgotPasswordModernStackimg: React.FC<
  ForgotPasswordModernStackimgProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[1052px] inset-[0] justify-center m-auto object-cover w-full"
          src="images/img_img_1052x1440.png"
          alt="img"
        />
        <div className="absolute bg-white-A700 flex flex-col gap-6 h-max inset-[0] items-center justify-end m-auto sm:px-5 px-6 py-10 rounded-[16px] w-[420px] sm:w-full">
          {!!props?.iconsothericema ? (
            <Img
              className="h-24 w-24"
              alt="iconsothericema"
              src={props?.iconsothericema}
            />
          ) : null}
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-2 items-start justify-start py-4 w-full">
              {!!props?.pleasecheckyour ? (
                <Text
                  className="leading-[48.00px] max-w-[372px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                  size="txtPublicSansBold32"
                >
                  {props?.pleasecheckyour}
                </Text>
              ) : null}
              {!!props?.weveemaileda ? (
                <Text
                  className="leading-[22.00px] max-w-[372px] md:max-w-full text-blue_gray-500 text-center text-sm"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.weveemaileda}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-col items-start justify-start mt-4 w-full">
              {!!props?.email ? (
                <FloatingInput
                  value={props?.email}
                  wrapClassName="placeholder:bg-white-A700 font-publicsans placeholder:left-3.5 p-0 sm:pr-5 text-base placeholder:text-blue_gray-500 text-blue_gray-900 text-left placeholder:top-[0] w-full"
                  className="font-publicsans p-0 sm:pr-5 text-base text-blue_gray-900 text-left w-full"
                  name="email"
                  labelClasses="bg-white-A700 left-3.5 top-[0] text-blue_gray-500"
                  focusedClasses="translate-y-[18px] scale-[1]"
                  wrapperClasses="w-full top-[0]"
                  labelText="Email address"
                  defaultText="demo@minimals.cc"
                ></FloatingInput>
              ) : null}
            </div>
            <div className="flex flex-row gap-4 items-start justify-start mt-[31px] w-full">
              {!!props?.two ? (
                <Button
                  className="!text-blue_gray-900 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="2xl"
                  variant="outline"
                >
                  {props?.two}
                </Button>
              ) : null}
              {!!props?.twoOne ? (
                <Button
                  className="!text-blue_gray-900 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="2xl"
                  variant="outline"
                >
                  {props?.twoOne}
                </Button>
              ) : null}
              {!!props?.twoTwo ? (
                <Button
                  className="!text-blue_gray-900 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="2xl"
                  variant="outline"
                >
                  {props?.twoTwo}
                </Button>
              ) : null}
              {!!props?.twoThree ? (
                <Button
                  className="!text-blue_gray-900 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="2xl"
                  variant="outline"
                >
                  {props?.twoThree}
                </Button>
              ) : null}
              <div className="border border-blue_gray-300_33 border-solid flex flex-1 flex-col h-[54px] md:h-auto items-center justify-center rounded-lg w-full">
                {!!props?.layer ? (
                  <Line className="bg-blue_gray-900 h-5 w-px" />
                ) : null}
              </div>
              {!!props?.three ? (
                <Button
                  className="!text-blue_gray-300 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="2xl"
                  variant="outline"
                >
                  {props?.three}
                </Button>
              ) : null}
            </div>
            <div className="flex flex-col items-start justify-start mt-6 w-full">
              {!!props?.wrap ? (
                <Input
                  name="wrap"
                  placeholder="Password"
                  value={props?.wrap}
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans p-0 text-left text-sm w-full"
                  wrapClassName="flex md:h-auto w-full"
                  suffix={
                    <Img
                      className="h-6 ml-[35px] my-auto"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  }
                  shape="round"
                  color="blue_gray_300_33"
                  size="xs"
                  variant="outline"
                ></Input>
              ) : null}
            </div>
            <div className="flex flex-col items-start justify-start mt-6 w-full">
              {!!props?.wrapOne ? (
                <Input
                  name="wrap_One"
                  placeholder="Confirm New Password"
                  value={props?.wrapOne}
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans p-0 text-left text-sm w-full"
                  wrapClassName="flex md:h-auto w-full"
                  suffix={
                    <Img
                      className="h-6 ml-[35px] my-auto"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  }
                  shape="round"
                  color="blue_gray_300_33"
                  size="xs"
                  variant="outline"
                ></Input>
              ) : null}
            </div>
            {!!props?.updatePassword ? (
              <Button
                className="cursor-pointer font-bold font-publicsans h-12 mt-6 text-[15px] text-center w-full"
                shape="round"
                color="blue_gray_900"
                size="xl"
                variant="fill"
              >
                {props?.updatePassword}
              </Button>
            ) : null}
            <div className="flex flex-row gap-[3px] items-start justify-start mt-6 w-auto">
              {!!props?.language ? (
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.language}
                </Text>
              ) : null}
              {!!props?.resendcode ? (
                <Text
                  className="text-sm text-teal-500 w-auto"
                  size="txtPublicSansSemiBold14Teal500"
                >
                  {props?.resendcode}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-1 items-center justify-start mt-6 w-auto">
              {!!props?.arrowleft ? (
                <Img
                  className="h-4 w-4"
                  alt="arrowleft"
                  src={props?.arrowleft}
                />
              ) : null}
              {!!props?.resendcode1 ? (
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.resendcode1}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <header className="absolute flex flex-row h-20 md:h-auto inset-x-[0] items-center justify-between mx-auto sm:px-5 px-6 top-[0] w-full">
          <Img
            className="h-10 md:h-auto object-cover w-10"
            src="images/img_logo.png"
            alt="logo"
          />
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_iconsduotoneicsettings.svg"
                alt="iconsduotoneics"
              />
            </Button>
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.home}
            </Text>
          </div>
        </header>
      </div>
    </>
  );
};

ForgotPasswordModernStackimg.defaultProps = { home: "Need help?" };

export default ForgotPasswordModernStackimg;
