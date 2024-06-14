import { CONFIGS } from "../config";
import { commonCases, pariscases } from '../data/allTestsCases';
import { LocalForger, ProtocolsHash } from '@mavrykdynamics/taquito-local-forging'
import { Protocols, MavrykToolkit } from "@mavrykdynamics/taquito";
import { ProtoGreaterOrEqual } from '@mavrykdynamics/taquito-michel-codec';

CONFIGS().forEach(({ rpc, protocol }) => {
  const Tezos = new MavrykToolkit(rpc);
  const parisAndAlpha = ProtoGreaterOrEqual(protocol, Protocols.PtParisBQ) ? test : test.skip

  describe(`Test local forger: ${rpc}`, () => {
    parisCases.forEach(({ name, operation, expected }) => {
      parisAndAlpha(`Verify that .forge for local forge will return same result as for network forge for rpc: ${name} (${rpc})`, async () => {
        const localForger = new LocalForger(protocol as unknown as ProtocolsHash);
        const result = await localForger.forge(operation);
        const rpcResult = await Tezos.rpc.forgeOperations(operation);
        expect(result).toEqual(rpcResult);
        expect(await localForger.parse(rpcResult)).toEqual(expected || operation);
      });
    });
    // all protocols
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
