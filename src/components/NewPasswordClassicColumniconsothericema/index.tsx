import React from "react";

import { Button, FloatingInput, Img, Input, Line, Text } from "components";

type NewPasswordClassicColumniconsothericemaProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "requestsenttext"
  | "verificationtext"
  | "two"
  | "twoOne"
  | "twoTwo"
  | "twoThree"
  | "one"
  | "updatepasswordbutton"
  | "language"
  | "languageOne"
  | "resendcodebutton"
> &
  Partial<{
    requestsenttext: string;
    verificationtext: JSX.Element | string;
    two: string;
    twoOne: string;
    twoTwo: string;
    twoThree: string;
    one: string;
    updatepasswordbutton: string;
    language: string;
    languageOne: string;
    resendcodebutton: string;
  }>;

const NewPasswordClassicColumniconsothericema: React.FC<
  NewPasswordClassicColumniconsothericemaProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-24 w-24"
          src="images/img_iconsothericemailsent.svg"
          alt="iconsothericema"
        />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start py-4 w-full">
            <Text
              className="leading-[48.00px] max-w-[400px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
              size="txtPublicSansBold32"
            >
              {props?.requestsenttext}
            </Text>
            <Text
              className="leading-[22.00px] max-w-[400px] md:max-w-full text-blue_gray-500 text-center text-sm"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.verificationtext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start mt-4 w-full">
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
          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start mt-[31px] w-full">
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
              {props?.one}
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start mt-6 w-full">
            <Input
              name="wrap"
              placeholder="Password"
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
          </div>
          <div className="flex flex-col items-start justify-start mt-6 w-full">
            <Input
              name="wrap_One"
              placeholder="Confirm New Password"
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
          </div>
          <Button
            className="cursor-pointer font-bold font-publicsans h-12 mt-6 text-[15px] text-center w-full"
            shape="round"
            color="blue_gray_900"
            size="xl"
            variant="fill"
          >
            {props?.updatepasswordbutton}
          </Button>
          <div className="flex flex-row gap-[3px] items-start justify-start mt-6 w-auto">
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
              {props?.languageOne}
            </Text>
          </div>
          <div className="flex flex-row gap-1 items-center justify-start mt-6 w-auto">
            <Img
              className="h-4 w-4"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.resendcodebutton}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

NewPasswordClassicColumniconsothericema.defaultProps = {
  requestsenttext: "Request sent successfully!",
  verificationtext: (
    <>
      We&#39;ve sent a 6-digit confirmation email to your email. Please enter
      the code in below box to verify your email.
    </>
  ),
  two: "2",
  twoOne: "2",
  twoTwo: "2",
  twoThree: "2",
  one: "-",
  updatepasswordbutton: "Update Password",
  language: "Don’t have a code? ",
  languageOne: " Resend code",
  resendcodebutton: "Return to sign in",
};

export default NewPasswordClassicColumniconsothericema;
