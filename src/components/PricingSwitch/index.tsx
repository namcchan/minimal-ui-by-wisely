import React from "react";

import { Img, Text } from "components";

type PricingSwitchProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "label" | "labelOne"
> &
  Partial<{ label: string; labelOne: string }>;

const PricingSwitch: React.FC<PricingSwitchProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.label ? (
          <Text
            className="text-blue_gray-900 text-right text-xs uppercase w-auto"
            size="txtPublicSansBold12Bluegray900"
          >
            {props?.label}
          </Text>
        ) : null}
        <Img
          className="h-[38px] w-[33px]"
          src="images/img_switchcontainer.svg"
          alt="switchcontainer"
        />
        <Text
          className="text-blue_gray-900 text-xs uppercase w-auto"
          size="txtPublicSansBold12Bluegray900"
        >
          {props?.labelOne}
        </Text>
      </div>
    </>
  );
};

PricingSwitch.defaultProps = { labelOne: "YEARLY" };

export default PricingSwitch;
