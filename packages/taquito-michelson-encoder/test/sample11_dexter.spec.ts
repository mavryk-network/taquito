import { Schema } from '../src/schema/storage';
import { storage as storageDexter, params, rpcContractResponse } from '../data/sample11_dexter';
import {
  storage as storageToken,
  params as paramsToken,
  rpcContractResponse as rpcToken,
} from '../data/sample11_token';
import BigNumber from 'bignumber.js';
import { ParameterSchema } from '../src/schema/parameter';
import { MichelsonMap } from '../src/michelson-map';
import { expectMichelsonMap } from './utils';
describe('Exchange contract test', () => {
  it('Test storage schema', () => {
    const schema = new Schema(storageDexter);
    expect(schema.ExtractSchema()).toEqual({
      '0': {
        big_map: {
          key: "address",
          value: "nat"
        }
      },
      '1': 'contract',
      '2': 'contract',
      '3': 'nat',
      '4': {
        map: {
          key: 'address',
          value: {
            '0': {
              '0': 'nat',
              '1': 'nat',
              '2': 'timestamp',
            },
            '1': {
              '1': 'nat',
              '2': 'mumav',
              '3': 'nat',
              '4': 'timestamp',
            },
            '2': {
              '2': 'nat',
              '3': 'timestamp',
            },
            '3': {
              '3': 'nat',
              '4': 'mumav',
              '5': 'timestamp',
            },
          },
        },
      },
    });

    expect(schema.generateSchema()).toEqual({
      __michelsonType: 'pair',
      schema: {
        '0': {
          __michelsonType: "big_map",
          schema: {
            key: {
              __michelsonType: "address",
              schema: "address"
            },
            value: {
              __michelsonType: "nat",
              schema: "nat"
            }
          }
        },
        '1': {
          __michelsonType: 'contract',
          schema: {
            parameter: {
              __michelsonType: 'or',
              schema: {
                0: {
                  __michelsonType: 'pair',
                  schema: {
                    0: {
                      __michelsonType: 'address',
                      schema: 'address'
                    },
                    1: {
                      __michelsonType: 'contract',
                      schema: {
                        parameter: {
                          __michelsonType: 'or',
                          schema: {
                            0: {
                              __michelsonType: 'pair',
                              schema: {
                                0: {
                                  __michelsonType: 'address',
                                  schema: 'address'
                                },
                                1: {
                                  __michelsonType: 'address',
                                  schema: 'address'
                                },
                                2: {
                                  __michelsonType: 'nat',
                                  schema: 'nat'
                                },
                              }
                            },
                            1: {
                              __michelsonType: 'address',
                              schema: 'address'
                            }
                          }
                        }
                      }
                    }
                  }
                },
                1: {
                  __michelsonType: 'nat',
                  schema: 'nat'
                }
              }
            }
          }
        },
        '2': {
          __michelsonType: 'contract',
          schema: {
            parameter: {
              __michelsonType: "or",
              schema: {
                0: {
                  __michelsonType: "pair",
                  schema: {
                    0: {
                      __michelsonType: 'address',
                      schema: 'address'
                    },
                    1: {
                      __michelsonType: 'address',
                      schema: 'address'
                    },
                    2: {
                      __michelsonType: 'nat',
                      schema: 'nat'
                    },
                  }
                },
                1: {
                  __michelsonType: 'address',
                  schema: 'address'
                }
              }
            }
          }
        },
        '3': {
          __michelsonType: 'nat',
          schema: 'nat'
        },
        '4': {
          __michelsonType: "map",
          schema: {
            key: {
              __michelsonType: 'address',
              schema: 'address'
            },
            value: {
              __michelsonType: "or",
              schema: {
                '0': {
                  __michelsonType: "pair",
                  schema: {
                    '0': {
                      __michelsonType: 'nat',
                      schema: 'nat'
                    },
                    '1': {
                      __michelsonType: 'nat',
                      schema: 'nat'
                    },
                    '2': {
                      __michelsonType: 'timestamp',
                      schema: 'timestamp'
                    },
                  }
                },
                '1': {
                  __michelsonType: 'pair',
                  schema: {
                    '1': {
                      __michelsonType: 'nat',
                      schema: 'nat'
                    },
                    '2': {
                      __michelsonType: 'mumav',
                      schema: 'mumav'
                    },
                    '3': {
                      __michelsonType: 'nat',
                      schema: 'nat'
                    },
                    '4': {
                      __michelsonType: 'timestamp',
                      schema: 'timestamp'
                    },
                  }
                },
                '2': {
                  __michelsonType: 'pair',
                  schema: {
                    '2': {
                      __michelsonType: 'nat',
                      schema: 'nat'
                    },
                    '3': {
                      __michelsonType: 'timestamp',
                      schema: 'timestamp'
                    },
                  }
                },
                '3': {
                  __michelsonType: 'pair',
                  schema: {
                    '3': {
                      __michelsonType: 'nat',
                      schema: 'nat'
                    },
                    '4': {
                      __michelsonType: 'mumav',
                      schema: 'mumav'
                    },
                    '5': {
                      __michelsonType: 'timestamp',
                      schema: 'timestamp'
                    },
                  }
                },
              }
            },
          },
        },
      }
    });
  });

  it('Test storage parsing', () => {
    const schema = new Schema(storageDexter);
    expect(schema.Execute(rpcContractResponse.script.storage)).toEqual({
      '0': expectMichelsonMap(),
      '1': 'KT1XAMU1kn8EJLM2uqrP71Jevvkyo7yyfNTK',
      '2': 'KT1DmCHxit2bQ2GiHVc24McY6meuJPMTrqD8',
      '3': new BigNumber('100000000'),
      '4': expectMichelsonMap(),
    });
  });

  it('Test storage encoding', () => {
    const schema = new Schema(storageDexter);
    expect(
      schema.Encode({
        '0': new MichelsonMap(),
        '1': 'KT1XAMU1kn8EJLM2uqrP71Jevvkyo7yyfNTK',
        '2': 'KT1DmCHxit2bQ2GiHVc24McY6meuJPMTrqD8',
        '3': new BigNumber('100000000'),
        '4': new MichelsonMap(),
      })
    ).toEqual({
      prim: 'Pair',
      args: [[], rpcContractResponse.script.storage.args[1]],
    });
  });

  it('Test parameter schema', () => {
    const schema = new ParameterSchema(params);
    expect(schema.ExtractSchema()).toEqual({
      '0': {
        '0': 'nat',
        '1': 'nat',
        '2': 'timestamp',
      },
      '1': {
        '1': 'nat',
        '2': 'mumav',
        '3': 'nat',
        '4': 'timestamp',
      },
      '2': {
        '2': 'nat',
        '3': 'timestamp',
      },
      '3': {
        '3': 'nat',
        '4': 'mumav',
        '5': 'timestamp',
      },
      '4': 'nat',
    });

    expect(schema.generateSchema()).toEqual({
      __michelsonType: "or",
      schema: {
        '0': {
          __michelsonType: "pair",
          schema: {
            '0': {
              __michelsonType: 'nat',
              schema: 'nat'
            },
            '1': {
              __michelsonType: 'nat',
              schema: 'nat'
            },
            '2': {
              __michelsonType: 'timestamp',
              schema: 'timestamp'
            },
          }
        },
        '1': {
          __michelsonType: "pair",
          schema: {
            '1': {
              __michelsonType: 'nat',
              schema: 'nat'
            },
            '2': {
              __michelsonType: 'mumav',
              schema: 'mumav'
            },
            '3': {
              __michelsonType: 'nat',
              schema: 'nat'
            },
            '4': {
              __michelsonType: 'timestamp',
              schema: 'timestamp'
            },
          }
        },
        '2': {
          __michelsonType: "pair",
          schema: {
            '2': {
              __michelsonType: 'nat',
              schema: 'nat'
            },
            '3': {
              __michelsonType: 'timestamp',
              schema: 'timestamp'
            },
          }
        },
        '3': {
          __michelsonType: "pair",
          schema: {
            '3': {
              __michelsonType: 'nat',
              schema: 'nat'
            },
            '4': {
              __michelsonType: 'mumav',
              schema: 'mumav'
            },
            '5': {
              __michelsonType: 'timestamp',
              schema: 'timestamp'
            },
          }
        },
        '4': {
          __michelsonType: 'nat',
          schema: 'nat'
        },
      }
    });
  });

  it('Encode parameter properly func 0', () => {
    const schema = new ParameterSchema(params);
    expect(schema.Encode('0', 1, 2, 'timestamp')).toEqual({
      args: [
        {
          args: [
            {
              args: [{ int: '1' }, { args: [{ int: '2' }, { string: 'timestamp' }], prim: 'Pair' }],
              prim: 'Pair',
            },
          ],
          prim: 'Left',
        },
      ],
      prim: 'Left',
    });
  });

  it('Encode parameter properly func 1', () => {
    const schema = new ParameterSchema(params);
    expect(schema.Encode('1', 1, 2, 3, 'timestamp')).toEqual({
      args: [
        {
          args: [
            {
              args: [
                {
                  args: [
                    {
                      int: '1',
                    },
                    {
                      int: '2',
                    },
                  ],
                  prim: 'Pair',
                },
                {
                  args: [
                    {
                      int: '3',
                    },
                    {
                      string: 'timestamp',
                    },
                  ],
                  prim: 'Pair',
                },
              ],
              prim: 'Pair',
            },
          ],
          prim: 'Right',
        },
      ],
      prim: 'Left',
    });
  });

  it('Encode parameter properly func 2', () => {
    const schema = new ParameterSchema(params);
    expect(schema.Encode('2', 3, 'timestamp')).toEqual({
      args: [
        {
          args: [
            {
              args: [
                {
                  int: '3',
                },
                {
                  string: 'timestamp',
                },
              ],
              prim: 'Pair',
            },
          ],
          prim: 'Left',
        },
      ],
      prim: 'Right',
    });
  });

  it('Encode parameter properly func 3', () => {
    const schema = new ParameterSchema(params);
    expect(schema.Encode('3', 1, 3, 'timestamp')).toEqual({
      args: [
        {
          args: [
            {
              args: [
                {
                  args: [
                    {
                      int: '1',
                    },
                    {
                      args: [
                        {
                          int: '3',
                        },
                        {
                          string: 'timestamp',
                        },
                      ],
                      prim: 'Pair',
                    },
                  ],
                  prim: 'Pair',
                },
              ],
              prim: 'Left',
            },
          ],
          prim: 'Right',
        },
      ],
      prim: 'Right',
    });
  });

  it('Encode parameter properly func 4', () => {
    const schema = new ParameterSchema(params);
    expect(schema.Encode('4', 3)).toEqual({
      args: [
        {
          args: [
            {
              args: [
                {
                  int: '3',
                },
              ],
              prim: 'Right',
            },
          ],
          prim: 'Right',
        },
      ],
      prim: 'Right',
    });
  });
});

describe('Exchange contract test', () => {
  it('Test storage schema', () => {
    const schema = new Schema(storageToken);
    expect(schema.ExtractSchema()).toEqual({
      '0': {
        big_map: {
          key: "address",
          value: {
            '0': 'nat',
            '1': {
              map: {
                key: 'address',
                value: 'nat',
              },
            },
          },
        },
      },
      '1': 'nat',
      '2': 'string',
      '3': 'string',
    });

    expect(schema.generateSchema()).toEqual({
      __michelsonType: "pair",
      schema: {
        '0': {
          __michelsonType: "big_map",
          schema: {
            key: {
              __michelsonType: "address",
              schema: "address"
            },
            value: {
              __michelsonType: 'pair',
              schema: {
                '0': {
                  __michelsonType: "nat",
                  schema: "nat"
                },
                '1': {
                  __michelsonType: 'map',
                  schema: {
                    key: {
                      __michelsonType: "address",
                      schema: "address"
                    },
                    value: {
                      __michelsonType: "nat",
                      schema: "nat"
                    },
                  },
                },
              }
            },
          },
        },
        '1': {
          __michelsonType: "nat",
          schema: "nat"
        },
        '2': {
          __michelsonType: "string",
          schema: "string"
        },
        '3': {
          __michelsonType: "string",
          schema: "string"
        },
      }
    });
  });

  it('Test storage parsing', () => {
    const schema = new Schema(storageToken);
    expect(schema.Execute(rpcToken.script.storage)).toEqual({
      '0': expectMichelsonMap(),
      '1': new BigNumber('1000000'),
      '2': 'Tezos Gold',
      '3': 'TGD',
    });
  });

  it('Test parameter schema', () => {
    const schema = new ParameterSchema(paramsToken);
    expect(schema.ExtractSchema()).toEqual({
      '0': {
        '0': 'address',
        '1': 'address',
        '2': 'nat',
      },
      '1': 'address',
    });

    expect(schema.generateSchema()).toEqual({
      __michelsonType: "or",
      schema: {
        '0': {
          __michelsonType: "pair",
          schema: {
            '0': {
              __michelsonType: 'address',
              schema: "address"
            },
            '1': {
              __michelsonType: 'address',
              schema: "address"
            },
            '2': {
              __michelsonType: 'nat',
              schema: "nat"
            },
          }
        },
        '1': {
          __michelsonType: 'address',
          schema: "address"
        },
      }
    });

    expect(schema.ExtractSignatures()).toContainEqual(['1', 'address']);
    expect(schema.ExtractSignatures()).toContainEqual(['0', 'address', 'address', 'nat']);
  });

  it('Encode parameter properly func 0', () => {
    const schema = new ParameterSchema(paramsToken);
    expect(
      schema.Encode(
        '0',
        'mv1NiGqJHiRwivfGULeVz8kV16AnhepCa5rW',
        'mv1NiGqJHiRwivfGULeVz8kV16AnhepCa5rW',
        '1'
      )
    ).toEqual({
      args: [
        {
          args: [
            {
              string: 'mv1NiGqJHiRwivfGULeVz8kV16AnhepCa5rW',
            },
            {
              args: [
                {
                  string: 'mv1NiGqJHiRwivfGULeVz8kV16AnhepCa5rW',
                },
                {
                  int: '1',
                },
              ],
              prim: 'Pair',
            },
          ],
          prim: 'Pair',
        },
      ],
      prim: 'Left',
    });
  });

  it('Encode parameter properly func 1', () => {
    const schema = new ParameterSchema(paramsToken);
    expect(schema.Encode('1', 'mv1NiGqJHiRwivfGULeVz8kV16AnhepCa5rW')).toEqual({
      args: [
        {
          string: 'mv1NiGqJHiRwivfGULeVz8kV16AnhepCa5rW',
        },
      ],
      prim: 'Right',
    });
  });
});
