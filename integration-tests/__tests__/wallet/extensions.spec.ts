import { CONFIGS } from '../../config';
import { ContractsLibrary } from '@mavrykdynamics/taquito-contracts-library';
import { entrypoints } from '../../data/contract-entrypoints';
import { tzip16, Tzip16Module } from '@mavrykdynamics/taquito-tzip16';
import { compose } from '@mavrykdynamics/taquito';
import { tzip12 } from '@mavrykdynamics/taquito-tzip12';

CONFIGS().forEach(({ lib, rpc, setup, knownBigMapContract, knownTzip1216Contract }) => {
    const Mavryk = lib;
    const erroneousScript = {
        code: [
            { prim: 'parameter', args: [{ prim: 'unit' }] },
            {
                prim: 'storage',
                args: [
                    {
                        prim: 'pair',
                        args: [
                            { prim: 'nat' },
                            {
                                prim: 'big_map',
                                args: [{ prim: 'string' }, { prim: 'bytes' }],
                                annots: ['%metadata']
                            }
                        ]
                    }
                ]
            },
            {
                prim: 'code',
                args: [
                    [{ prim: 'PUSH', args: [{ prim: 'nat' }, { int: '42' }] }, { prim: 'FAILWITH' }]
                ]
            }
        ],
        storage: { prim: 'Pair', args: [{ int: '7' }, { int: '60101' }] }
    }
    describe(`Test extensions MavrykToolkit through wallet api: ${rpc}`, () => {
        beforeEach(async () => {
            await setup();
        });

        it('Verify configuration of a ContractsLibrary and a Tzip16Module on the MavrykToolkit instance', async () => {
            const contractsLibrary = new ContractsLibrary();

            // We intentionally load a script that does not match the knownBigMapContract script
            contractsLibrary.addContract({
                [knownBigMapContract]: {
                    script: erroneousScript,
                    entrypoints
                }
            });
            // Add the contractsLibrary and Tzip16Module as extensions to our MavrykToolkit
            Mavryk.addExtension([contractsLibrary, new Tzip16Module()]);

            // We can access the functionalities of the Tzip12 and Tzip16 modules
            const contract = await Mavryk.wallet.at(knownTzip1216Contract, compose(tzip16, tzip12));
            const metadata = await contract.tzip16().getMetadata();
            expect(metadata.metadata.name).toEqual('Test Taquito FA2 token_metadata view');
            const tokenMetadata1 = await contract.tzip12().getTokenMetadata(1);
            expect(tokenMetadata1.name).toEqual('AliceToken');

            // assert the script is loaded from the contractsLibrary instead of the RPC
            const c = await Mavryk.wallet.at(knownBigMapContract);
            expect(c.script).toEqual(erroneousScript);

        });
    });
});
