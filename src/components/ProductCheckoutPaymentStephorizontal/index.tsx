import React from "react";

import { Img, Line, Text } from "components";

type ProductCheckoutPaymentStephorizontalProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userinfotext"
> &
  Partial<{ userinfotext: string }>;

const ProductCheckoutPaymentStephorizontal: React.FC<
  ProductCheckoutPaymentStephorizontalProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-center w-full">
          <Line className="bg-teal-500 h-0.5 w-[42%]" />
          <Img
            className="h-6 w-6"
            src="images/img_checkmark_teal_500_32x32.svg"
            alt="checkmark_One"
          />
          <Line className="bg-teal-500 h-0.5 w-[42%]" />
        </div>
        <Text
          className="text-blue_gray-900 text-center text-sm w-auto"
          size="txtPublicSansSemiBold14"
        >
          {props?.userinfotext}
        </Text>
      </div>
    </>
  );
};

ProductCheckoutPaymentStephorizontal.defaultProps = {
  userinfotext: "Billing & address",
};

export default ProductCheckoutPaymentStephorizontal;
