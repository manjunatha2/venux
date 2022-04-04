import React from "react";

interface PokemonType {
  name: string;
  id: string;
}

interface HomeProps {
  pokemonList: Array<PokemonType>;
}

const HomeComponent = (props: HomeProps) => {
  const { pokemonList } = props;

  return (
    <div>
      {pokemonList?.map((item: PokemonType) => {
        <div key={item.id}>
          <div>{item.name}</div>
        </div>;
      })}
    </div>
  );
};

export default HomeComponent;
