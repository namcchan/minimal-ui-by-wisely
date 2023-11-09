import React from "react";

import { Img, Text } from "components";

type ProductCheckoutCartColumnsubtotalProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "ordersummarytitle"
  | "subtotal"
  | "subtotalprice"
  | "discount"
  | "discountprice"
  | "shipping"
  | "shippingprice"
  | "total"
  | "totalprice"
  | "vatincludedif"
  | "value"
  | "applybuttontext"
> &
  Partial<{
    ordersummarytitle: string;
    subtotal: string;
    subtotalprice: string;
    discount: string;
    discountprice: string;
    shipping: string;
    shippingprice: string;
    total: string;
    totalprice: string;
    vatincludedif: string;
    value: string;
    applybuttontext: string;
  }>;

const ProductCheckoutCartColumnsubtotal: React.FC<
  ProductCheckoutCartColumnsubtotalProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 pr-4 py-6 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-blue_gray-900 text-lg w-full"
                size="txtPublicSansBold18Bluegray900"
              >
                {props?.ordersummarytitle}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start pb-6 sm:px-5 px-6 w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="flex-1 text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.subtotal}
              </Text>
              <Text
                className="flex-1 text-blue_gray-900 text-right text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.subtotalprice}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="flex-1 text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.discount}
              </Text>
              <Text
                className="flex-1 text-blue_gray-900 text-right text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.discountprice}
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="flex-1 text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray500"
              >
                {props?.shipping}
              </Text>
              <Text
                className="flex-1 text-blue_gray-900 text-right text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.shippingprice}
              </Text>
            </div>
            <Img
              className="h-px w-full"
              src="images/img_divider_blue_gray_300_1x296.svg"
              alt="divider"
            />
            <div className="flex flex-col gap-2 items-end justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="flex-1 text-base text-blue_gray-900 w-auto"
                  size="txtPublicSansSemiBold16"
                >
                  {props?.total}
                </Text>
                <Text
                  className="flex-1 text-base text-deep_orange-500 text-right w-auto"
                  size="txtPublicSansSemiBold16Deeporange500"
                >
                  {props?.totalprice}
                </Text>
              </div>
              <Text
                className="text-blue_gray-500 text-right text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.vatincludedif}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="border border-blue_gray-300_33 border-solid flex flex-row h-[54px] md:h-auto items-center justify-between px-3.5 rounded-lg w-full">
              {!!props?.value ? (
                <Text
                  className="flex-1 text-blue_gray-300 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray300"
                >
                  {props?.value}
                </Text>
              ) : null}
              <div className="flex flex-col h-10 md:h-auto items-center justify-center w-auto">
                <div className="flex flex-col h-9 md:h-auto items-center justify-center px-2 rounded-lg w-auto">
                  {!!props?.applybuttontext ? (
                    <Text
                      className="text-center text-sm text-teal-500 w-auto"
                      size="txtPublicSansBold14Teal500"
                    >
                      {props?.applybuttontext}
                    </Text>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCheckoutCartColumnsubtotal.defaultProps = {
  ordersummarytitle: "Order Summary",
  subtotal: "Sub Total",
  subtotalprice: "$5.79",
  discount: "Discount",
  discountprice: "-",
  shipping: "Shipping",
  shippingprice: "-",
  total: "Total",
  totalprice: "$62.02",
  vatincludedif: "(VAT included if applicable)",
};

export default ProductCheckoutCartColumnsubtotal;
