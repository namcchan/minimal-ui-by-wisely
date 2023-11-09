import React from "react";

import { Button, Img } from "components";

type ProductCheckoutCompleteIllustrationsiProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ProductCheckoutCompleteIllustrationsi: React.FC<
  ProductCheckoutCompleteIllustrationsiProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat h-60 md:h-[200px] p-5 relative w-full"
          style={{ backgroundImage: "url('images/img_illustrationsi.png')" }}
        >
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[8%] w-[73%]">
            <div className="flex flex-row gap-[25px] items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start w-1/2">
                <Img
                  className="h-[52px]"
                  src="images/img_vector_blue_gray_100.svg"
                  alt="vector"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[69px] items-center justify-end mt-[3px] p-[9px] w-full"
                  style={{ backgroundImage: "url('images/img_group217.png')" }}
                >
                  <Img
                    className="h-[49px]"
                    src="images/img_trash_teal_900_49x77.svg"
                    alt="trash"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-2/5">
                <Img
                  className="h-[200px] md:h-auto object-cover w-full"
                  src="images/img_img_200x91.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <Img
            className="absolute h-3.5 left-[17%] object-cover top-[43%]"
            src="images/img_vector_14x132.png"
            alt="vector_One"
          />
          <Img
            className="absolute h-[11px] left-[30%] object-cover top-[22%]"
            src="images/img_vector_14x132.png"
            alt="vector_Two"
          />
          <Button
            className="absolute bottom-[22%] flex h-[57px] items-center justify-center right-[38%] rounded-[28px] w-[57px]"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            <Img src="images/img_group216.png" alt="group216" />
          </Button>
        </div>
      </div>
    </>
  );
};

ProductCheckoutCompleteIllustrationsi.defaultProps = {};

export default ProductCheckoutCompleteIllustrationsi;
