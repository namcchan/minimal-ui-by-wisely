import React from "react";

import { Button, Text } from "components";

type ProductCheckoutAddressRownametwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "username"
  | "language"
  | "default"
  | "useraddress"
  | "userphonenumber"
  | "label"
> &
  Partial<{
    username: string;
    language: string;
    default: string;
    useraddress: string;
    userphonenumber: string;
    label: string;
  }>;

const ProductCheckoutAddressRownametwo: React.FC<
  ProductCheckoutAddressRownametwoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-[416px] sm:w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <div className="flex flex-row items-center justify-start w-auto">
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansSemiBold14"
              >
                {props?.username}
              </Text>
              {!!props?.language ? (
                <Text
                  className="text-blue_gray-500 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray500"
                >
                  {props?.language}
                </Text>
              ) : null}
            </div>
            {!!props?.default ? (
              <Button
                className="!text-light_blue-900 cursor-pointer font-bold font-publicsans h-6 min-w-[55px] rounded-md text-center text-xs"
                shape="round"
                color="cyan_A700_28"
                size="xs"
                variant="fill"
              >
                {props?.default}
              </Button>
            ) : null}
          </div>
          <Text
            className="text-blue_gray-500 text-sm w-full"
            size="txtPublicSansRegular14Bluegray500"
          >
            {props?.useraddress}
          </Text>
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray500"
          >
            {props?.userphonenumber}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-auto">
          <div className="border border-blue_gray-300_51 border-solid flex flex-col h-[30px] md:h-auto items-center justify-center px-2 rounded-lg w-auto">
            {!!props?.label ? (
              <Text
                className="text-[13px] text-blue_gray-900 w-auto"
                size="txtPublicSansBold13"
              >
                {props?.label}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

ProductCheckoutAddressRownametwo.defaultProps = {
  username: "Lucian Obrien",
  useraddress: "1147 Rohan Drive Suite 819 - Burlington, VT / 82021",
  userphonenumber: "904-966-2836",
};

export default ProductCheckoutAddressRownametwo;
