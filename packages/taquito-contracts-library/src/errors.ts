import { ParameterValidationError } from '@mavrykdynamics/taquito-core';
import { ScriptedContracts } from '@mavrykdynamics/taquito-rpc';
/**
 *  @category Error
 *  @description Error that indicates invalid script format being useed or passed
 */
export class InvalidScriptFormatError extends ParameterValidationError {
  constructor(
    public readonly message: string,
    public readonly script: ScriptedContracts,
    public readonly address: string
  ) {
    super();
    this.name = 'InvalidScriptFormatError';
  }
}
