import React from "react";

import { Button, Text } from "components";

type ComingSoonColumnvalueProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "useremail" | "notifyme"
> &
  Partial<{ useremail: string; notifyme: string }>;

const ComingSoonColumnvalue: React.FC<ComingSoonColumnvalueProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-blue_gray-300_33 border-solid flex flex-row h-[54px] md:h-auto items-center justify-between px-3.5 rounded-lg w-full">
          {!!props?.useremail ? (
            <Text
              className="flex-1 text-blue_gray-300 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray300"
            >
              {props?.useremail}
            </Text>
          ) : null}
          <div className="flex flex-col h-12 md:h-auto items-center justify-center px-1 w-auto">
            {!!props?.notifyme ? (
              <Button
                className="cursor-pointer font-bold font-publicsans h-12 min-w-[103px] text-[15px] text-center"
                shape="round"
                color="blue_gray_900"
                size="xl"
                variant="fill"
              >
                {props?.notifyme}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

ComingSoonColumnvalue.defaultProps = {};

export default ComingSoonColumnvalue;
