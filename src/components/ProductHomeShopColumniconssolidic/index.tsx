import React from "react";

import { Img, Text } from "components";

type ProductHomeShopColumniconssolidicProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "badgenumber"
> &
  Partial<{ badgenumber: string }>;

const ProductHomeShopColumniconssolidic: React.FC<
  ProductHomeShopColumniconssolidicProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 h-10 md:h-6 p-0.5 relative rounded-bl-[16px] rounded-tl-[16px] shadow-bs12 w-full">
          <Img
            className="absolute h-6 inset-y-[0] left-1/4 my-auto w-6"
            src="images/img_iconssolidic_blue_gray_900_24x24.svg"
            alt="iconssolidic"
          />
          <div className="absolute bg-deep_orange-500 flex flex-col h-5 md:h-auto items-center justify-center px-1.5 right-[19%] rounded-[50%] top-[5%] w-5">
            {!!props?.badgenumber ? (
              <Text
                className="text-center text-white-A700 text-xs w-auto"
                size="txtPublicSansBold12WhiteA700"
              >
                {props?.badgenumber}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

ProductHomeShopColumniconssolidic.defaultProps = {};

export default ProductHomeShopColumniconssolidic;
