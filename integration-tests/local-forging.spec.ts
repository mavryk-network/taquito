import { CONFIGS } from "./config";
import { commonCases, atlasCases } from './data/allTestsCases';
import { LocalForger, ProtocolsHash } from '@mavrykdynamics/taquito-local-forging'
import { Protocols, TezosToolkit } from "@mavrykdynamics/taquito";
import { ProtoGreaterOrEqual } from '@mavrykdynamics/taquito-michel-codec';

CONFIGS().forEach(({ rpc, protocol }) => {
  const Tezos = new TezosToolkit(rpc);
  const atlasAndAlpha = ProtoGreaterOrEqual(protocol, Protocols.PtAtLas) ? test : test.skip

  describe(`Test local forger: ${rpc}`, () => {
    // all protocols
    atlasCases.forEach(({ name, operation, expected }) => {
      atlasAndAlpha(`Verify that .forge for local forge will return same result as for network forge for rpc: ${name} (${rpc})`, async () => {
        const localForger = new LocalForger(protocol as unknown as ProtocolsHash);
        const result = await localForger.forge(operation);
        const rpcResult = await Tezos.rpc.forgeOperations(operation);
        expect(result).toEqual(rpcResult);
        expect(await localForger.parse(result)).toEqual(expected || operation);

      });
    });

    commonCases.forEach(({ name, operation, expected }) => {
      it(`Verify that .forge for local forge will return same result as for network forge for rpc: ${name} (${rpc})`, async () => {
        const localForger = new LocalForger(protocol as unknown as ProtocolsHash);
        const result = await localForger.forge(operation);
        const rpcResult = await Tezos.rpc.forgeOperations(operation);
        expect(result).toEqual(rpcResult);
        expect(await localForger.parse(result)).toEqual(expected || operation);

      });
    });
  });
});
