import React from "react";

import { Text } from "components";

type ProductCheckoutCartEmptyCardheaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "cartitems"
> &
  Partial<{ cartitems: string }>;

const ProductCheckoutCartEmptyCardheader: React.FC<
  ProductCheckoutCartEmptyCardheaderProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-blue_gray-900 text-lg w-full"
              size="txtPublicSansBold18Bluegray900"
            >
              {props?.cartitems}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCheckoutCartEmptyCardheader.defaultProps = { cartitems: "Cart (3)" };

export default ProductCheckoutCartEmptyCardheader;
