import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeComponent from "../components/HomeComponent";

const Home: NextPage = () => {
  const pokemonList = [
    { name: "Bulbosure", id: "a" },
    { name: "Bulbosure", id: "b" },
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeComponent pokemonList={pokemonList} />
      </main>
    </div>
  );
};

export default Home;
