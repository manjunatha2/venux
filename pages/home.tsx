import type { NextPage } from "next";
import { GetServerSideProps } from "next";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import HomeComponent from "../components/HomeComponent";
import MyApp from "./_app";
import { PokemonType, PokemonList } from "../components/HomeComponent";

interface Props {
  pokemons: Array<PokemonType>;
  //   pokemons: any;
}

const Home: NextPage<Props> = ({ pokemons }) => {
  //   console.log("🚀 ~ file: index.tsx ~ line 9 ~ props", pokemons);
  const [results, setResults] = useState<PokemonType[]>([]);

  useEffect(() => {
    if (pokemons) {
      setResults(pokemons);
    }
  }, []);

  if (!results.length) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {results?.map((item: PokemonType) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");

  const pokemons = await res.json();

  return { props: { pokemons } };
};

export default Home;
