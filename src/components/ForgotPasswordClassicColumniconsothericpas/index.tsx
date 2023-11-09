import React from "react";

import { Button, Img, Input, Text } from "components";

type ForgotPasswordClassicColumniconsothericpasProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "forgottext" | "forgotdescription" | "sendrequest" | "returntosignin"
> &
  Partial<{
    forgottext: string;
    forgotdescription: JSX.Element | string;
    sendrequest: string;
    returntosignin: string;
  }>;

const ForgotPasswordClassicColumniconsothericpas: React.FC<
  ForgotPasswordClassicColumniconsothericpasProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-24 w-24"
          src="images/img_iconsothericpassword.svg"
          alt="iconsothericpas"
        />
        <div className="flex flex-col gap-10 items-center justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-full"
              size="txtPublicSansBold32"
            >
              {props?.forgottext}
            </Text>
            <Text
              className="leading-[22.00px] max-w-[400px] md:max-w-full text-blue_gray-500 text-center text-sm"
              size="txtPublicSansRegular14Bluegray500"
            >
              {props?.forgotdescription}
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="email_address"
                placeholder="Email address"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_300_33"
                size="sm"
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
              {props?.sendrequest}
            </Button>
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
                {props?.returntosignin}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ForgotPasswordClassicColumniconsothericpas.defaultProps = {
  forgottext: "Forgot your password?",
  forgotdescription: (
    <>
      Please enter the email address associated with your account, and we&#39;ll
      email you a link to reset your password.
    </>
  ),
  sendrequest: "Send Request",
  returntosignin: "Return to sign in",
};

export default ForgotPasswordClassicColumniconsothericpas;
