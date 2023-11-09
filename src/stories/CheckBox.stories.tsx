import React from "react";
import { CheckBox } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "namcchan_s_application3/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox: Story<any> = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "RoundedBorder0",
  label: "Checkbox",
  inputClassName: "mr-1",
};
