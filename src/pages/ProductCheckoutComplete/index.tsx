import React from "react";

import { Button, Img, Text } from "components";
import ProductCheckoutCompleteIllustrationsi from "components/ProductCheckoutCompleteIllustrationsi";

const ProductCheckoutCompletePage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-publicsans h-[1024px] items-center justify-start mx-auto p-6 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_dialognewcreditcard.svg')" }}
      >
        <div className="bg-white-A700 flex flex-col gap-10 h-[976px] md:h-auto items-center justify-center max-w-[1392px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[41px] items-center justify-start w-[24%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
              size="txtPublicSansBold24"
            >
              Thank you for your purchase!
            </Text>
            <ProductCheckoutCompleteIllustrationsi className="flex flex-col items-center justify-start w-[98%] md:w-full" />
          </div>
          <div className="flex flex-col gap-10 items-center justify-start w-[35%] md:w-full">
            <Text
              className="leading-[24.00px] text-base text-blue_gray-900 text-center"
              size="txtPublicSansRegular16Bluegray900"
            >
              <span className="text-blue_gray-900 font-publicsans font-normal">
                Thanks for placing order
              </span>
              <span className="text-blue_gray-900 font-publicsans font-normal">
                <>
                  {" "}
                  :<br />
                  <br />
                </>
              </span>
              <span className="text-teal-500 font-publicsans font-normal">
                <>
                  01dc1370-3df6-11eb-b378-0242ac130002
                  <br />
                  <br />
                </>
              </span>
              <span className="text-blue_gray-900 font-publicsans font-normal">
                <>
                  We will send you a notification within 5 days when it ships.
                  <br />
                  If you have any question or queries then fell to get in
                  contact us.
                  <br />
                  <br />
                  All the best,
                </>
              </span>
            </Text>
            <Img
              className="h-px w-[480px]"
              src="images/img_divider_blue_gray_300_1x480.svg"
              alt="divider"
            />
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-[480px] sm:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[201px]"
                leftIcon={
                  <Img
                    className="h-6 mr-2"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="blue_gray_300_51"
                size="lg"
                variant="outline"
              >
                <div className="font-bold text-[15px] text-left">
                  Continue Shopping
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[188px]"
                leftIcon={
                  <Img
                    className="h-6 mr-2"
                    src="images/img_download_white_a700.svg"
                    alt="download"
                  />
                }
                shape="round"
                color="blue_gray_900"
                size="lg"
                variant="fill"
              >
                <div className="font-bold text-[15px] text-left">
                  Download as PDF
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCheckoutCompletePage;
