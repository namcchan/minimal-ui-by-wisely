import React from "react";

import { Button, Img, List, Text } from "components";
import Header1 from "components/Header1";
import ProductCheckoutCartColumnsubtotal from "components/ProductCheckoutCartColumnsubtotal";
import ProductCheckoutCartEmptyCardheader from "components/ProductCheckoutCartEmptyCardheader";

const ProductCheckoutCartEmptyPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
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
          <List
            className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[712px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-4 items-center justify-center sm:ml-[0] w-full">
              <Img
                className="h-6 w-full"
                src="images/img_stack_blue_gray_300_24x237.svg"
                alt="stack"
              />
              <Text
                className="text-blue_gray-900 text-center text-sm w-auto"
                size="txtPublicSansSemiBold14"
              >
                Cart
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-center justify-center sm:ml-[0] w-full">
              <Img
                className="h-6 w-full"
                src="images/img_stack_24x237.svg"
                alt="stack"
              />
              <Text
                className="text-blue_gray-300 text-center text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray300"
              >
                Billing & address
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-center justify-center sm:ml-[0] w-full">
              <Img
                className="h-6 w-full"
                src="images/img_stack_1.svg"
                alt="stack"
              />
              <Text
                className="text-blue_gray-300 text-center text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray300"
              >
                Payment
              </Text>
            </div>
          </List>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-6xl mx-auto w-full">
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs4 w-full">
                <ProductCheckoutCartEmptyCardheader className="flex flex-col gap-4 items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full" />
                <div className="flex flex-col items-center justify-start pb-20 pt-10 w-auto">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-40 items-center justify-start p-[37px] sm:px-5 w-40"
                    style={{
                      backgroundImage: "url('images/img_iconsemptyiccart.svg')",
                    }}
                  >
                    <Img
                      className="h-[81px]"
                      src="images/img_stack_blue_gray_300.svg"
                      alt="stack"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-blue_gray-300 text-center text-lg w-auto"
                      size="txtPublicSansBold18"
                    >
                      Cart is empty!
                    </Text>
                    <Text
                      className="text-blue_gray-300 text-center text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray300"
                    >
                      Look like you have no items in your shopping cart.
                    </Text>
                  </div>
                </div>
              </div>
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
                  Continue Shopping
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <ProductCheckoutCartColumnsubtotal
                className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-[344px]"
                subtotalprice="-"
                totalprice="-"
                value="Discount codes / Gifts"
                applybuttontext="Apply"
              />
              <Button
                className="cursor-pointer font-bold h-12 text-[15px] text-center w-full"
                shape="round"
                color="blue_gray_900"
                size="xl"
                variant="fill"
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCheckoutCartEmptyPage;
