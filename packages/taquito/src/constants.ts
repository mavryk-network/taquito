export const DEFAULT_GAS_LIMIT = {
  DELEGATION: 10600,
  ORIGINATION: 10600,
  TRANSFER: 10600,
  /* This is used for gas_limit. There is no harm in setting a higher limit.
   Only if an account has a balance that is very close to the total gas consumption,
   then this margin can fail the operation.
   Another benefit of this higher value is that then Dapps build with Taquito 17 can
   still work with Mumbainet, as this value is higher than the reveal cost in Mumbai.
  */
  REVEAL_TZ1: 1000,
  REVEAL_TZ2: 1000,
  REVEAL_TZ3: 2000,
  REVEAL_TZ4: 2000,
};
export const DEFAULT_FEE = {
  DELEGATION: 1257,
  ORIGINATION: 10000,
  TRANSFER: 10000,
  REVEAL: 374,
};
export const DEFAULT_STORAGE_LIMIT = {
  DELEGATION: 0,
  ORIGINATION: 257,
  TRANSFER: 257,
  REVEAL: 0,
};

export const COST_PER_BYTE = 250;

export enum Protocols {
  PtAtLas = 'PtAtLasjh71tv2N8SDMtjajR42wTSAd9xFTvXvhDuYfRJPRLSL2',
  ProtoALpha = 'ProtoALphaALphaALphaALphaALphaALphaALphaALphaDdp3zK',
}

export const protocols = {
  '019': [Protocols.PtAtLas],
  '020': [Protocols.ProtoALpha],
};

export enum ChainIds {
  MAINNET = 'NetXdQprcVkpaWU',
  ATLASNET = 'NetXvyTAafh8goH',
}

export const getRevealGasLimit = (address: string) =>
  Math.round((getRevealGasLimitInternal(address) * 11) / 10);

const getRevealGasLimitInternal = (address: string) => {
  switch (address.substring(0, 3)) {
    case 'mv1':
      return DEFAULT_GAS_LIMIT.REVEAL_TZ1;
    case 'mv2':
      return DEFAULT_GAS_LIMIT.REVEAL_TZ2;
    case 'mv3':
      return DEFAULT_GAS_LIMIT.REVEAL_TZ3;
    case 'mv4':
      return DEFAULT_GAS_LIMIT.REVEAL_TZ4;
    default:
      throw new Error(`Cannot estimate reveal gas limit for ${address}`);
  }
};
