import { Packer } from './interface';
import { packDataBytes, MichelsonData, MichelsonType } from '@mavrykdynamics/taquito-michel-codec'
import { PackDataResponse, PackDataParams } from '@mavrykdynamics/taquito-rpc';

export class MichelCodecPacker implements Packer {

  async packData(data: PackDataParams): Promise<PackDataResponse> {
    const { bytes } = packDataBytes(data.data as MichelsonData, data.type as MichelsonType);
    return { packed: bytes }
  }
}
