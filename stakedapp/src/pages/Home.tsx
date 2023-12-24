import React, { useContext, useEffect, useState } from "react";
import CardGrid from "../components/Cards/CardGrid";
import { tokens } from "../components/Cards/tokens";
import { AlertContext } from "../context/AlertContext";
import AlertPopup from '../components/AlertPopup';

const Home = () => {
  const { show, setShow, msg } = useContext(AlertContext);
  
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop:10, paddingBottom:80}}>
        Staking Dapp
      </h1>
      <AlertPopup show={show} setShow={setShow} msg={msg} variant="success" />
      <CardGrid tokens={tokens} />
    </div>
  );
};

export default Home;
