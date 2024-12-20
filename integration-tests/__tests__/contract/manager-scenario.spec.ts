import { CONFIGS } from '../../config';
import { managerCode } from '../../data/manager_code';
import { DefaultContractType, MANAGER_LAMBDA, OriginationOperation } from '@mavrykdynamics/taquito';

CONFIGS().forEach(({ lib, rpc, setup, knownBaker, knownContract }) => {
  const Mavryk = lib;

  let op: OriginationOperation;
  let contract: DefaultContractType;
  describe(`Test TZ Manager through contract api: ${rpc}`, () => {
    beforeAll(async () => {
      await setup();

      op = await Mavryk.contract.originate({
        balance: "1",
        code: managerCode,
        init: { "string": await Mavryk.signer.publicKeyHash() },
      });

      await op.confirmation();
      contract = await op.contract();
    });

    it('should be able to transfer from implicit to originated contracts', async () => {
      // Transfer from implicit account (mv1) to contract (kt1_alice)
      // A regular transfer operation is made. No smart contract calls required for this scenario.
      const op = await Mavryk.contract.transfer({ to: contract.address, amount: 1 });
      await op.confirmation();
      expect(op.status).toEqual('applied');
    });

    it('should be able to transfer from contract to implicit accounts', async () => {
      // Transfer from contract (kt1_alice) to implicit account (mv1)
      // We pass a lambda function to the kt1_alice contracts `do` entrypoint. The lambda code causes the contract to transfer
      // the specified number (50) of mumav to the target address.
      const op = await contract.methods.do(MANAGER_LAMBDA.transferImplicit('mv1UE4jMeeBM49FjNmyvtE19aBKT73HDvM2m', 5)).send({ amount: 0 });
      await op.confirmation();
      expect(op.status).toEqual('applied');
    });

    it('should be able to set delegate from contract', async () => {
      // Set delegate on contract kt1_alice by passing a lambda function to kt1_alice's `do` entrypoint
      const op = await contract.methods.do(MANAGER_LAMBDA.setDelegate(knownBaker)).send({ amount: 0 });
      await op.confirmation();
      expect(op.status).toEqual('applied');
    });

    it('should be able to remove delegate from contract', async () => {
      // Remove delegate on contract kt1_alice by passing a lambda function to kt1_alice's `do` entrypoint
      const op = await contract.methods.do(MANAGER_LAMBDA.removeDelegate()).send({ amount: 0 });
      await op.confirmation();
      expect(op.status).toEqual('applied');
    });

    it('should be able to transfer from contract to contract', async () => {
      // Transfer from contract (kt1_alice) to contract (kt1 bob)
      // Notice that we are instructing the kt1_alice contract to send 1 token to kt1_bob. The transfer value is passed to the
      // lambda helper function. The transfer amount in the actual transfer operation is 0. We are not transferring the token
      // in the transfer operation, we are instructing the contract to transfer the token using the `do` entrypoint of the kt1_alice
      // contract.
      const op = await contract.methods.do(MANAGER_LAMBDA.transferToContract(knownContract, 1)).send({ amount: 0 });
      await op.confirmation();
      expect(op.status).toEqual('applied');
    });

    it('should throw an error when trying to transfer amount higher than balance', async () => {
      try {
        const op = await contract.methods.do(MANAGER_LAMBDA.transferImplicit('mv1UE4jMeeBM49FjNmyvtE19aBKT73HDvM2m', 50 * 1000000)).send({ amount: 0 });
        await op.confirmation();
      } catch (ex: any) {
        expect(ex.message).toContain('mav.subtraction_underflow')
      }
    });
  });
});
