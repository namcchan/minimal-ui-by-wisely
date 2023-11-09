import React from "react";

import { Button, FloatingInput, Img, Line, Text } from "components";

type VerifyClassicAuthformverifyProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "pleasecheckyourOne"
  | "emailtext"
  | "two"
  | "twoOne"
  | "twoTwo"
  | "twoThree"
  | "four"
  | "verifybutton"
  | "language"
  | "resendcodebutton"
  | "resendcode"
> &
  Partial<{
    pleasecheckyourOne: string;
    emailtext: JSX.Element | string;
    two: string;
    twoOne: string;
    twoTwo: string;
    twoThree: string;
    four: string;
    verifybutton: string;
    language: string;
    resendcodebutton: string;
    resendcode: string;
  }>;

const VerifyClassicAuthformverify: React.FC<
  VerifyClassicAuthformverifyProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-24 w-24"
          src="images/img_iconsothericemailinbox.svg"
          alt="iconsothericema"
        />
        <div className="flex flex-col gap-8 items-center justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-full"
              size="txtPublicSansBold32"
            >
              {props?.pleasecheckyourOne}
            </Text>
            <Text
              className="leading-[22.00px] max-w-[400px] md:max-w-full text-blue_gray-500 text-center text-sm"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.emailtext}
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <FloatingInput
                wrapClassName="placeholder:bg-white-A700 font-publicsans placeholder:left-3.5 p-0 sm:pr-5 text-base placeholder:text-blue_gray-500 text-blue_gray-900 text-left placeholder:top-[0] w-full"
                className="font-publicsans p-0 sm:pr-5 text-base text-blue_gray-900 text-left w-full"
                name="email"
                labelClasses="bg-white-A700 left-3.5 top-[0] text-blue_gray-500"
                focusedClasses="translate-y-[18px] scale-[1]"
                wrapperClasses="w-full top-[0]"
                labelText="Email address"
                defaultText="demo@minimals.cc"
              ></FloatingInput>
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
              <Button
                className="!text-blue_gray-900 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                shape="round"
                color="blue_gray_300_33"
                size="2xl"
                variant="outline"
              >
                {props?.two}
              </Button>
              <Button
                className="!text-blue_gray-900 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                shape="round"
                color="blue_gray_300_33"
                size="2xl"
                variant="outline"
              >
                {props?.twoOne}
              </Button>
              <Button
                className="!text-blue_gray-900 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                shape="round"
                color="blue_gray_300_33"
                size="2xl"
                variant="outline"
              >
                {props?.twoTwo}
              </Button>
              <Button
                className="!text-blue_gray-900 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                shape="round"
                color="blue_gray_300_33"
                size="2xl"
                variant="outline"
              >
                {props?.twoThree}
              </Button>
              <div className="border border-blue_gray-300_33 border-solid flex md:flex-1 flex-col h-[54px] md:h-auto items-center justify-center rounded-lg w-[53px] md:w-full">
                <Line className="bg-blue_gray-900 h-5 w-px" />
              </div>
              <Button
                className="!text-blue_gray-300 cursor-pointer flex-1 font-publicsans h-[54px] text-center text-sm w-full"
                shape="round"
                color="blue_gray_300_33"
                size="2xl"
                variant="outline"
              >
                {props?.four}
              </Button>
            </div>
            <Button
              className="cursor-pointer font-bold font-publicsans h-12 text-[15px] text-center w-full"
              shape="round"
              color="blue_gray_900"
              size="xl"
              variant="fill"
            >
              {props?.verifybutton}
            </Button>
            <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.language}
              </Text>
              <Text
                className="text-sm text-teal-500 w-auto"
                size="txtPublicSansSemiBold14Teal500"
              >
                {props?.resendcodebutton}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansSemiBold14"
              >
                {props?.resendcode}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

VerifyClassicAuthformverify.defaultProps = {
  pleasecheckyourOne: "Please check your email!",
  emailtext: (
    <>
      We&#39;ve emailed a 6-digit confirmation code to acb@domain, please enter
      the code in below box to verify your email.
    </>
  ),
  two: "2",
  twoOne: "2",
  twoTwo: "2",
  twoThree: "2",
  four: "-",
  verifybutton: "Verify",
  language: "Don’t have a code? ",
  resendcodebutton: " Resend code",
  resendcode: "Return to sign in",
};

export default VerifyClassicAuthformverify;
