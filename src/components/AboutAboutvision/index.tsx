import React from "react";

import { Button, Img } from "components";

type AboutAboutvisionProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const AboutAboutvision: React.FC<AboutAboutvisionProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 h-[120px] mt-[-NaNpx] mx-auto w-full z-[1]"></div>
        <div className="flex flex-col items-center justify-start mb-auto mt-[-120px] mx-auto w-4/5 z-[1]">
          <div className="h-[648px] md:h-[863px] relative rounded-[16px] w-full">
            <Img
              className="absolute h-[648px] inset-[0] justify-center m-auto object-cover rounded-[16px] w-full"
              src="images/img_img_1.png"
              alt="img_One"
            />
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pt-[206px] md:px-10 sm:px-5 px-[206px] rounded-[16px] w-full"
              style={{ backgroundImage: "url('images/img_group108.svg')" }}
            >
              <div className="flex flex-col md:gap-10 gap-[184px] items-center justify-start mt-[89px] w-full">
                <Button
                  className="flex h-14 items-center justify-center rounded-[50%] shadow-bs8 w-14"
                  shape="circle"
                  color="teal_500"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_computer_white_a700.svg"
                    alt="computer"
                  />
                </Button>
                <div className="flex md:flex-col flex-row gap-10 items-center justify-start py-10 w-auto md:w-full">
                  <Img
                    className="h-8 w-20"
                    src="images/img_qrcode.svg"
                    alt="qrcode"
                  />
                  <Img
                    className="h-8"
                    src="images/img_shape.svg"
                    alt="shape_One"
                  />
                  <Img
                    className="h-8 w-[106px]"
                    src="images/img_iconsbrandicbrandspotify.svg"
                    alt="iconsbrandicbra"
                  />
                  <Img
                    className="h-8 w-[117px]"
                    src="images/img_iconsbrandicbrandnetflix.svg"
                    alt="iconsbrandicbra_One"
                  />
                  <Img
                    className="h-8 w-[77px]"
                    src="images/img_volume_white_a700.svg"
                    alt="volume"
                  />
                  <Img
                    className="h-8 w-[106px]"
                    src="images/img_iconsbrandicbrandamazon.svg"
                    alt="iconsbrandicbra_Two"
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

AboutAboutvision.defaultProps = {};

export default AboutAboutvision;
