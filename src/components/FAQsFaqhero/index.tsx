import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

type FAQsFaqheroProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "startanewprojec"
> &
  Partial<{ startanewprojec: JSX.Element | string }>;

const FAQsFaqhero: React.FC<FAQsFaqheroProps> = (props) => {
  const [wrapvalue, setWrapvalue] = React.useState<string>("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[560px] relative w-full">
            <Img
              className="absolute h-[560px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_img_3.png"
              alt="img"
            />
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-[226px] pt-[226px] w-full"
              style={{ backgroundImage: "url('images/img_group89.svg')" }}
            >
              <div className="flex flex-col gap-10 items-start justify-start pb-20 md:pl-10 pl-36 sm:pl-5 w-auto md:w-full">
                {props?.startanewprojec}
                <div className="flex flex-col items-start justify-start w-[360px] sm:w-full">
                  <Input
                    name="wrap"
                    placeholder="Search support"
                    value={wrapvalue}
                    onChange={(e) => setWrapvalue(e)}
                    className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-publicsans font-semibold p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-300_33 border-solid flex w-full"
                    prefix={
                      <Img
                        className="cursor-pointer h-6 mr-2 my-auto"
                        src="images/img_search_blue_gray_300.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#919eab"
                        className="cursor-pointer h-6 my-auto"
                        onClick={() => setWrapvalue("")}
                        style={{
                          visibility:
                            wrapvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={24}
                        width={24}
                        viewBox="0 0 24 24"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FAQsFaqhero.defaultProps = {
  startanewprojec: (
    <Text
      className="leading-[80.00px] max-w-[527px] md:max-w-full md:text-5xl text-[64px] text-white-A700"
      size="txtPublicSansExtraBold64"
    >
      <span className="text-teal-500 font-publicsans text-left font-extrabold">
        How
      </span>
      <span className="text-white-A700 font-publicsans text-left font-extrabold">
        <>
          {" "}
          <br />
        </>
      </span>
      <span className="text-white-A700 font-publicsans text-left font-extrabold">
        C
      </span>
      <span className="text-white-A700 font-publicsans text-left font-extrabold">
        an we help you
      </span>
      <span className="text-white-A700 font-publicsans text-left font-extrabold">
        ?
      </span>
    </Text>
  ),
};

export default FAQsFaqhero;
