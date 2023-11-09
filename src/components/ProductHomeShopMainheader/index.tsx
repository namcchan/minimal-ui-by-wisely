import React from "react";

import { Button, Img, SelectBox, Text } from "components";

type ProductHomeShopMainheaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "hometext" | "componentstext" | "docstext" | "label" | "labelOne"
> &
  Partial<{
    hometext: string;
    componentstext: string;
    docstext: string;
    label: string;
    labelOne: string;
  }>;

const pagesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductHomeShopMainheader: React.FC<ProductHomeShopMainheaderProps> = (
  props,
) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_mainheader.svg')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
          <Img
            className="h-10 md:h-auto object-cover w-10"
            src="images/img_logo.png"
            alt="logo"
          />
          <div className="flex flex-1 flex-row gap-10 items-center justify-end w-full">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.hometext}
            </Text>
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.componentstext}
            </Text>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <div className="bg-teal-500_85 h-1.5 rounded-[50%] w-1.5"></div>
              <SelectBox
                className="font-publicsans font-semibold text-left text-sm text-teal-500 w-[82%] sm:w-full"
                placeholderClassName="text-teal-500"
                indicator={
                  <Img
                    className="h-4 mr-[0] w-4"
                    src="images/img_arrowdown_teal_500_16x16.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="group336"
                options={pagesOptionsList}
                isSearchable={false}
                placeholder="Pages"
              />
            </div>
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.docstext}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center px-5 w-auto">
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="circle"
              size="md"
            >
              <Img
                className="h-5"
                src="images/img_iconsduotoneicsettings.svg"
                alt="iconsduotoneics"
              />
            </Button>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-auto">
            <div className="border border-blue_gray-300_51 border-solid flex flex-col h-9 md:h-auto items-center justify-center px-3 rounded-lg w-auto">
              {!!props?.label ? (
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtPublicSansBold14"
                >
                  {props?.label}
                </Text>
              ) : null}
            </div>
            <div className="bg-blue_gray-900 flex flex-col h-9 md:h-auto items-center justify-center px-3 rounded-lg w-auto">
              {!!props?.labelOne ? (
                <Text
                  className="text-center text-sm text-white-A700 w-auto"
                  size="txtPublicSansBold14WhiteA700"
                >
                  {props?.labelOne}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductHomeShopMainheader.defaultProps = {
  hometext: "Home",
  componentstext: "Components",
  docstext: "Docs",
};

export default ProductHomeShopMainheader;
