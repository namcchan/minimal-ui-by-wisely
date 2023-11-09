import React from "react";

import { Line, Text } from "components";

type ProductDetailsTabsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userdescription" | "userreviews" | "dividerTwo"
> &
  Partial<{ userdescription: string; userreviews: string; dividerTwo: string }>;

const ProductDetailsTabs: React.FC<ProductDetailsTabsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start my-auto w-[18%]">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="border-b-2 border-blue_gray-900 border-solid flex flex-col h-12 md:h-auto items-center justify-center w-auto">
              {!!props?.userdescription ? (
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansSemiBold14"
                >
                  {props?.userdescription}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-col h-12 md:h-auto items-center justify-center w-auto">
              <Text
                className="text-blue_gray-500 text-sm w-auto"
                size="txtPublicSansSemiBold14Bluegray500"
              >
                {props?.userreviews}
              </Text>
            </div>
          </div>
        </div>
        {!!props?.dividerTwo ? (
          <Line className="absolute bg-blue_gray-300_14 bottom-[0] h-0.5 inset-x-[0] mx-auto w-full" />
        ) : null}
      </div>
    </>
  );
};

ProductDetailsTabs.defaultProps = { userreviews: "Reviews (4)" };

export default ProductDetailsTabs;
