import React from "react";

import { Button, Img, Text } from "components";

type HORIZONTALEcommerceEcommercecarouProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "new" | "pegasusrunning" | "buyNow"
> &
  Partial<{ new: string; pegasusrunning: string; buyNow: string }>;

const HORIZONTALEcommerceEcommercecarou: React.FC<
  HORIZONTALEcommerceEcommercecarouProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-orange-50 h-[264px] md:h-auto relative rounded-[16px] w-[344px] md:w-full">
          <Img
            className="absolute h-[264px] inset-[0] justify-center m-auto object-cover rounded-[16px] w-[344px] md:w-full"
            src="images/img_imgproductm1.png"
            alt="imgproductmOne"
          />
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[264px] items-center justify-end m-auto pt-[100px] relative rounded-[16px] w-full"
            style={{ backgroundImage: "url('images/img_group86.svg')" }}
          >
            <div className="flex flex-col items-start justify-start p-6 sm:px-5 w-[344px] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-white-A700_9b text-xs uppercase w-auto"
                  size="txtPublicSansBold12WhiteA7009b"
                >
                  {props?.new}
                </Text>
                <div className="flex flex-col items-center justify-start pb-6 pt-2 w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPublicSansBold20WhiteA700"
                  >
                    {props?.pegasusrunning}
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Button
                    className="!text-white-A700 cursor-pointer font-bold font-publicsans h-9 mb-6 min-w-[83px] text-center text-sm"
                    shape="round"
                    color="teal_500"
                    size="md"
                    variant="fill"
                  >
                    {props?.buyNow}
                  </Button>
                  <Img
                    className="h-[38px] mt-[22px] w-[92px]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALEcommerceEcommercecarou.defaultProps = {
  new: "New",
  pegasusrunning: "Pegasus Running Shoes",
  buyNow: "Buy Now",
};

export default HORIZONTALEcommerceEcommercecarou;
