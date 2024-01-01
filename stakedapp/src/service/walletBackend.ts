import { Handler, HandlerContext,HandlerEvent } from "@netlify/functions";
import { ethers, JsonRpcProvider } from "ethers";

import abi from "../abi/stake.json";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const { method, amount } = JSON.parse(event.body as string);

  const stakeContractAddress = "0xbbdf8ab081eafb5ea25745ebc1271fa9f8817671";
  const apikey = process.env.API_KEY;
  const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
  const url = `https://eth-sepolia.g.alchemy.com/v2/${apikey}`;

  try {
    //Sepolia Chain = 11155111
    const provider = new JsonRpcProvider(url, 11155111);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    const signer = wallet.connect(provider);

    const stakeV1Contract = new ethers.Contract(
      stakeContractAddress,
      abi,
      signer
    );
    let txn;
    if (method === "stake") {
      txn = await stakeV1Contract.stake(amount);
      console.log("Staking ", amount, "amount of token");
    } else if (method === "unstake") {
      txn = await stakeV1Contract.unstake(amount);
      console.log("Unstaking ", amount, "amount of token");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Successful execution to ${method} amount of ${amount}`, txn: txn }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Failed execution to ${method} amount of ${amount}` }),
    };
  }
};

export { handler };