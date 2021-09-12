import React from "react";

import { PokeCard } from "../../components/";

export default {
  title: "Components/PokeCard",
  component: PokeCard,
};

const Template = (args) => <PokeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "004",
  name: "Squirtle",
  imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  selected: true,
};

export const Blank = Template.bind({});
