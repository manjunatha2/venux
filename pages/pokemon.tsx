import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeComponent from "../components/HomeComponent";
import { PokemonType, PokemonList } from "../components/HomeComponent";

interface Props {
  results: Array<PokemonType>;
}

const Home: NextPage<Props> = ({ results }) => {
  console.log("🚀 ~ file: index.tsx ~ line 9 ~ props", results);
  const pokemonList = [
    { name: "Bulbosure", url: "a" },
    { name: "Bulbosure", url: "b" },
  ];

  return (
    <div>
      <HomeComponent pokemonList={pokemonList} />
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");

  const json = await res.json();
  console.log(
    "🚀 ~ file: index.tsx ~ line 40 ~ Home.getInitialProps= ~ json",
    json.results
  );

  return { results: json.results };
};

export default Home;
