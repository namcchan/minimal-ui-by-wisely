import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header1 from "components/Header1";
import ProductCheckoutAddressRownametwo from "components/ProductCheckoutAddressRownametwo";
import ProductCheckoutAddressStephorizontal from "components/ProductCheckoutAddressStephorizontal";
import ProductCheckoutCartColumnsubtotal from "components/ProductCheckoutCartColumnsubtotal";

const ProductCheckoutAddressPage: React.FC = () => {
  const productCheckoutAddressRownametwoPropList = [
    {
      useraddress: "18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337",
      username: "Deja Brady",
      userphonenumber: "399-757-9909",
    },
    {
      useraddress: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
      username: "Jayvion Simon",
      userphonenumber: "365-374-4961",
    },
    {
      useraddress: "110 Lamar Station Apt. 730 - Hagerstown, OK / 49808",
      username: "Harrison Stein",
      userphonenumber: "692-767-2903",
    },
  ];

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
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[712px] w-full">
            <ProductCheckoutAddressStephorizontal className="flex flex-1 flex-col gap-4 items-center justify-center w-full" />
            <List
              className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-4 items-center justify-center w-full">
                <Img
                  className="h-6 w-full"
                  src="images/img_stack_2.svg"
                  alt="stack"
                />
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  Billing & address
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center w-full">
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
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start max-w-[712px] w-full">
              <ProductCheckoutAddressRownametwo
                className="bg-white-A700 flex sm:flex-col flex-row gap-4 items-end justify-end p-6 sm:px-5 rounded-[16px] shadow-bs4 w-full"
                language=" (Home)"
                default="Default"
              />
              <List
                className="flex flex-col gap-6 items-center w-full"
                orientation="vertical"
              >
                {productCheckoutAddressRownametwoPropList.map(
                  (props, index) => (
                    <React.Fragment
                      key={`ProductCheckoutAddressRownametwo${index}`}
                    >
                      <ProductCheckoutAddressRownametwo
                        className="bg-white-A700 flex flex-1 md:flex-col flex-row gap-4 items-end justify-end p-6 sm:px-5 rounded-[16px] shadow-bs4 w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ),
                )}
              </List>
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
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
                <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-2 rounded-lg w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                  <Text
                    className="text-center text-sm text-teal-500 w-auto"
                    size="txtPublicSansBold14Teal500"
                  >
                    New address
                  </Text>
                </div>
              </div>
            </div>
            <ProductCheckoutCartColumnsubtotal
              className="bg-white-A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs4 w-[344px]"
              discountprice="-$5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCheckoutAddressPage;
