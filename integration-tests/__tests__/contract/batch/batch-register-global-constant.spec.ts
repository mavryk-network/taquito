import { CONFIGS } from '../../../config';
import { OpKind } from '@mavrykdynamics/taquito';

CONFIGS().forEach(({ lib, rpc, setup }) => {
  const Mavryk = lib;
  describe(`Test contract.batch to register global constant using: ${rpc}`, () => {
    const randomAnnots = () => crypto.randomBytes(3).toString('hex');
    beforeEach(async () => {
      await setup(true);
    });

    test('Verify the contract.batch transfer and register global constant operations', async () => {
      const isAccountRevealed = await Mavryk.rpc.getManagerKey(await Mavryk.signer.publicKeyHash());

      const batchOp = await Mavryk.contract
        .batch([
          { kind: OpKind.TRANSACTION, to: 'mv1N3KY1vXdYX2x568MGmNBRLEK7k7uc2zEM', amount: 0.02 },
          {
            kind: OpKind.REGISTER_GLOBAL_CONSTANT,
            value: {
              prim: 'list',
              args: [{ prim: 'nat' }],
              annots: [`%${randomAnnots()}`]
            }
          }
        ])
        .with([
          { kind: OpKind.TRANSACTION, to: 'mv1N3KY1vXdYX2x568MGmNBRLEK7k7uc2zEM', amount: 0.02 },
          {
            kind: OpKind.REGISTER_GLOBAL_CONSTANT,
            value: {
              prim: 'int',
              args: [{ int: '123456' }],
              annots: [`%${randomAnnots()}`]
            }
          }
        ])
        .withRegisterGlobalConstant({
          value: {
            prim: 'pair',
            args: [
              {
                prim: 'pair',
                args: [{ prim: 'address', annots: ['%0'] }, { prim: 'address', annots: ['%1'] }]
              },
              { prim: 'contract', args: [{ prim: 'nat' }], annots: ['%2'] }
            ],
            annots: [`%${randomAnnots()}`]
          }
        })
        .send();

      await batchOp.confirmation();

      expect(batchOp.status).toEqual('applied');

      if (!isAccountRevealed) {
        expect(batchOp.results.length).toEqual(6);
        expect(batchOp.results[0].kind).toEqual(OpKind.REVEAL);
        expect(batchOp.results[1].kind).toEqual(OpKind.TRANSACTION);
        expect(batchOp.results[2].kind).toEqual(OpKind.REGISTER_GLOBAL_CONSTANT);
        expect(batchOp.results[3].kind).toEqual(OpKind.TRANSACTION);
        expect(batchOp.results[4].kind).toEqual(OpKind.REGISTER_GLOBAL_CONSTANT);
        expect(batchOp.results[5].kind).toEqual(OpKind.REGISTER_GLOBAL_CONSTANT);
      } else {
        expect(batchOp.results[0].kind).toEqual(OpKind.TRANSACTION);
        expect(batchOp.results[1].kind).toEqual(OpKind.REGISTER_GLOBAL_CONSTANT);
        expect(batchOp.results[2].kind).toEqual(OpKind.TRANSACTION);
        expect(batchOp.results[3].kind).toEqual(OpKind.REGISTER_GLOBAL_CONSTANT);
        expect(batchOp.results[4].kind).toEqual(OpKind.REGISTER_GLOBAL_CONSTANT);
      }

    });
  });
});
