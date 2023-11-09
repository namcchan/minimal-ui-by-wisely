import React from "react";

import {
  Button,
  CheckBox,
  FloatingInput,
  Img,
  Input,
  Line,
  Radio,
  Text,
} from "components";
import Header from "components/Header";
import PaymentsNewCardColumniconssolidic from "components/PaymentsNewCardColumniconssolidic";
import PaymentsPricingpayment from "components/PaymentsPricingpayment";
import PaymentsPricingpayment1 from "components/PaymentsPricingpayment1";
import PaymentsPricingpayment2 from "components/PaymentsPricingpayment2";

const PaymentsNewCardPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-publicsans mx-auto relative w-[1440px] sm:w-full md:w-full">
        <Header
          className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-between mx-auto md:px-5 px-6 w-full"
          style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
        />
        <div className="flex flex-col gap-10 h-full items-center justify-start mt-auto mx-auto md:px-10 px-36 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-auto"
              size="txtPublicSansBold32"
            >
              <>Let&#39;s finish powering you up!</>
            </Text>
            <Text
              className="text-base text-blue_gray-500 text-center w-auto"
              size="txtPublicSansRegular16"
            >
              Professional plan is right for you.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl mx-auto w-full">
            <div className="border border-blue_gray-300_28 border-dashed flex flex-1 md:flex-col flex-row gap-10 items-start justify-start max-w-[760px] p-10 sm:px-5 rounded-[16px] w-full">
              <PaymentsPricingpayment
                className="bg-white-A700 flex flex-1 flex-col gap-10 items-start justify-start w-full"
                value="Phone number"
                valueOne="Address"
              />
              <PaymentsPricingpayment1 className="bg-white-A700 flex flex-1 flex-col gap-10 items-start justify-start w-full" />
            </div>
            <PaymentsPricingpayment2
              className="bg-gray-100 flex flex-1 flex-col items-center justify-start p-10 sm:px-5 rounded-[16px] w-full"
              labelFour="Upgrade My Plan"
            />
          </div>
        </div>
        <PaymentsNewCardColumniconssolidic
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[304px] md:px-10 sm:px-5 rounded-[24px] w-full"
          style={{
            backgroundImage: "url('images/img_dialognewcreditcard.svg')",
          }}
        />
      </div>
    </>
  );
};

export default PaymentsNewCardPage;
