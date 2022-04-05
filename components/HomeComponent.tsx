import React from "react";

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonList {
  pokemonList: Array<PokemonType>;
}

const HomeComponent = (props: PokemonList) => {
  const { pokemonList = [] } = props;

  return (
    <div>
      {pokemonList?.map((item: PokemonType) => (
        <div key={item.url}>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default HomeComponent;
