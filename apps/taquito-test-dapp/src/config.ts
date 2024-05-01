import { NetworkType } from "@mavrykdynamics/beacon-types";

export type SupportedNetworks = NetworkType.ATLASNET | NetworkType.BASENET | NetworkType.MAINNET | NetworkType.CUSTOM;

const rpcUrls: Record<SupportedNetworks, string> = {
  [NetworkType.MAINNET]: "https://mainnet.rpc.mavryk.network",
  [NetworkType.BASENET]: "https://basenet.rpc.mavryk.network",
  [NetworkType.ATLASNET]: "https://atlasnet.rpc.mavryk.network",
  [NetworkType.CUSTOM]: "https://atlasnet.rpc.mavryk.network",
};

export const getRpcUrl = (networkType: SupportedNetworks): string => {
  return rpcUrls[networkType];
}

export const getTzKtUrl = (networkType: SupportedNetworks): string | undefined => {
  switch (networkType) {
    case NetworkType.MAINNET:
      return "https://mainnet.api.mavryk.network";
    case NetworkType.BASENET:
      return "https://basenet.api.mavryk.network";
    case NetworkType.ATLASNET:
      return "https://atlasnet.api.mavryk.network";
    case NetworkType.CUSTOM:
      return undefined;
  }
}

export const defaultMatrixNode = "beacon-node-1.sky.papers.tech";

export const defaultNetworkType = NetworkType.BASENET;

// new protocol updated rpc url in example/data/test-dapp-contract.ts and npm -w example run example:deploy-dapp
export const contractAddress = {
  mainnet: "KT1ShtH2zCrKMuWGRejEd6RAcnePwxBQeMAN",
  basenet: "KT1QKmcNBcfzVTXG2kBcE6XqXtEuYYUzMcT5",
  atlasnet: "KT1GYx1KDhMQt2GJEztRh8EyYxJUPM6fnAMM",
};
