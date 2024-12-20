import { InMemorySigner } from '@mavrykdynamics/taquito-signer';
import { MavrykToolkit } from '@mavrykdynamics/taquito';

async function example() {
  const provider = 'https://basenet.rpc.mavryk.network';
    const signer = new InMemorySigner('edskRtmEwZxRzwd1obV9pJzAoLoxXFWTSHbgqpDBRHx1Ktzo5yVuJ37e2R4nzjLnNbxFU4UiBU1iHzAy52pK5YBRpaFwLbByca');
    const mavryk = new MavrykToolkit(provider);
    mavryk.setSignerProvider(signer);


  try {
    console.log('Deploying SmartContract for tests...');
    const op = await mavryk.contract.originate({
     // balance: '0',
      code: `{ parameter (or (int %decrement) (int %increment)) ;
        storage int ;
        code { DUP ;
               CDR ;
               DIP { DUP } ;
               SWAP ;
               CAR ;
               IF_LEFT
                 { DIP { DUP } ;
                   SWAP ;
                   DIP { DUP } ;
                   PAIR ;
                   DUP ;
                   CAR ;
                   DIP { DUP ; CDR } ;
                   SUB ;
                   DIP { DROP 2 } }
                 { DIP { DUP } ;
                   SWAP ;
                   DIP { DUP } ;
                   PAIR ;
                   DUP ;
                   CAR ;
                   DIP { DUP ; CDR } ;
                   ADD ;
                   DIP { DROP 2 } } ;
               NIL operation ;
               PAIR ;
               DIP { DROP 2 } } }
            `,
      init: `0`,
    });

    console.log('Awaiting confirmation...');
    const contract = await op.contract();
    console.log("SmartContract address is : "+contract.address);
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
