import { PackDataParams, PackDataResponse } from '@mavrykdynamics/taquito-rpc';

export interface Packer {
    packData(data: PackDataParams): Promise<PackDataResponse>
}