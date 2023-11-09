import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "namcchan_s_application3/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder8",
  variant: "OutlineBluegray30033",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
