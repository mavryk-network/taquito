import { PreparedOperation } from '../../src/prepare';

export const preparedOriginationOpWithReveal = {
  opOb: {
    branch: 'test_block_hash',
    contents: [
      {
        kind: 'reveal',
        fee: '374',
        public_key: 'test_pub_key',
        source: 'mv1VHiNCXPvaU7W7UN8K6QNhbRsLJHZj9Y9q',
        gas_limit: '1100',
        storage_limit: '0',
        counter: '1',
      },
      {
        kind: 'origination',
        fee: '0',
        gas_limit: '1040000',
        storage_limit: '60000',
        balance: '1000000',
        script: {
          code: [
            {
              prim: 'parameter',
              args: [
                {
                  prim: 'string',
                },
              ],
            },
            {
              prim: 'storage',
              args: [
                {
                  prim: 'string',
                },
              ],
            },
            {
              prim: 'code',
              args: [
                [
                  {
                    prim: 'CAR',
                  },
                  {
                    prim: 'PUSH',
                    args: [
                      {
                        prim: 'string',
                      },
                      {
                        string: 'Hello ',
                      },
                    ],
                  },
                  {
                    prim: 'CONCAT',
                  },
                  {
                    prim: 'NIL',
                    args: [
                      {
                        prim: 'operation',
                      },
                    ],
                  },
                  {
                    prim: 'PAIR',
                  },
                ],
              ],
            },
          ],
          storage: {
            string: 'test',
          },
        },
        source: 'mv1VHiNCXPvaU7W7UN8K6QNhbRsLJHZj9Y9q',
        counter: '2',
      },
    ],
    protocol: 'test_protocol',
  },
  counter: 0,
} as PreparedOperation;

export const preparedOriginationOpNoReveal = {
  opOb: {
    branch: 'test_block_hash',
    contents: [
      {
        kind: 'origination',
        fee: '0',
        gas_limit: '1040000',
        storage_limit: '60000',
        balance: '1000000',
        script: {
          code: [
            {
              prim: 'parameter',
              args: [
                {
                  prim: 'string',
                },
              ],
            },
            {
              prim: 'storage',
              args: [
                {
                  prim: 'string',
                },
              ],
            },
            {
              prim: 'code',
              args: [
                [
                  {
                    prim: 'CAR',
                  },
                  {
                    prim: 'PUSH',
                    args: [
                      {
                        prim: 'string',
                      },
                      {
                        string: 'Hello ',
                      },
                    ],
                  },
                  {
                    prim: 'CONCAT',
                  },
                  {
                    prim: 'NIL',
                    args: [
                      {
                        prim: 'operation',
                      },
                    ],
                  },
                  {
                    prim: 'PAIR',
                  },
                ],
              ],
            },
          ],
          storage: {
            string: 'test',
          },
        },
        source: 'mv1VHiNCXPvaU7W7UN8K6QNhbRsLJHZj9Y9q',
        counter: '1',
      },
    ],
    protocol: 'test_protocol',
  },
  counter: 0,
} as PreparedOperation;
