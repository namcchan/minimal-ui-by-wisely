import React from "react";

import { Img, Text } from "components";

type ProductHomeShopProductcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "productimage" | "labelFour" | "country" | "signal" | "oldprice" | "price"
> &
  Partial<{
    productimage: string;
    labelFour: string;
    country: string;
    signal: string;
    oldprice: string;
    price: string;
  }>;

const ProductHomeShopProductcard: React.FC<ProductHomeShopProductcardProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start p-2 w-[270px]">
          <div className="relative rounded-[12px] w-[254px]">
            <Img
              className="absolute h-[254px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[254px]"
              alt="imgproductmEight"
              src={props?.productimage}
            />
            <div className="absolute bg-deep_orange-500 flex flex-col h-6 md:h-auto items-center justify-start px-1.5 right-[3%] rounded-md top-[3%] w-auto">
              {!!props?.labelFour ? (
                <Text
                  className="text-center text-white-A700 text-xs w-auto"
                  size="txtPublicSansBold12WhiteA700"
                >
                  {props?.labelFour}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-start pb-6 pt-4 sm:px-5 px-6 w-[270px] md:w-full">
          <Text
            className="text-blue_gray-900 text-sm w-full"
            size="txtPublicSansSemiBold14"
          >
            {props?.country}
          </Text>
          <div className="flex flex-row items-center justify-between w-full">
            {!!props?.signal ? (
              <Img
                className="h-[18px] w-[42px]"
                alt="signal_One"
                src={props?.signal}
              />
            ) : null}
            <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
              {!!props?.oldprice ? (
                <Text
                  className="line-through text-base text-blue_gray-300 text-right w-auto"
                  size="txtPublicSansSemiBold16Bluegray300"
                >
                  {props?.oldprice}
                </Text>
              ) : null}
              {!!props?.price ? (
                <Text
                  className="text-base text-blue_gray-900 w-auto"
                  size="txtPublicSansSemiBold16"
                >
                  {props?.price}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductHomeShopProductcard.defaultProps = {
  productimage: "images/img_imgproductm8.png",
  country: "Jordan Delta",
};

export default ProductHomeShopProductcard;
