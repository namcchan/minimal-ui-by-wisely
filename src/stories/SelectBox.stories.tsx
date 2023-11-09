import React from "react";
import { Meta, Story } from "@storybook/react";
import { SelectBox } from "components";

export default {
  title: "namcchan_s_application3/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox: Story<any> = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder0",
  variant: "OutlineBluegray30033",
  className: "w-[300px]",
};
