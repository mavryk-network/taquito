import { Expr } from '@mavrykdynamics/taquito-michel-codec';
import { UnconfiguredGlobalConstantsProviderError } from './errors';
import { GlobalConstantHash, GlobalConstantsProvider } from './interface-global-constants-provider';

export class NoopGlobalConstantsProvider implements GlobalConstantsProvider {
  async getGlobalConstantByHash(_hash: GlobalConstantHash): Promise<Expr> {
    throw new UnconfiguredGlobalConstantsProviderError();
  }
}
