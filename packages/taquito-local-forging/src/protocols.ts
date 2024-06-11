export enum ProtocolsHash {
  PtAtLas = 'PtAtLasomUEW99aVhVTrqjCHjJSpFUa8uHNEAEamx9v2SNeTaNp',
  ProtoALpha = 'ProtoALphaALphaALphaALphaALphaALphaALphaALphaDdp3zK',
}

const protoLevel: Record<ProtocolsHash, number> = {
  PtAtLasomUEW99aVhVTrqjCHjJSpFUa8uHNEAEamx9v2SNeTaNp: 19,
  ProtoALphaALphaALphaALphaALphaALphaALphaALphaDdp3zK: 20,
};

export function ProtoInferiorTo(a: ProtocolsHash, b: ProtocolsHash): boolean {
  return protoLevel[a] < protoLevel[b];
}
