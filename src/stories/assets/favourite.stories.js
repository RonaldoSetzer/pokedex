import React from "react";

import { Favourite } from "../../assets";

export default {
  title: "Assets/Favourite",
  component: Favourite,
};

const Template = (args) => <Favourite {...args} />;

export const Default = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};
