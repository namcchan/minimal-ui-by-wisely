import React from "react";

import { Button, Img, Text } from "components";

type HORIZONTALBankingStackOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimage"
  | "balancetext"
  | "price"
  | "cardnumber"
  | "totalactiveuserOne"
  | "cardholdername"
  | "totalactiveuserTwo"
  | "validdate"
> &
  Partial<{
    userimage: string;
    balancetext: string;
    price: string;
    cardnumber: string;
    totalactiveuserOne: string;
    cardholdername: string;
    totalactiveuserTwo: string;
    validdate: string;
  }>;

const HORIZONTALBankingStackOne: React.FC<HORIZONTALBankingStackOneProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[0] h-6 inset-x-[0] mx-auto w-[97%] sm:w-full">
          <div className="absolute bg-blue_gray-300_68 h-6 inset-[0] justify-center m-auto rounded-bl-[12px] rounded-br-[12px] w-[95%]"></div>
          <div className="absolute bg-blue_gray-300_70 h-4 inset-x-[0] mx-auto rounded-bl-[12px] rounded-br-[12px] top-[0] w-full"></div>
        </div>
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="h-[260px] relative rounded-[16px] w-full">
            <Img
              className="absolute h-[260px] inset-[0] justify-center m-auto object-cover rounded-[16px] w-full"
              alt="img_One"
              src={props?.userimage}
            />
            <div className="absolute bg-gray-900_a2 md:h-[223px] h-[260px] inset-[0] justify-center m-auto sm:pl-5 pl-6 rounded-[16px] w-full">
              <div className="absolute flex flex-col gap-[34px] md:h-auto h-max inset-[0] items-end justify-between m-auto w-[388px] sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-sm text-white-A700_85 w-auto"
                    size="txtPublicSansSemiBold14WhiteA70085"
                  >
                    {props?.balancetext}
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtPublicSansBold32WhiteA700"
                    >
                      {props?.price}
                    </Text>
                    <Button
                      className="flex h-9 items-center justify-center w-9"
                      shape="circle"
                      size="md"
                    >
                      <Img
                        className="h-5"
                        src="images/img_iconssolidic_white_a700_36x36.svg"
                        alt="iconssolidic"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center justify-end w-full">
                  <div className="flex flex-col items-center justify-start w-[10%]">
                    <Img
                      className="h-6 md:h-auto object-cover w-full"
                      src="images/img_img_4.png"
                      alt="img_Two"
                    />
                  </div>
                  <Text
                    className="text-base text-right text-white-A700 w-auto"
                    size="txtPublicSansSemiBold16WhiteA700"
                  >
                    {props?.cardnumber}
                  </Text>
                </div>
                <div className="flex flex-row gap-10 items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-white-A700_85 text-xs w-auto"
                      size="txtPublicSansRegular12WhiteA70085"
                    >
                      {props?.totalactiveuserOne}
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPublicSansSemiBold16WhiteA700"
                    >
                      {props?.cardholdername}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-white-A700_85 text-xs w-auto"
                      size="txtPublicSansRegular12WhiteA70085"
                    >
                      {props?.totalactiveuserTwo}
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPublicSansSemiBold16WhiteA700"
                    >
                      {props?.validdate}
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[50px] right-[0] w-[104px]"
                src="images/img_carousel.svg"
                alt="carousel"
              />
              <div className="absolute flex flex-col items-center justify-center p-2 right-[0] top-[0] w-[52px]">
                <Button
                  className="flex h-9 items-center justify-center w-9"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-5"
                    src="images/img_iconssolidic_36x36.svg"
                    alt="iconssolidic_One"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HORIZONTALBankingStackOne.defaultProps = {
  userimage: "images/img_img_260x436.png",
  balancetext: "Current Balance",
  price: "$23,994.72",
  cardnumber: "**** **** **** 6789",
  totalactiveuserOne: "Card Holder",
  cardholdername: "Carlota Monteiro",
  totalactiveuserTwo: "Valid dates",
  validdate: "11/22",
};

export default HORIZONTALBankingStackOne;
