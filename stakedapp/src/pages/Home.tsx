import React from "react";
import CardGrid from "../components/Cards/CardGrid";
import { tokens } from "../components/Cards/tokens";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop:10, paddingBottom:80}}>
        Staking Dapp
      </h1>
      <CardGrid tokens={tokens} />
    </div>
  );
};

export default Home;
