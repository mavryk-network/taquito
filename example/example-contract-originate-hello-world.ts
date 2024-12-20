import { MavrykToolkit } from '@mavrykdynamics/taquito';
import { InMemorySigner } from '@mavrykdynamics/taquito-signer';

const provider = 'https://basenet.rpc.mavryk.network';

async function example() {
  const mavryk = new MavrykToolkit(provider);
  const signer = new InMemorySigner('edskRtmEwZxRzwd1obV9pJzAoLoxXFWTSHbgqpDBRHx1Ktzo5yVuJ37e2R4nzjLnNbxFU4UiBU1iHzAy52pK5YBRpaFwLbByca');
  mavryk.setSignerProvider(signer);

  try {
    console.log('Deploying Hello world contract...');
    const op = await mavryk.contract.originate({
      balance: '0',
      code: `parameter string;
            storage string;
            code {CAR;
                  PUSH string "Hello ";
                  CONCAT;
                  NIL operation; PAIR};
            `,
      init: `"test1234"`,
    });

    console.log('Awaiting confirmation...');
    const contract = await op.contract();
    console.log('Hello world Contract address',contract.address)
    console.log('Gas Used', op.consumedGas);
    console.log('Storage Paid', op.storageDiff);
    console.log('Storage Size', op.storageSize);
    console.log('Storage', await contract.storage());
    console.log('Operation hash:', op.hash, 'Included in block level:', op.includedInBlock);
  } catch (ex) {
    console.error(ex);
  }
}

example();
