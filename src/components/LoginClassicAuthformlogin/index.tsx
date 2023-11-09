import React from "react";

import { Button, FloatingInput, Img, Text } from "components";

type LoginClassicAuthformloginProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "signintominimalOne"
  | "language"
  | "languageOne"
  | "userpassword"
  | "eye"
  | "forgotpassword"
  | "label"
  | "arrowright"
  | "or"
> &
  Partial<{
    signintominimalOne: string;
    language: string;
    languageOne: string;
    userpassword: string;
    eye: string;
    forgotpassword: string;
    label: string;
    arrowright: string;
    or: string;
  }>;

const LoginClassicAuthformlogin: React.FC<LoginClassicAuthformloginProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
            size="txtPublicSansBold24"
          >
            {props?.signintominimalOne}
          </Text>
          <div className="flex flex-row items-center justify-start w-full">
            <Text
              className="text-blue_gray-900 text-right text-sm w-auto"
              size="txtPublicSansRegular14"
            >
              {props?.language}
            </Text>
            <Text
              className="text-right text-sm text-teal-500 w-auto"
              size="txtPublicSansSemiBold14Teal500"
            >
              {props?.languageOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <FloatingInput
              wrapClassName="font-publicsans placeholder:left-3.5 p-0 sm:pr-5 placeholder:text-blue_gray-500 text-blue_gray-900 text-left text-sm placeholder:top-[0] w-full"
              className="font-publicsans p-0 sm:pr-5 text-blue_gray-900 text-left text-sm w-full"
              name="emailaddress"
              labelClasses="left-3.5 top-[0] text-blue_gray-500"
              focusedClasses="translate-y-[19px] scale-[1]"
              wrapperClasses="w-full top-[0]"
              labelText="Email address"
              defaultText="demo@minimals.cc"
            ></FloatingInput>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="border border-blue_gray-300_33 border-solid flex flex-row h-[54px] md:h-auto items-center justify-between px-3.5 rounded-lg w-full">
              {!!props?.userpassword ? (
                <Text
                  className="flex-1 text-blue_gray-300 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray300"
                >
                  {props?.userpassword}
                </Text>
              ) : null}
              <div className="flex flex-col h-10 md:h-auto items-center justify-center w-10">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                  {!!props?.eye ? (
                    <Img className="h-6 w-6" alt="eye" src={props?.eye} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <Text
            className="text-blue_gray-900 text-right text-sm underline w-full"
            size="txtPublicSansRegular14"
          >
            {props?.forgotpassword}
          </Text>
          <div className="bg-blue_gray-900 flex flex-row gap-2 h-12 md:h-auto items-center justify-center px-4 rounded-lg w-full">
            {!!props?.label ? (
              <Text
                className="flex-1 text-[15px] text-white-A700 w-auto"
                size="txtPublicSansBold15"
              >
                {props?.label}
              </Text>
            ) : null}
            {!!props?.arrowright ? (
              <Img
                className="h-6 w-6"
                alt="arrowright"
                src={props?.arrowright}
              />
            ) : null}
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Img
              className="flex-1 h-[22px] max-h-[22px]"
              src="images/img_divider.svg"
              alt="divider"
            />
            <Text
              className="text-blue_gray-300 text-center text-xs uppercase w-auto"
              size="txtPublicSansBold12"
            >
              {props?.or}
            </Text>
            <Img
              className="flex-1 h-[22px] max-h-[22px]"
              src="images/img_divider.svg"
              alt="divider_One"
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <div className="flex flex-1 flex-col h-9 md:h-auto items-center justify-center rounded-[50%] w-9">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                <Img
                  className="h-[18px] md:h-auto object-cover w-[18px]"
                  src="images/img_icgoogle1.png"
                  alt="icgoogleOne"
                />
              </div>
            </div>
            <Button
              className="flex flex-1 h-9 items-center justify-center w-9"
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
              className="flex flex-1 h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img className="h-5" src="images/img_twitter.svg" alt="twitter" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

LoginClassicAuthformlogin.defaultProps = {
  signintominimalOne: "Sign in to Minimal",
  language: "New user? ",
  languageOne: " Create an account",
  forgotpassword: "Forgot password?",
  or: "OR",
};

export default LoginClassicAuthformlogin;
