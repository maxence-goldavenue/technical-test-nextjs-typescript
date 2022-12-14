import Head from "next/head";
import { Layout } from "../components/Layout";

import { Pokemon } from "../interfaces/pokemon";

const calculatePower = (pokemon: Pokemon) =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;

const HomePage = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <>
      <Head>
        <title>Technical test next.js and typescript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Pokemon list</h1>

      <div>
        <div>Search</div>
        <input type="text"></input>
        <div>Power threshold</div>
        <input type="text"></input>
        <div>Count over threshold: </div>
        <div>Min: </div>
        <div>Max: </div>
      </div>
    </>
  );
};

HomePage.getLayout = Layout;

export async function getServerSideProps() {
  try {
    const pokemons = await fetch("http://localhost:3000/api/pokemons").then(
      (resp) => resp.json()
    );
    return { props: { pokemons } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default HomePage;
