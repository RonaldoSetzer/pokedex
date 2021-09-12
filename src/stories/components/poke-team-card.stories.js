import React from "react";

import { PokeTeamCard } from "../../components/";

export default {
  title: "Components/PokeTeamCard",
  component: PokeTeamCard,
};

const Template = (args) => <PokeTeamCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "004",
  name: "Squirtle",
  imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
};

export const Blank = Template.bind({});

