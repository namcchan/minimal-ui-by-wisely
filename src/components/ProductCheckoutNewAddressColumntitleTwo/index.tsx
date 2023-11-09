import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

type ProductCheckoutNewAddressColumntitleTwoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "titleTwo"
  | "labelThree"
  | "labelFour"
  | "labelFive"
  | "delivertothisaddress"
  | "cancel"
> &
  Partial<{
    titleTwo: string;
    labelThree: string;
    labelFour: string;
    labelFive: string;
    delivertothisaddress: string;
    cancel: string;
  }>;

const wrapSixOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductCheckoutNewAddressColumntitleTwo: React.FC<
  ProductCheckoutNewAddressColumntitleTwoProps
> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_dialognewcreditcard.svg')" }}
      >
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[720px] rounded-[16px] shadow-bs6 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start sm:pl-5 pl-6 pr-3 py-6 w-full">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtPublicSansBold18Bluegray900"
            >
              {props?.titleTwo}
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start pb-6 sm:px-5 px-6 w-full">
            <div className="flex flex-row gap-6 items-start justify-start w-auto">
              <div className="flex flex-row items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start p-2 w-10">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconssolidicradioon_teal_500.svg"
                    alt="iconssolidicrad"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.labelThree}
                </Text>
              </div>
              <div className="flex flex-row items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start p-2 w-10">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconssolidicradiooff.svg"
                    alt="iconssolidicrad_One"
                  />
                </div>
                <Text
                  className="text-blue_gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  {props?.labelFour}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="wrap"
                  placeholder="Full Name"
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="wrap_One"
                  placeholder="Phone Number"
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="wrap_Two"
                placeholder="Address"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              ></Input>
            </div>
            <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="wrap_Three"
                  placeholder="Town / City"
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="wrap_Four"
                  placeholder="State"
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Input
                  name="wrap_Five"
                  placeholder="Zip / Postal Code"
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_300_33"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <SelectBox
                className="!text-blue_gray-300 font-publicsans h-[54px] rounded-lg text-left text-sm w-full"
                placeholderClassName="!text-blue_gray-300"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown_blue_gray_500.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="wrap_Six"
                options={wrapSixOptionsList}
                isSearchable={false}
                placeholder="Country"
                shape="round"
                color="blue_gray_300_33"
                size="md"
                variant="outline"
              />
            </div>
            <div className="flex flex-row items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-center p-2 w-10">
                <Img
                  className="h-6 w-6"
                  src="images/img_clock_blue_gray_500.svg"
                  alt="clock"
                />
              </div>
              <Text
                className="text-blue_gray-900 text-sm w-auto"
                size="txtPublicSansRegular14"
              >
                {props?.labelFive}
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
            <div className="flex flex-col gap-[23px] justify-start w-full">
              <Img
                className="h-px w-[720px]"
                src="images/img_divider_blue_gray_300_1x720.svg"
                alt="divider_One"
              />
              <div className="flex flex-row gap-3 items-center justify-end md:ml-[0] ml-[438px] w-[36%] md:w-full">
                <Button
                  className="cursor-pointer font-bold font-publicsans h-9 min-w-[175px] text-center text-sm"
                  shape="round"
                  color="blue_gray_900"
                  size="md"
                  variant="fill"
                >
                  {props?.delivertothisaddress}
                </Button>
                <Button
                  className="cursor-pointer font-bold font-publicsans h-9 min-w-[71px] text-center text-sm"
                  shape="round"
                  color="blue_gray_300_51"
                  size="md"
                  variant="outline"
                >
                  {props?.cancel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCheckoutNewAddressColumntitleTwo.defaultProps = {
  titleTwo: "New Address",
  labelThree: "Home",
  labelFour: "Office",
  labelFive: "Use this address as default.",
  delivertothisaddress: "Deliver to this Address",
  cancel: "Cancel",
};

export default ProductCheckoutNewAddressColumntitleTwo;
