export enum ProtocolsHash {
  PtAtLas = 'PtAtLasomUEW99aVhVTrqjCHjJSpFUa8uHNEAEamx9v2SNeTaNp',
  PtBoreas = 'Ps8tUpcuzKw4cTeFT2wJXNCLa9pxkBUWZFDAvb9CXmnAuRE4bzF',
  ProtoALpha = 'ProtoALphaALphaALphaALphaALphaALphaALphaALphaDdp3zK',
}

const protoLevel: Record<ProtocolsHash, number> = {
  PtAtLasomUEW99aVhVTrqjCHjJSpFUa8uHNEAEamx9v2SNeTaNp: 19,
  Ps8tUpcuzKw4cTeFT2wJXNCLa9pxkBUWZFDAvb9CXmnAuRE4bzF: 20,
  ProtoALphaALphaALphaALphaALphaALphaALphaALphaDdp3zK: 21,
};

export function ProtoInferiorTo(a: ProtocolsHash, b: ProtocolsHash): boolean {
  return protoLevel[a] < protoLevel[b];
}
