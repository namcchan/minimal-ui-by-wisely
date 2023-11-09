import React from "react";
import { Radio } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "namcchan_s_application3/Radio",
  component: Radio,
};

export const SampleRadio: Story<any> = (args) => <Radio {...args} />;

SampleRadio.args = { label: "Radio", inputClassName: "mr-1" };
