import React from "react";

import { PokeList } from "../../components/";

export default {
  title: "Components/PokeList",
  component: PokeList,
};

const pokemons = [
  {
    id: "001",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "002",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "003",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "004",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "005",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "006",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
  {
    id: "007",
    name: "Squirtle",
    imgageURL: "https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png",
  },
];

const Template = (args) => <PokeList {...args} />;

export const Default = Template.bind({});
Default.args = {
  pokemons,
};

export const Blank = Template.bind({});

