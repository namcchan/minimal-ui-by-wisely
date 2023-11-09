import React from "react";

import { Button, Img, Input, Text, TextArea } from "components";

type ContactContactcontentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "description" | "submitbutton"
> &
  Partial<{ description: JSX.Element | string; submitbutton: string }>;

const ContactContactcontent: React.FC<ContactContactcontentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start w-full">
          <Text
            className="leading-[48.00px] max-w-[536px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtPublicSansBold32"
          >
            {props?.description}
          </Text>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="wrap"
                placeholder="Name"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              ></Input>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="wrap_One"
                placeholder="Email"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              ></Input>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="wrap_Two"
                placeholder="Subject"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_300_33"
                size="sm"
                variant="outline"
              ></Input>
            </div>
            <div className="flex flex-col items-start justify-start rounded-lg w-full">
              <TextArea
                className="bg-transparent border border-blue_gray-300_33 border-solid font-publicsans px-3.5 py-4 rounded-lg placeholder:text-blue_gray-300 text-blue_gray-300 text-left text-sm w-full"
                name="wrap_Three"
                placeholder="Enter your message here"
              ></TextArea>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold font-publicsans h-12 min-w-[120px] text-[15px] text-center"
            shape="round"
            color="blue_gray_900"
            size="xl"
            variant="fill"
          >
            {props?.submitbutton}
          </Button>
        </div>
        <Img
          className="flex-1 md:flex-none h-[600px] sm:h-auto object-cover rounded-[16px] w-full"
          src="images/img_map_600x536.png"
          alt="map"
        />
      </div>
    </>
  );
};

ContactContactcontent.defaultProps = {
  description: (
    <>
      Feel free to contact us. <br />
      We&#39;ll be glad to hear from you, buddy.
    </>
  ),
  submitbutton: "Submit Now",
};

export default ContactContactcontent;
