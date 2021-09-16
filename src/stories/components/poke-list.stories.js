import React from "react";

import { PokeList } from "../../components/";

export default {
  title: "Components/PokeList",
  component: PokeList,
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

const Template = (args) => <PokeList {...args} />;

export const Default = Template.bind({});
Default.args = {
  pokemons,
};

export const Blank = Template.bind({});

