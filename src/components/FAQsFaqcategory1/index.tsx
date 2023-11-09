import React from "react";

import { Img, Text } from "components";

type FAQsFaqcategory1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "text"
> &
  Partial<{ text: string }>;

const FAQsFaqcategory1: React.FC<FAQsFaqcategory1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
          style={{
            backgroundImage: "url('images/img_iconsfaqsicaccount.png')",
          }}
        >
          <Img
            className="h-[39px] w-10"
            src="images/img_folder.svg"
            alt="folder"
          />
        </div>
        <Text
          className="text-blue_gray-900 text-center text-sm w-auto"
          size="txtPublicSansSemiBold14"
        >
          {props?.text}
        </Text>
      </div>
    </>
  );
};

FAQsFaqcategory1.defaultProps = { text: "Payment" };

export default FAQsFaqcategory1;
