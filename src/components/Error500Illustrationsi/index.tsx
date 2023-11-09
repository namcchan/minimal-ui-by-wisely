import React from "react";

import { Img } from "components";

type Error500IllustrationsiProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Error500Illustrationsi: React.FC<Error500IllustrationsiProps> = (
  props,
) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_illustrationsi.png')" }}
      >
        <div className="flex flex-row gap-[34px] items-center justify-end mr-[13px] w-[84%] md:w-full">
          <Img
            className="h-[158px]"
            src="images/img_container_teal_500_158x153.svg"
            alt="container"
          />
          <div className="flex flex-col items-center justify-start w-[26%]">
            <Img
              className="h-[216px] md:h-auto object-cover w-full"
              src="images/img_img_216x66.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

Error500Illustrationsi.defaultProps = {};

export default Error500Illustrationsi;
