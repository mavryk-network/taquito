import { TezosToolkit } from '@mavrykdynamics/taquito';
import { InMemorySigner } from '@mavrykdynamics/taquito-signer'
import { code, storage } from './data/test-dapp-contract';

// update the targeted rpc url before running
const rpcUrl = 'http://parisnet.i.ecadinfra.com:8732'

originate(rpcUrl)

async function originate(url: string) {
  const Tezos = new TezosToolkit(url)
  // if it's a new protocol might need to fund alice's address mv1Hox9jGJg3uSmsv9NTvuK7rMHh25cq44nv
  Tezos.setSignerProvider(new InMemorySigner('edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq'))


  let contract = await Tezos.contract.originate({
    code: code,
    init: storage
  })
  await contract.confirmation()
  console.log(`rpc ${url}`)
  console.log('contract address: ', contract.contractAddress)
  console.log('operation results: ', contract.operationResults)
}