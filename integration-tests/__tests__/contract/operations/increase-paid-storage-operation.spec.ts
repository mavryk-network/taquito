import { CONFIGS } from '../../../config';
import { OpKind } from '@mavrykdynamics/taquito';
import { ligoSample } from '../../../data/ligo-simple-contract';

CONFIGS().forEach(({ lib, rpc, setup }) => {

  const Mavryk = lib;
  let simpleContractAddress: string;
  describe(`Test Increase Paid Storage using: ${rpc}`, () => {
    beforeAll(async () => {
      await setup(true);

      try {
        const op = await Mavryk.contract.originate({
          balance: "1",
          code: `parameter string;
          storage string;
          code {CAR;
                PUSH string "Hello ";
                CONCAT;
                NIL operation; PAIR};
          `,
          init: `"test"`
        });

        await op.confirmation();

        simpleContractAddress = op.contractAddress!;
      } catch (e) {
        console.log(`Error when trying to originate the contract for the test: \n`, JSON.stringify(e));
      }
    });

    it(`should be able to increase the paid storage of a contract successfully: ${rpc}`, async () => {
      const paidSpaceBefore = await Mavryk.rpc.getStoragePaidSpace(simpleContractAddress);

      const op = await Mavryk.contract.increasePaidStorage({
        amount: 1,
        destination: simpleContractAddress
      });

      await op.confirmation();
      expect(op.hash).toBeDefined();
      expect(op.status).toEqual('applied');

      const paidSpaceAfter = await Mavryk.rpc.getStoragePaidSpace(simpleContractAddress);

      expect(parseInt(paidSpaceAfter)).toEqual(parseInt(paidSpaceBefore) + 1);
    });

    it(`should be able to include increasePaidStorage operation in a batch (different batch syntax): ${rpc}`, async () => {
      const paidSpaceBefore = await Mavryk.rpc.getStoragePaidSpace(simpleContractAddress);

      const op = await Mavryk.contract.batch([
        {
          kind: OpKind.ORIGINATION,
          balance: '1',
          code: ligoSample,
          storage: 0
        },
        {
          kind: OpKind.INCREASE_PAID_STORAGE,
          amount: 1,
          destination: simpleContractAddress
        }
      ])
      .send();

      await op.confirmation();
      expect(op.status).toEqual('applied');

      const paidSpaceAfter = await Mavryk.rpc.getStoragePaidSpace(simpleContractAddress);

      expect(parseInt(paidSpaceAfter)).toEqual(parseInt(paidSpaceBefore) + 1);
    });

    it('should return error when destination contract address is invalid', async () => {
      expect(async () => {
        const op = await Mavryk.contract.increasePaidStorage({
          amount: 1,
          destination: 'invalid_address'
        });
      }).rejects.toThrow();
    });
  });
});
