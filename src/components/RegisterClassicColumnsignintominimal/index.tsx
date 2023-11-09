import React from "react";

import { Button, Img, Input, Text } from "components";

type RegisterClassicColumnsignintominimalProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "signintominimal"
  | "confirmation"
  | "language"
  | "wrap"
  | "wrapOne"
  | "createAccount"
  | "bysigningupi"
  | "or"
> &
  Partial<{
    signintominimal: string;
    confirmation: string;
    language: string;
    wrap: string;
    wrapOne: string;
    createAccount: string;
    bysigningupi: JSX.Element | string;
    or: string;
  }>;

const RegisterClassicColumnsignintominimal: React.FC<
  RegisterClassicColumnsignintominimalProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
            size="txtPublicSansBold24"
          >
            {props?.signintominimal}
          </Text>
          <div className="flex flex-row items-center justify-start w-full">
            <Text
              className="text-blue_gray-900 text-right text-sm w-auto"
              size="txtPublicSansRegular14"
            >
              {props?.confirmation}
            </Text>
            <Text
              className="text-right text-sm text-teal-500 w-auto"
              size="txtPublicSansSemiBold14Teal500"
            >
              {props?.language}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <div className="flex flex-row gap-4 items-start justify-center w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Text
                className="border border-blue_gray-300_33 border-solid h-[54px] pl-3.5 sm:pr-5 pr-[35px] py-[18px] rounded-lg text-blue_gray-300 text-sm w-full"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.wrap}
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Text
                className="border border-blue_gray-300_33 border-solid h-[54px] pl-3.5 sm:pr-5 pr-[35px] py-[18px] rounded-lg text-blue_gray-300 text-sm w-full"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.wrapOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              name="emailaddress"
              placeholder="Email address"
              className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
              wrapClassName="w-full"
              shape="round"
              color="blue_gray_300_33"
              size="sm"
              variant="outline"
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              name="password"
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
          <Button
            className="cursor-pointer font-bold font-publicsans h-12 text-[15px] text-center w-full"
            shape="round"
            color="blue_gray_900"
            size="xl"
            variant="fill"
          >
            {props?.createAccount}
          </Button>
          {props?.bysigningupi}
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

RegisterClassicColumnsignintominimal.defaultProps = {
  signintominimal: "Get started absolutely free",
  confirmation: "Already have an account?",
  language: " Login",
  wrap: "First name",
  wrapOne: "Last name",
  createAccount: "Create Account",
  bysigningupi: (
    <Text
      className="text-blue_gray-500 text-center text-xs w-full"
      size="txtPublicSansRegular12"
    >
      <span className="text-blue_gray-500 font-publicsans font-normal">
        By signing up, I agree to{" "}
      </span>
      <a
        href="javascript:"
        className="text-blue_gray-900 font-publicsans font-normal underline"
      >
        Terms of Use
      </a>
      <span className="text-blue_gray-900 font-publicsans font-normal"> </span>
      <span className="text-blue_gray-500 font-publicsans font-normal">
        and
      </span>
      <span className="text-blue_gray-900 font-publicsans font-normal"> </span>
      <a
        href="javascript:"
        className="text-blue_gray-900 font-publicsans font-normal underline"
      >
        Privacy Policy
      </a>
      <span className="text-blue_gray-900 font-publicsans font-normal">.</span>
    </Text>
  ),
  or: "OR",
};

export default RegisterClassicColumnsignintominimal;
