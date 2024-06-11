export const saplingLiveCodeContract =  `{ parameter (list (sapling_transaction 8));
    storage (sapling_state 8);
    code { UNPAIR ;
           NIL operation ;
           SWAP ;
           DIP { SWAP } ;
           AMOUNT ;
           SWAP ;
           DIP { SWAP } ;
           ITER { SAPLING_VERIFY_UPDATE ;
                  { IF_NONE { { UNIT ; FAILWITH } } {} } ;
                  UNPAIR ;
                  SWAP ;
                  UNPAIR ;
                  DUP ;
                  DIP { ABS ; PUSH mumav 1 ; MUL } ;
                  { GT ;
                    IF
                      { DIP 2
                             { UNPACK key_hash ; { IF_NONE { { UNIT ; FAILWITH } } {} } ; IMPLICIT_ACCOUNT } ;
                        SWAP ;
                        DIP { UNIT ; TRANSFER_TOKENS ; SWAP ; DIP { CONS } } }
                      { DIP 2 { SWAP } ;
                        DIP { SWAP } ;
                        SWAP ;
                        SUB_MUMAV ;
                        { IF_NONE { { UNIT ; FAILWITH } } {} } ;
                        DIP 2
                             { SIZE ; PUSH nat 0 ; { { COMPARE ; EQ } ; IF {} { { UNIT ; FAILWITH } } } } ;
                        SWAP } } } ;
           DIP { PUSH mumav 0 ; { { COMPARE ; EQ } ; IF {} { { UNIT ; FAILWITH } } } } ;
           SWAP ;
           PAIR } }
        `