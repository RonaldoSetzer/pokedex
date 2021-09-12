import React from "react";

import { PokeTeam } from "../../components/";

export default {
  title: "Components/PokeTeam",
  component: PokeTeam,
};

const pokemons = [
  {
    id: "004",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "004",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "004",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "004",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "004",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "004",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "004",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
];

const Template = (args) => <PokeTeam {...args} />;

export const Default = Template.bind({});
Default.args = {
  pokemons,
};

export const Blank = Template.bind({});
