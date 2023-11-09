import React from "react";

import {
  Button,
  FloatingInput,
  Img,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import Header1 from "components/Header1";
import PaymentsNewCardColumniconssolidic from "components/PaymentsNewCardColumniconssolidic";
import ProductCheckoutAddressStephorizontal from "components/ProductCheckoutAddressStephorizontal";
import ProductCheckoutCartColumnsubtotal from "components/ProductCheckoutCartColumnsubtotal";
import ProductCheckoutPaymentColumncut from "components/ProductCheckoutPaymentColumncut";
import ProductCheckoutPaymentColumnmanuelcooper from "components/ProductCheckoutPaymentColumnmanuelcooper";
import ProductCheckoutPaymentColumnstandarddeliverOne from "components/ProductCheckoutPaymentColumnstandarddeliverOne";
import ProductCheckoutPaymentStephorizontal from "components/ProductCheckoutPaymentStephorizontal";

const wrapOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductCheckoutPaymentNewCardPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-publicsans mx-auto relative w-[1440px] sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-end mt-auto mx-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header1
              className="bg-cover bg-no-repeat flex h-20 md:h-auto items-center justify-center px-36 md:px-5 w-full"
              style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
            />
            <div className="flex flex-col gap-10 items-start justify-start max-w-[1440px] pb-20 pt-10 md:px-10 px-36 sm:px-5 w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                size="txtPublicSansBold24"
              >
                Checkout
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[712px] w-full">
                <ProductCheckoutAddressStephorizontal className="flex flex-1 flex-col gap-4 items-center justify-center w-full" />
                <ProductCheckoutPaymentStephorizontal className="flex flex-1 flex-col gap-4 items-center justify-center w-full" />
                <div className="flex flex-1 flex-col gap-4 items-center justify-center w-full">
                  <Img
                    className="h-6 w-full"
                    src="images/img_stack_teal_500_24x237.svg"
                    alt="stack"
                  />
                  <Text
                    className="text-blue_gray-900 text-center text-sm w-auto"
                    size="txtPublicSansSemiBold14"
                  >
                    Payment
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <ProductCheckoutPaymentColumncut className="bg-white-A700 flex flex-col items-center justify-start max-w-[712px] rounded-[16px] shadow-bs4 w-full" />
                  <ProductCheckoutPaymentColumnstandarddeliverOne className="bg-white-A700 flex flex-col items-center justify-start max-w-[712px] rounded-[16px] shadow-bs4 w-full" />
                  <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-2 rounded-lg w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtPublicSansBold14"
                    >
                      Back
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <ProductCheckoutPaymentColumnmanuelcooper className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-[344px]" />
                  <ProductCheckoutCartColumnsubtotal
                    className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-[344px]"
                    discountprice="-$5"
                    shippingprice="$2,00"
                  />
                  <Button
                    className="cursor-pointer font-bold h-12 text-[15px] text-center w-[344px]"
                    shape="round"
                    color="blue_gray_900"
                    size="xl"
                    variant="fill"
                  >
                    Complete Order
                  </Button>
                </div>
              </div>
            </div>
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

export default ProductCheckoutPaymentNewCardPage;
