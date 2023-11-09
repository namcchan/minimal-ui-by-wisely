import React from "react";

import { Text } from "components";

type PreviewComponentsColumnsubtractProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "subtractimage" | "vectorimage" | "radiobuttontext"
> &
  Partial<{
    subtractimage: string;
    vectorimage: string;
    radiobuttontext: string;
  }>;

const PreviewComponentsColumnsubtract: React.FC<
  PreviewComponentsColumnsubtractProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-300_5f flex flex-col h-[172px] md:h-auto items-center justify-center w-[172px]">
          <div className="h-[132px] md:h-[47px] p-[42px] md:px-10 sm:px-5 relative w-[132px]">
            {!!props?.subtractimage ? (
              <div className="absolute bg-blue_gray-300_70 h-[47px] inset-[0] justify-center m-auto rounded-[23px] w-[47px]"></div>
            ) : null}
            {!!props?.vectorimage ? (
              <div className="absolute bg-blue_gray-300 h-[26px] inset-[0] justify-center m-auto rounded-[50%] w-[26px]"></div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 w-full">
          {!!props?.radiobuttontext ? (
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.radiobuttontext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

PreviewComponentsColumnsubtract.defaultProps = {};

export default PreviewComponentsColumnsubtract;
