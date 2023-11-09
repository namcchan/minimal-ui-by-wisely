import React from "react";

import { Img } from "components";

type Error404IllustrationsiProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Error404Illustrationsi: React.FC<Error404IllustrationsiProps> = (
  props,
) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_illustrationsi.png')" }}
      >
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[23%] w-[35%]">
          <Img
            className="h-[216px] md:h-auto object-cover w-full"
            src="images/img_img_216x121.png"
            alt="img"
          />
        </div>
        <Img
          className="absolute h-[184px] inset-[0] justify-center m-auto object-cover"
          src="images/img_container_teal_500.png"
          alt="container"
        />
      </div>
    </>
  );
};

Error404Illustrationsi.defaultProps = {};

export default Error404Illustrationsi;
