import { useContext } from "react";

import AlertPopup from '../components/AlertPopup.tsx';
import CardGrid from "../components/Cards/CardGrid.tsx";
import { tokens } from "../components/Cards/tokens.ts";
import LoadingSpinner from "../components/LoadingSpinner.tsx";
import { AlertContext } from "../context/AlertContext.tsx";

const Home = () => {
  const { show, setShow, msg, variant } = useContext(AlertContext);
  
  return (
    <div>
      <h1 id="main-content" style={{ textAlign: "center", paddingTop:10, paddingBottom:80}}>
        Staking Dapp
      </h1>
      <AlertPopup show={show} setShow={setShow} msg={msg} variant={variant} />
      <LoadingSpinner />
      <CardGrid tokens={tokens} />
    </div>
  );
};

export default Home;
