import { CONFIGS } from "../../config";

CONFIGS().forEach(({ lib, rpc, setup, knownBaker }) => {
  const Mavryk = lib;
  describe(`Test account delegation with estimation through wallet api using: ${rpc}`, () => {

    beforeEach(async () => {
      await setup(true)
    })
    it('Verify that an address can be delegated to a known baker with an automatic estimate', async () => {
      const delegate = knownBaker
      const pkh = await Mavryk.signer.publicKeyHash();
      try {
        const op = await Mavryk.wallet.setDelegate({
          delegate,
        }).send()
        await op.confirmation()
        expect(op.opHash).toBeDefined();

        const account = await Mavryk.rpc.getDelegate(pkh)
        expect(account).toEqual(delegate)
      } catch (ex: any) {
        if (await Mavryk.rpc.getDelegate(pkh) === pkh) {
          // Forbidden delegate deletion
          expect(ex.message).toMatch('delegate.no_deletion')
        } else {
          // When running tests more than one time with the same key, the account is already delegated to the given delegate
          expect(ex.message).toMatch('delegate.unchanged')
        }
      }
    });
  });
})
