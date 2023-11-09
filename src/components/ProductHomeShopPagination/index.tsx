import React from "react";

import { Button, Img, Text } from "components";

type ProductHomeShopPaginationProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userselected"
  | "usertwo"
  | "userthree"
  | "userfour"
  | "userfive"
  | "userellipsis"
> &
  Partial<{
    userselected: string;
    usertwo: string;
    userthree: string;
    userfour: string;
    userfive: string;
    userellipsis: string;
  }>;

const ProductHomeShopPagination: React.FC<ProductHomeShopPaginationProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-8 items-center justify-center rounded-[50%] w-8"
          shape="circle"
          size="md"
        >
          <Img
            className="h-5"
            src="images/img_arrowleft_blue_gray_500.svg"
            alt="arrowleft"
          />
        </Button>
        <Text
          className="bg-blue_gray-900 flex h-8 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-8"
          size="txtPublicSansSemiBold14WhiteA700"
        >
          {props?.userselected}
        </Text>
        <Text
          className="text-base text-blue_gray-900 text-center w-2.5"
          size="txtPublicSansRegular16Bluegray900"
        >
          {props?.usertwo}
        </Text>
        <Text
          className="text-base text-blue_gray-900 text-center w-2.5"
          size="txtPublicSansRegular16Bluegray900"
        >
          {props?.userthree}
        </Text>
        <Text
          className="text-base text-blue_gray-900 text-center w-2.5"
          size="txtPublicSansRegular16Bluegray900"
        >
          {props?.userfour}
        </Text>
        <Text
          className="text-base text-blue_gray-900 text-center w-2.5"
          size="txtPublicSansRegular16Bluegray900"
        >
          {props?.userfive}
        </Text>
        <Text
          className="text-blue_gray-900 text-center text-sm w-2.5"
          size="txtPublicSansRegular14"
        >
          {props?.userellipsis}
        </Text>
        <Button
          className="flex h-8 items-center justify-center rounded-[50%] w-8"
          shape="circle"
          size="md"
        >
          <Img
            className="h-5"
            src="images/img_arrowright.svg"
            alt="arrowright"
          />
        </Button>
      </div>
    </>
  );
};

ProductHomeShopPagination.defaultProps = {
  userselected: "1",
  usertwo: "2",
  userthree: "3",
  userfour: "4",
  userfive: "5",
  userellipsis: "…",
};

export default ProductHomeShopPagination;
