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

export const Full = Template.bind({});
Full.args = {
  pokemons,
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  pokemons: pokemons.slice(-2),
};
export const Blank = Template.bind({});
