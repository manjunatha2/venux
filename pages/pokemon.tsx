import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import HomeComponent from "../components/HomeComponent";
import { PokemonType, PokemonList } from "../components/HomeComponent";

interface Props {
  //   results: Array<PokemonType>;
  pokemons: any;
}

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log("🚀 ~ file: index.tsx ~ line 9 ~ props", pokemons);
  const [results, setResults] = useState<PokemonType[]>([]);

  return (
    <div>
      {/* <HomeComponent pokemonList={pokemons} /> */}
      {pokemons.map((item: PokemonType) => {
        <div key={item.id}>
          <div>{item.title}</div>
        </div>;
      })}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");

  const json = await res.json();

  return { props: { pokemons: json } };
}

export default Home;
