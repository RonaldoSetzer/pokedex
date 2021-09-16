import React from "react";

import { Pagination } from "../../components/";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

const pages = [{ index: 1 }, { index: 2 }, { index: 3 }];

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = { pages };
