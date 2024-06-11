import { TezosToolkit } from "@mavrykdynamics/taquito";
import { tzip16, Tzip16Module } from '@mavrykdynamics/taquito-tzip16';

async function example() {
  try {

    const tezos = new TezosToolkit('https://basenet.rpc.mavryk.network');
    tezos.addExtension(new Tzip16Module());
    const contract = await tezos.contract.at("KT1JZVozQHLZN7TaACnX6NGBxUkhNjn6tmTB", tzip16)
    const metadata = await contract.tzip16().getMetadata();
    console.log(JSON.stringify(metadata, null, 2));

  } catch (ex) {
    console.error(ex);
  }
}

example();