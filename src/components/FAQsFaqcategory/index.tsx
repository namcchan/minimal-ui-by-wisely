import React from "react";

import { Img, Text } from "components";

type FAQsFaqcategoryProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userimage" | "usertext"
> &
  Partial<{ userimage: string; usertext: string }>;

const FAQsFaqcategory: React.FC<FAQsFaqcategoryProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
          style={{
            backgroundImage: "url('images/img_iconsfaqsicaccount.png')",
          }}
        >
          <Img className="h-10 w-10" alt="user" src={props?.userimage} />
        </div>
        {!!props?.usertext ? (
          <Text
            className="leading-[22.00px] max-w-[124px] md:max-w-full text-blue_gray-900 text-center text-sm"
            size="txtPublicSansSemiBold14"
          >
            {props?.usertext}
          </Text>
        ) : null}
      </div>
    </>
  );
};

FAQsFaqcategory.defaultProps = { userimage: "images/img_user.svg" };

export default FAQsFaqcategory;
