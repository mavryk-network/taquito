import { b58decodeL2Address } from '@mavrykdynamics/taquito-utils';
import {
  TxRollupL2AddressToken,
  TxRollupL2AddressValidationError,
} from './../../src/tokens/comparable/tx_rollup_l2_address';

describe('TxRollupL2Address Token', () => {
  let token: TxRollupL2AddressToken;
  const bytes = b58decodeL2Address('mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D');
  beforeEach(() => {
    token = new TxRollupL2AddressToken(
      { prim: 'tx_rollup_l2_address', args: [], annots: [] },
      0,
      null as any
    );
  });

  describe('test ToBigMapKey', () => {
    it('to email bytes', () => {
      expect(token.ToBigMapKey('mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D')).toEqual({
        key: { bytes },
        type: { prim: 'bytes' },
      });
    });
  });

  describe('EncodeObject', () => {
    it('Should encode address to string', () => {
      expect(token.EncodeObject('mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D')).toEqual({
        string: 'mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D',
      });
    });

    it('test semantic', () => {
      const val = token.EncodeObject('mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D', {
        tx_rollup_l2_address: () => ({ string: 'tester' }),
      });
      const val2 = token.EncodeObject('mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D', {
        tx_rollup_l2_address: (arg) => ({ string: arg }),
      });
      expect(val).toEqual({ string: 'tester' });
      expect(val2).toEqual({ string: 'mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D' });
    });

    it('Should throw a new validation error when address is not valid', () => {
      expect(() => token.EncodeObject('mv4').toThrowError(TxRollupL2AddressValidationError));
      expect(() =>
        token
          .EncodeObject('mv1NiGqJHiRwivfGULeVz8kV16AnhepCa5rW')
          .toThrowError(TxRollupL2AddressValidationError)
      );
      expect(() => token.EncodeObject(1).toThrowError(TxRollupL2AddressValidationError));
      expect(() => token.EncodeObject([]).toThrowError(TxRollupL2AddressValidationError));
    });
  });

  describe('Encode', () => {
    it('Should encode address to string', () => {
      expect(token.Encode(['mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D'])).toEqual({
        string: 'mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D',
      });
    });

    it('Should throw a validation error when address is not valid', () => {
      expect(() => token.Encode(['test'])).toThrowError(TxRollupL2AddressValidationError);
      expect(() => token.Encode([])).toThrowError(TxRollupL2AddressValidationError);
      expect(() => token.Encode(['', '', '', ''])).toThrowError(TxRollupL2AddressValidationError);
      expect(() => token.Encode(['1'])).toThrowError(TxRollupL2AddressValidationError);

      try {
        token.Encode(['test']);
      } catch (ex) {
        expect(ex.name).toEqual('TxRollupL2AddressValidationError');
      }
    });
  });

  describe('generateSchema', () => {
    it('Should generate the schema properly', () => {
      expect(token.generateSchema()).toEqual({
        __michelsonType: 'tx_rollup_l2_address',
        schema: 'tx_rollup_l2_address',
      });
    });
  });
  describe('ToBigMapKey', () => {
    it('should equal expected', () => {
      expect(() => token.ToBigMapKey(''));
    });
  });
  describe('Execute', () => {
    it('should throw error if not bytes', () => {
      expect(() => token.Execute({ string: '' })).toThrowError(TxRollupL2AddressValidationError);
      expect(() => token.Execute({ bytes: '' })).toThrowError(TxRollupL2AddressValidationError);
      expect(() => token.Execute({ bytes: '', string: '' })).toThrowError(
        TxRollupL2AddressValidationError
      );
    });
    it('should return string', () => {
      expect(token.Execute({ bytes: '', string: 'mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D' })).toEqual(
        'mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D'
      );
    });
    it('should return string', () => {
      expect(token.Execute({ bytes })).toEqual('mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D');
    });
  });
  describe('ToKey', () => {
    it('mv4 address should be returned', () => {
      expect(token.ToKey({ bytes })).toEqual('mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D');
      expect(token.ToKey({ string: 'mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D' })).toEqual(
        'mv4MEssECsa9Yrd5J7vDyd92cK2Mt1Kuhm8D'
      );
    });
    it('should throw error when incorrect provided', () => {
      expect(() => token.ToKey({ bytes: '' })).toThrowError(TxRollupL2AddressValidationError);
    });
  });
  describe('extract schema', () => {
    it('should be prim value of token', () => {
      expect(token.ExtractSchema()).toEqual('tx_rollup_l2_address');
    });
  });
  describe('find return tokens', () => {
    it('should return array with prim of this token', () => {
      expect(token.findAndReturnTokens('tx_rollup_l2_address', [])).toEqual([token]);
      expect(token.findAndReturnTokens('else', [])).toEqual([]);
    });
  });
});
