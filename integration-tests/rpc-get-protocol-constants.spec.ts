import { Protocols } from "@taquito/taquito";
import { CONFIGS, NetworkType } from "./config";
import BigNumber from 'bignumber.js';
import {
  ConstantsResponseProto017, ConstantsResponseProto018,
} from '@taquito/rpc';

CONFIGS().forEach(({ lib, protocol, rpc, networkType }) => {
  const Tezos = lib;
  const oxfordnet = (networkType == NetworkType.TESTNET && protocol === Protocols.ProxfordY) ? test : test.skip;
  const weeklynet = (networkType == NetworkType.TESTNET && protocol === Protocols.ProtoALpha) ? test : test.skip;
  describe('Test fetching constants for all protocols on Mainnet', () => {

    const rpcUrl = 'https://mainnet.ecadinfra.com/';
    Tezos.setRpcProvider(rpcUrl);

    it(`successfully fetches Proto17(nairobi) constants at head`, async () => {
      const constants: ConstantsResponseProto017 = await Tezos.rpc.getConstants();

      expect(constants).toEqual({
        proof_of_work_nonce_size: 8,
        nonce_length: 32,
        nonce_revelation_threshold: 512,
        max_anon_ops_per_block: 132,
        max_operation_data_length: 32768,
        max_proposals_per_delegate: 20,
        preserved_cycles: 5,
        blocks_per_cycle: 16384,
        blocks_per_commitment: 128,
        hard_gas_limit_per_operation: new BigNumber(1040000),
        hard_gas_limit_per_block: new BigNumber(2600000),
        proof_of_work_threshold: new BigNumber(281474976710655),
        seed_nonce_revelation_tip: new BigNumber(125000),
        origination_size: 257,
        cost_per_byte: new BigNumber(250),
        hard_storage_limit_per_operation: new BigNumber(60000),
        quorum_min: 2000,
        quorum_max: 7000,
        min_proposal_quorum: 500,
        liquidity_baking_subsidy: new BigNumber(1250000),
        liquidity_baking_toggle_ema_threshold: 1000000000,
        max_allowed_global_constants_depth: 10000,
        max_micheline_bytes_limit: 50000,
        max_micheline_node_count: 50000,
        michelson_maximum_type_size: 2001,
        blocks_per_stake_snapshot: 1024,
        baking_reward_fixed_portion: new BigNumber(5000000),
        baking_reward_bonus_per_slot: new BigNumber(2143),
        endorsing_reward_per_slot: new BigNumber(1428),
        max_operations_time_to_live: 240,
        consensus_committee_size: 7000,
        consensus_threshold: 4667,
        minimal_participation_ratio: {
          denominator: 3,
          numerator: 2,
        },
        max_slashing_period: 2,
        frozen_deposits_percentage: 10,
        double_baking_punishment: new BigNumber(640000000),
        ratio_of_frozen_deposits_slashed_per_double_endorsement: {
          denominator: 2,
          numerator: 1,
        },
        minimal_block_delay: new BigNumber(15),
        delay_increment_per_round: new BigNumber(8),
        dal_parametric: {
          attestation_lag: 1,
          attestation_threshold: 50,
          blocks_per_epoch: 32,
          feature_enable: false,
          number_of_shards: 2048,
          number_of_slots: 256,
          page_size: 4096,
          redundancy_factor: 16,
          slot_size: 1048576,
        },
        minimal_stake: new BigNumber('6000000000'),
        cache_layout_size: 3,
        cache_sampler_state_cycles: 8,
        cache_script_size: 100000000,
        cache_stake_distribution_cycles: 8,
        cycles_per_voting_period: 5,
        smart_rollup_arith_pvm_enable: false,
        smart_rollup_challenge_window_in_blocks: 80640,
        smart_rollup_commitment_period_in_blocks: 60,
        smart_rollup_enable: true,
        smart_rollup_max_active_outbox_levels: 80640,
        smart_rollup_max_lookahead_in_blocks: 172800,
        smart_rollup_max_number_of_cemented_commitments: 5,
        smart_rollup_max_number_of_messages_per_level: "1000000",
        smart_rollup_max_number_of_parallel_games: 32,
        smart_rollup_max_outbox_messages_per_level: 100,
        smart_rollup_max_wrapped_proof_binary_size: 30000,
        smart_rollup_message_size_limit: 4096,
        smart_rollup_number_of_sections_in_dissection: 32,
        smart_rollup_origination_size: 6314,
        smart_rollup_stake_amount: "10000000000",
        smart_rollup_timeout_period_in_blocks: 40320,
        tx_rollup_commitment_bond: new BigNumber(10000000000),
        tx_rollup_cost_per_byte_ema_factor: 120,
        tx_rollup_enable: false,
        tx_rollup_finality_period: 40000,
        tx_rollup_hard_size_limit_per_inbox: 500000,
        tx_rollup_hard_size_limit_per_message: 5000,
        tx_rollup_max_commitments_count: 80100,
        tx_rollup_max_inboxes_count: 40100,
        tx_rollup_max_messages_per_inbox: 1010,
        tx_rollup_max_ticket_payload_size: 2048,
        tx_rollup_max_withdrawals_per_batch: 15,
        tx_rollup_origination_size: 4000,
        tx_rollup_rejection_max_proof_size: 30000,
        tx_rollup_sunset_level: 3473409,
        tx_rollup_withdraw_period: 40000,
        vdf_difficulty: new BigNumber('8000000000'),
        zk_rollup_enable: false,
        zk_rollup_min_pending_to_process: 10,
        zk_rollup_origination_size: 4000,
      });
    });
  });

  describe(`Fetch constants for testnet`, () => {
    oxfordnet(`successfully fetches all constants for oxfordnet using ${rpc}`, async () => {
      Tezos.setRpcProvider(rpc);
      const constants: ConstantsResponseProto018 = await Tezos.rpc.getConstants();

      expect(constants).toEqual({

        adaptive_issuance_activation_vote_enable: false,
        adaptive_issuance_launch_ema_threshold: 100000000,
        adaptive_rewards_params: {
          center_dz: {
            denominator: "2",
            numerator: "1",
          },
          growth_rate: {
            denominator: "100",
            numerator: "1",
          },
          issuance_ratio_max: {
            denominator: "20",
            numerator: "1",
          },
          issuance_ratio_min: {
            denominator: "2000",
            numerator: "1",
          },
          max_bonus: "50000000000000",
          radius_dz: {
            denominator: "50",
            numerator: "1",
          },
        },
        autostaking_enable: true,
        proof_of_work_nonce_size: 8,
        nonce_length: 32,
        max_anon_ops_per_block: 132,
        max_operation_data_length: 32768,
        max_proposals_per_delegate: 20,
        max_micheline_node_count: 50000,
        max_micheline_bytes_limit: 50000,
        max_allowed_global_constants_depth: 10000,
        cache_layout_size: 3,
        michelson_maximum_type_size: 2001,
        smart_rollup_max_wrapped_proof_binary_size: 30000,
        smart_rollup_max_number_of_messages_per_level: '1000000',
        preserved_cycles: 3,
        blocks_per_cycle: 8192,
        blocks_per_commitment: 64,
        nonce_revelation_threshold: 512,
        blocks_per_stake_snapshot: 512,
        cycles_per_voting_period: 1,
        hard_gas_limit_per_operation: new BigNumber(1040000),
        hard_gas_limit_per_block: new BigNumber(2600000),
        proof_of_work_threshold: new BigNumber(-1),
        minimal_stake: new BigNumber(6000000000),
        origination_size: 257,
        cost_per_byte: new BigNumber(250),
        hard_storage_limit_per_operation: new BigNumber(60000),
        percentage_of_frozen_deposits_slashed_per_double_baking: 5,
        percentage_of_frozen_deposits_slashed_per_double_attestation: 50,
        minimal_frozen_stake: '600000000',
        limit_of_delegation_over_baking: 9,
        issuance_weights: {
          attesting_reward_weight: 10240,
          baking_reward_bonus_weight: 5120,
          baking_reward_fixed_portion_weight: 5120,
          base_total_issued_per_minute: "85007812",
          liquidity_baking_subsidy_weight: 1280,
          seed_nonce_revelation_tip_weight: 1,
          vdf_revelation_tip_weight: 1,
        },
        min_proposal_quorum: 500,
        edge_of_staking_over_delegation: 2,
        global_limit_of_staking_over_baking: 5,
        liquidity_baking_toggle_ema_threshold: 1000000000,
        max_operations_time_to_live: 240,
        minimal_block_delay: new BigNumber(8),
        delay_increment_per_round: new BigNumber(3),
        consensus_committee_size: 7000,
        consensus_threshold: 4667,
        minimal_participation_ratio: {
          numerator: 2,
          denominator: 3
        },
        max_slashing_period: 2,
        cache_script_size: 100000000,
        cache_stake_distribution_cycles: 8,
        cache_sampler_state_cycles: 8,
        dal_parametric: {
          feature_enable: false,
          number_of_slots: 256,
          attestation_lag: 4,
          attestation_threshold: 50,
          blocks_per_epoch: 1,
          redundancy_factor: 16,
          page_size: 4096,
          slot_size: 1048576,
          number_of_shards: 2048
        },
        quorum_max: 7000,
        quorum_min: 2000,
        smart_rollup_arith_pvm_enable: false,
        smart_rollup_challenge_window_in_blocks: 40,
        smart_rollup_commitment_period_in_blocks: 20,
        smart_rollup_max_lookahead_in_blocks: 30000,
        smart_rollup_max_active_outbox_levels: 20160,
        smart_rollup_max_outbox_messages_per_level: 100,
        smart_rollup_max_number_of_cemented_commitments: 5,
        smart_rollup_max_number_of_parallel_games: 32,
        smart_rollup_message_size_limit: 4096,
        smart_rollup_number_of_sections_in_dissection: 32,
        smart_rollup_origination_size: 6314,
        smart_rollup_private_enable: true,
        smart_rollup_reveal_activation_level: {
          dal_page: 2147483646,
          dal_parameters: 2147483646,
          metadata: 0,
          raw_data: {
            Blake2B: 0,
          },
        },
        smart_rollup_riscv_pvm_enable: false,
        smart_rollup_stake_amount: '10000000000',
        smart_rollup_timeout_period_in_blocks: 500,
        testnet_dictator: 'tz1Xf8zdT3DbAX9cHw3c3CXh79rc4nK4gCe8',
        vdf_difficulty: new BigNumber(10000000000),
        zk_rollup_enable: false,
        zk_rollup_max_ticket_payload_size: 2048,
        zk_rollup_min_pending_to_process: 10,
        zk_rollup_origination_size: 4000,
      });
    });

    weeklynet(`successfully fetches all constants for weeklynet using ${rpc}`, async () => {
      Tezos.setRpcProvider(rpc);
      const constants: ConstantsResponseProto017 = await Tezos.rpc.getConstants();

      expect(constants).toEqual({
        adaptive_issuance_launch_ema_threshold: 10000000,
        adaptive_rewards_params: {
          center_dz: {
            denominator: "2",
            numerator: "1",
          },
          growth_rate: "115740740",
          issuance_ratio_max: {
            denominator: "10",
            numerator: "1",
          },
          issuance_ratio_min: {
            denominator: "200",
            numerator: "1",
          },
          max_bonus: "50000000000000",
          radius_dz: {
            denominator: "50",
            numerator: "1",
          },
        },
        proof_of_work_nonce_size: 8,
        nonce_length: 32,
        nonce_revelation_threshold: 32,
        max_anon_ops_per_block: 132,
        max_operation_data_length: 32768,
        max_proposals_per_delegate: 20,
        preserved_cycles: 3,
        blocks_per_cycle: 128,
        blocks_per_commitment: 16,
        hard_gas_limit_per_operation: new BigNumber(1040000),
        hard_gas_limit_per_block: new BigNumber(5200000),
        proof_of_work_threshold: new BigNumber(-1),
        origination_size: 257,
        percentage_of_frozen_deposits_slashed_per_double_baking: 11,
        percentage_of_frozen_deposits_slashed_per_double_attestation: 50,
        cost_per_byte: new BigNumber(250),
        hard_storage_limit_per_operation: new BigNumber(60000),
        issuance_weights: {
          attesting_reward_weight: 10240,
          baking_reward_bonus_weight: 5120,
          baking_reward_fixed_portion_weight: 5120,
          base_total_issued_per_minute: "85007812",
          liquidity_baking_subsidy_weight: 1280,
          seed_nonce_revelation_tip_weight: 1,
          vdf_revelation_tip_weight: 1,
        },
        limit_of_delegation_over_baking: 9,
        quorum_min: 2000,
        quorum_max: 7000,
        min_proposal_quorum: 500,
        liquidity_baking_toggle_ema_threshold: 100000,
        max_allowed_global_constants_depth: 10000,
        max_micheline_bytes_limit: 50000,
        max_micheline_node_count: 50000,
        michelson_maximum_type_size: 2001,
        blocks_per_stake_snapshot: 64,
        max_operations_time_to_live: 120,
        consensus_committee_size: 7000,
        consensus_threshold: 4667,
        minimal_participation_ratio: {
          denominator: 3,
          numerator: 2,
        },
        max_slashing_period: 2,
        minimal_block_delay: new BigNumber(7),
        minimal_frozen_stake: "600000000",
        delay_increment_per_round: new BigNumber(7),
        edge_of_staking_over_delegation: 2,
        global_limit_of_staking_over_baking: 5,
        dal_parametric: {
          attestation_lag: 4,
          attestation_threshold: 50,
          feature_enable: true,
          number_of_shards: 2048,
          number_of_slots: 32,
          page_size: 4096,
          redundancy_factor: 16,
          slot_size: 65536,
          blocks_per_epoch: 32,
        },
        minimal_stake: new BigNumber('6000000000'),
        cache_layout_size: 3,
        cache_sampler_state_cycles: 8,
        cache_script_size: 100000000,
        cache_stake_distribution_cycles: 8,
        cycles_per_voting_period: 1,
        smart_rollup_arith_pvm_enable: true,
        smart_rollup_challenge_window_in_blocks: 40,
        smart_rollup_commitment_period_in_blocks: 20,
        smart_rollup_max_active_outbox_levels: 20160,
        smart_rollup_max_lookahead_in_blocks: 30000,
        smart_rollup_max_number_of_cemented_commitments: 5,
        smart_rollup_max_number_of_messages_per_level: "1000000",
        smart_rollup_max_number_of_parallel_games: 32,
        smart_rollup_max_outbox_messages_per_level: 100,
        smart_rollup_max_wrapped_proof_binary_size: 30000,
        smart_rollup_message_size_limit: 4096,
        smart_rollup_number_of_sections_in_dissection: 32,
        smart_rollup_origination_size: 6314,
        smart_rollup_private_enable: true,
        smart_rollup_reveal_activation_level: {
          dal_page: 0,
          metadata: 0,
          raw_data: {
            Blake2B: 0,
          },
        },
        smart_rollup_stake_amount: "32000000",
        smart_rollup_timeout_period_in_blocks: 500,
        vdf_difficulty: new BigNumber('10000000'),
        zk_rollup_enable: true,
        zk_rollup_max_ticket_payload_size: 2048,
        zk_rollup_min_pending_to_process: 10,
        zk_rollup_origination_size: 4000,
      });

    });
  });
});
