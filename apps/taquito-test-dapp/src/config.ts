import { NetworkType } from "@mavrykdynamics/beacon-types";

export type SupportedNetworks = NetworkType.ATLASNET | NetworkType.BASENET | NetworkType.MAINNET | NetworkType.CUSTOM;

const rpcUrls: Record<SupportedNetworks, string> = {
  [NetworkType.MAINNET]: "https://rpc.mavryk.network/mainnet",
  [NetworkType.BASENET]: "https://ghrpc.mavryk.network/basenet",
  [NetworkType.ATLASNET]: "https://rpc.mavryk.network/atlasnet",
  [NetworkType.CUSTOM]: "https://rpc.mavryk.network/basenet",
};

export const getRpcUrl = (networkType: SupportedNetworks): string => {
  return rpcUrls[networkType];
}

export const getTzKtUrl = (networkType: SupportedNetworks): string | undefined => {
  switch (networkType) {
    case NetworkType.MAINNET:
      return "https://api.mavryk.network/mainnet";
    case NetworkType.BASENET:
      return "https://api.mavryk.network/basenet";
    case NetworkType.ATLASNET:
      return "https://api.mavryk.network/atlasnet";
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
