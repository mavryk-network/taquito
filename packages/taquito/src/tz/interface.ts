import BigNumber from 'bignumber.js';
import { Operation } from '../operations/operations';

export interface TzProvider {
  /**
   *
   * @param address Tezos address you want to get the balance for (eg mv1...)
   */
  getBalance(address: string): Promise<BigNumber>;

  /**
   *
   * @param address Tezos address you want to get the delegate for (eg mv1...)
   */
  getDelegate(address: string): Promise<string | null>;

  activate(pkh: string, secret: string): Promise<Operation>;
}
