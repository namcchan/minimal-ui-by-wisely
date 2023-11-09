import React from "react";

import { Text } from "components";

type ProductCheckoutPaymentColumnmanuelcooperProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "address" | "username" | "language" | "address1" | "phonenumber"
> &
  Partial<{
    address: string;
    username: string;
    language: string;
    address1: string;
    phonenumber: string;
  }>;

const ProductCheckoutPaymentColumnmanuelcooper: React.FC<
  ProductCheckoutPaymentColumnmanuelcooperProps
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
                {props?.address}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start pb-6 sm:px-5 px-6 w-full">
          <div className="flex flex-row items-center justify-start w-auto">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.username}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray300"
            >
              {props?.language}
            </Text>
          </div>
          <Text
            className="leading-[22.00px] max-w-[296px] md:max-w-full text-blue_gray-500 text-sm"
            size="txtPublicSansRegular14Bluegray500"
          >
            {props?.address1}
          </Text>
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray500"
          >
            {props?.phonenumber}
          </Text>
        </div>
      </div>
    </>
  );
};

ProductCheckoutPaymentColumnmanuelcooper.defaultProps = {
  address: "Address",
  username: "Manuel Cooper",
  language: " (Home)",
  address1: "1147 Rohan Drive Suite 819 - Burlington, VT / 82021",
  phonenumber: "904-966-2836",
};

export default ProductCheckoutPaymentColumnmanuelcooper;
