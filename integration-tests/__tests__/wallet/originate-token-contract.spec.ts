import { CONFIGS } from "../../config";
import { tokenCode, tokenInit } from "../../data/tokens";

CONFIGS().forEach(({ lib, rpc, setup }) => {
  const Mavryk = lib;

  describe(`Test contract origination of a token contract through wallet api using: ${rpc}`, () => {

    beforeEach(async () => {
      await setup()
    })
    test('Verify wallet.originate for a token contract and mints some tokens', async () => {
      // TODO: Fails when using ephemeral keys
      const op = await Mavryk.wallet.originate({
        balance: "1",
        code: tokenCode,
        init: tokenInit(await Mavryk.signer.publicKeyHash()),
      }).send()
      await op.confirmation()
      expect(op.opHash).toBeDefined();

      const contract = await op.contract();
      const opMethod = await contract.methods.mint(await Mavryk.signer.publicKeyHash(), 100).send();

      await opMethod.confirmation();
      expect(op.opHash).toBeDefined();
    });
  });
})
