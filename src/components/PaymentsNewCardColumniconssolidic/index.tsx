import React from "react";

import { Button, FloatingInput, Img, Line, Text } from "components";

type PaymentsNewCardColumniconssolidicProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "cvv" | "labelFive" | "labelSix" | "add" | "cancel"
> &
  Partial<{
    title: string;
    cvv: string;
    labelFive: string;
    labelSix: string;
    add: string;
    cancel: string;
  }>;

const PaymentsNewCardColumniconssolidic: React.FC<
  PaymentsNewCardColumniconssolidicProps
> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_dialognewcreditcard.svg')" }}
      >
        <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs6 w-[600px] md:w-full">
          <div className="flex flex-col relative w-full">
            <div className="flex flex-col items-center justify-start mx-auto w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start sm:pl-5 pl-6 pr-3 py-6 w-full">
                <Text
                  className="text-blue_gray-900 text-lg w-auto"
                  size="txtPublicSansBold18Bluegray900"
                >
                  {props?.title}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start mt-[-7.9px] mx-auto sm:px-5 px-6 w-[600px] md:w-full z-[1]">
              <div className="flex flex-col items-start justify-start w-full">
                <FloatingInput
                  wrapClassName="placeholder:bg-white-A700 font-publicsans placeholder:left-3.5 p-0 sm:pr-5 text-blue_gray-300 placeholder:text-blue_gray-500 text-left text-sm placeholder:top-[0] w-full"
                  className="font-publicsans p-0 sm:pr-5 text-blue_gray-300 text-left text-sm w-full"
                  name="price_One"
                  labelClasses="bg-white-A700 left-3.5 top-[0] text-blue_gray-500"
                  focusedClasses="translate-y-[18px] scale-[1]"
                  wrapperClasses="w-full top-[0]"
                  labelText="Card Number"
                  defaultText="XXXX XXXX XXXX XXXX"
                ></FloatingInput>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <FloatingInput
                  wrapClassName="placeholder:bg-white-A700 font-publicsans placeholder:left-3.5 p-0 sm:pr-5 text-blue_gray-300 placeholder:text-blue_gray-500 text-left text-sm placeholder:top-[0] w-full"
                  className="font-publicsans p-0 sm:pr-5 text-blue_gray-300 text-left text-sm w-full"
                  name="value_Three"
                  labelClasses="bg-white-A700 left-3.5 top-[0] text-blue_gray-500"
                  focusedClasses="translate-y-[18px] scale-[1]"
                  wrapperClasses="w-full top-[0]"
                  labelText="Card Holder"
                  defaultText="JOHN DOE"
                ></FloatingInput>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <FloatingInput
                    wrapClassName="placeholder:bg-white-A700 font-publicsans placeholder:left-3.5 p-0 sm:pr-5 text-blue_gray-300 placeholder:text-blue_gray-500 text-left text-sm placeholder:top-[0] w-full"
                    className="font-publicsans p-0 sm:pr-5 text-blue_gray-300 text-left text-sm w-full"
                    name="value_Four"
                    labelClasses="bg-white-A700 left-3.5 top-[0] text-blue_gray-500"
                    focusedClasses="translate-y-[18px] scale-[1]"
                    wrapperClasses="w-full top-[0]"
                    labelText="Expiration Date"
                    defaultText="MM/YY"
                  ></FloatingInput>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <div className="h-[54px] md:h-auto px-3.5 relative w-full">
                    <div className="h-[46px] md:h-[54px] mt-auto mx-auto w-full">
                      <div className="absolute border border-blue_gray-300_33 border-solid bottom-[0] h-[54px] inset-x-[0] mx-auto rounded-lg w-full"></div>
                      <Text
                        className="absolute bottom-[28%] left-[5%] text-blue_gray-300 text-sm"
                        size="txtPublicSansRegular14Bluegray300"
                      >
                        {props?.cvv}
                      </Text>
                    </div>
                    <div className="absolute left-[5%] px-0.5 top-[0] w-[58px]">
                      <Line className="absolute bg-white-A700 bottom-[0] h-0.5 inset-x-[0] mx-auto w-full" />
                      <Text
                        className="m-auto relative text-blue_gray-500 text-xs w-auto"
                        size="txtPublicSansSemiBold12"
                      >
                        {props?.labelFive}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconssolidic_blue_gray_300.svg"
                  alt="iconssolidic"
                />
                <Text
                  className="flex-1 text-blue_gray-300 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray300"
                >
                  {props?.labelSix}
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-row gap-3 items-center justify-end p-6 sm:px-5 w-full">
            <Button
              className="cursor-pointer font-bold font-publicsans h-9 min-w-[64px] text-center text-sm"
              shape="round"
              color="blue_gray_900"
              size="md"
              variant="fill"
            >
              {props?.add}
            </Button>
            <Button
              className="cursor-pointer font-bold font-publicsans h-9 min-w-[71px] text-center text-sm"
              shape="round"
              color="blue_gray_300_51"
              size="md"
              variant="outline"
            >
              {props?.cancel}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentsNewCardColumniconssolidic.defaultProps = {
  title: "New Card",
  cvv: "***",
  labelFive: "CVV/CVC",
  labelSix: "Your transaction is secured with SSL encryption",
  add: "Add",
  cancel: "Cancel",
};

export default PaymentsNewCardColumniconssolidic;
