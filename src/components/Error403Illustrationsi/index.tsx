import React from "react";

import { Img } from "components";

type Error403IllustrationsiProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Error403Illustrationsi: React.FC<Error403IllustrationsiProps> = (
  props,
) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_illustrationsi.png')" }}
      >
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[16%] w-[38%]">
          <Img
            className="h-[216px] md:h-auto object-cover w-full"
            src="images/img_img_216x133.png"
            alt="img"
          />
        </div>
        <Img
          className="absolute h-[183px] inset-[0] justify-center m-auto object-cover"
          src="images/img_container.png"
          alt="container"
        />
      </div>
    </>
  );
};

Error403Illustrationsi.defaultProps = {};

export default Error403Illustrationsi;
