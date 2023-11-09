import React from "react";

import { Img } from "components";

type ComingSoonIllustrationsiProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ComingSoonIllustrationsi: React.FC<ComingSoonIllustrationsiProps> = (
  props,
) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_illustrationsi.png')" }}
      >
        <div className="flex flex-row items-center justify-start w-[93%] md:w-full">
          <Img
            className="h-[146px]"
            src="images/img_group17.svg"
            alt="groupSeventeen"
          />
          <div className="flex flex-col items-center justify-start w-[27%]">
            <Img
              className="h-[200px] md:h-auto object-cover w-full"
              src="images/img_img_200x70.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ComingSoonIllustrationsi.defaultProps = {};

export default ComingSoonIllustrationsi;
