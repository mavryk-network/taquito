/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const rpcContractResponse = { "manager": "tz1Z1nn9Y7vzyvtf6rAYMPhPNGqMJXw88xGH", "balance": "120000000", "spendable": false, "delegate": { "setable": false }, "script": { "code": [{ "prim": "parameter", "args": [{ "prim": "or", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }, { "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "mumav" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }] }, { "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }, { "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "mumav" }, { "prim": "timestamp" }] }] }, { "prim": "nat" }] }] }] }] }, { "prim": "storage", "args": [{ "prim": "pair", "args": [{ "prim": "big_map", "args": [{ "prim": "address" }, { "prim": "nat" }] }, { "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "contract", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "contract", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "pair", "args": [{ "prim": "address" }, { "prim": "nat" }] }] }, { "prim": "address" }] }] }] }, { "prim": "nat" }] }] }, { "prim": "contract", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "pair", "args": [{ "prim": "address" }, { "prim": "nat" }] }] }, { "prim": "address" }] }] }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "map", "args": [{ "prim": "address" }, { "prim": "or", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }, { "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "mumav" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }] }, { "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "mumav" }, { "prim": "timestamp" }] }] }] }] }] }] }] }] }] }, { "prim": "code", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "IF_LEFT", "args": [[{ "prim": "IF_LEFT", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "NOW" }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "addLiquidity: Expected the deadline to be greater than now." }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "addLiquidity: Expected maxTokens to be greater than 0." }] }, { "prim": "FAILWITH" }]] }, { "prim": "AMOUNT" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "addLiquidity: Expected the amount sent to the contract to be greater than 0." }] }, { "prim": "FAILWITH" }]] }, { "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }]] }, { "prim": "COMPARE" }, { "prim": "GT" }, { "prim": "IF", "args": [[{ "prim": "SWAP" }, { "prim": "SENDER" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CDR" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "LEFT", "args": [{ "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "mumav" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }] }, { "prim": "LEFT", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "mumav" }, { "prim": "timestamp" }] }] }] }] }, { "prim": "SOME" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "SENDER" }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "PAIR" }]] }, { "prim": "LEFT", "args": [{ "prim": "nat" }] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CAR" }, { "prim": "AMOUNT" }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "PAIR" }], [{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1000000" }] }, { "prim": "AMOUNT" }, { "prim": "COMPARE" }, { "prim": "GE" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "addLiquidity: amount is less than 1 XTZ." }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "BALANCE" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }, { "prim": "SOME" }, { "prim": "SENDER" }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "PAIR" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "BALANCE" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SENDER" }, { "prim": "DIP", "args": [[{ "prim": "SELF" }, { "prim": "ADDRESS" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }, { "prim": "CDR" }, { "prim": "CAR" }]] }, { "prim": "PAIR" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DROP" }]] }]] }, { "prim": "LEFT", "args": [{ "prim": "address" }] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "PAIR" }]] }], [{ "prim": "DUP" }, { "prim": "CAR" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidity: expected burnAmount to be greater than zero." }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "NOW" }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidity: expected deadline to be greater than the current time." }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidity: expected minmumav to be greater than zero." }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidity: expected minTokens to be greater than zero." }] }, { "prim": "FAILWITH" }]] }, { "prim": "RIGHT", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }] }, { "prim": "LEFT", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "mumav" }, { "prim": "timestamp" }] }] }] }] }, { "prim": "SOME" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "SENDER" }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SENDER" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CDR" }]] }, { "prim": "PAIR" }, { "prim": "LEFT", "args": [{ "prim": "nat" }] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CAR" }, { "prim": "AMOUNT" }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "PAIR" }]] }], [{ "prim": "IF_LEFT", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "DIP", "args": [[{ "prim": "NOW" }]] }, { "prim": "COMPARE" }, { "prim": "GE" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "tezToToken: the deadline is less than the current time." }] }, { "prim": "FAILWITH" }]] }, { "prim": "AMOUNT" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "tezToToken: tezosSold is zero." }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "tezToToken: minTokens is zero." }] }, { "prim": "FAILWITH" }]] }, { "prim": "LEFT", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "mumav" }, { "prim": "timestamp" }] }] }] }, { "prim": "RIGHT", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }, { "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "mumav" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }] }] }, { "prim": "SOME" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "SENDER" }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SELF" }, { "prim": "ADDRESS" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CDR" }]] }, { "prim": "PAIR" }, { "prim": "LEFT", "args": [{ "prim": "nat" }] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CAR" }, { "prim": "AMOUNT" }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "PAIR" }], [{ "prim": "IF_LEFT", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "DIP", "args": [[{ "prim": "NOW" }]] }, { "prim": "COMPARE" }, { "prim": "GE" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "tokenToTez: the deadline is less than the current time." }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "tokenToTez: tokensSold is zero." }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "tokenToTez: minmumav is zero." }] }, { "prim": "FAILWITH" }]] }, { "prim": "RIGHT", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }, { "prim": "RIGHT", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }, { "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "mumav" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }] }] }, { "prim": "SOME" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "SENDER" }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SENDER" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CDR" }]] }, { "prim": "PAIR" }, { "prim": "LEFT", "args": [{ "prim": "nat" }] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CAR" }, { "prim": "AMOUNT" }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "PAIR" }], [{ "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CAR" }, { "prim": "ADDRESS" }, { "prim": "SENDER" }, { "prim": "COMPARE" }, { "prim": "EQ" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "continuation: this method only allows calls from the broker contract." }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "SOURCE" }, { "prim": "GET" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "continuation: the continuation storage could not be found for the transaction source." }] }, { "prim": "FAILWITH" }], []] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "NONE", "args": [{ "prim": "or", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }, { "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "mumav" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }] }] }, { "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "timestamp" }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "mumav" }, { "prim": "timestamp" }] }] }] }] }] }, { "prim": "SOURCE" }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "PAIR" }]] }, { "prim": "IF_LEFT", "args": [[{ "prim": "IF_LEFT", "args": [[{ "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "AMOUNT" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }, { "prim": "MUL" }, { "prim": "DIP", "args": [[{ "prim": "AMOUNT" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }, { "prim": "BALANCE" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }, { "prim": "SUB" }, { "prim": "ISNAT" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "getmumavReserve failed, the natural value was unexpectedly less than zero." }] }, { "prim": "FAILWITH" }], []] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "addLiquidityContinuation: divide by zero error, tezosReserve was zero in the formula (amount * tokenReserve / tezosReserve + 1)." }] }, { "prim": "FAILWITH" }], [{ "prim": "CAR" }]] }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "1" }] }, { "prim": "ADD" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "AMOUNT" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }, { "prim": "MUL" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "addLiquidityContinuation: divide by zero error, tokenReserve was zero in the formula (amount * totalSupply / tokenReserve)." }] }, { "prim": "FAILWITH" }], [{ "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }]] }, { "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "COMPARE" }, { "prim": "LE" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "addLiquidityContinuation: Expected maxTokens >= tokenAmount" }] }, { "prim": "FAILWITH" }]] }]] }]] }]] }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "CAR" }]] }, { "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "COMPARE" }, { "prim": "LE" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "addLiquidityContinuation: Expected liquidityMinted >= minLiquidity" }] }, { "prim": "FAILWITH" }]] }]] }, { "prim": "SWAP" }, { "prim": "SOURCE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }]] }, { "prim": "GET" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], []] }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }, { "prim": "DUP" }]] }, { "prim": "ADD" }, { "prim": "SOME" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CAR" }]] }, { "prim": "SOURCE" }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CAR" }]] }, { "prim": "ADD" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SOURCE" }, { "prim": "DIP", "args": [[{ "prim": "SELF" }, { "prim": "ADDRESS" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }]] }, { "prim": "PAIR" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DROP" }]] }]] }, { "prim": "LEFT", "args": [{ "prim": "address" }] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "PAIR" }], [{ "prim": "DUP" }, { "prim": "CAR" }, { "prim": "CAR" }, { "prim": "BALANCE" }, { "prim": "MUL" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CAR" }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidityContinuation: division by zero" }] }, { "prim": "FAILWITH" }], [{ "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "CDR" }]] }, { "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "COMPARE" }, { "prim": "GE" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidityContinuation: the mumav amount to be withdrawn is lower than the minmumav that you have set." }] }, { "prim": "FAILWITH" }]] }, { "prim": "SWAP" }]] }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }]] }, { "prim": "MUL" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CAR" }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidityContinuation: division by zero" }] }, { "prim": "FAILWITH" }], [{ "prim": "CAR" }]] }, { "prim": "SWAP" }, { "prim": "SOURCE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }]] }, { "prim": "GET" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], []] }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "CAR" }]] }, { "prim": "SUB" }, { "prim": "ISNAT" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidityContinuation: burnAmount is more than balance." }] }, { "prim": "FAILWITH" }], []] }, { "prim": "SOME" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CAR" }]] }, { "prim": "SOURCE" }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "PAIR" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }, { "prim": "CAR" }, { "prim": "CAR" }]] }, { "prim": "SUB" }, { "prim": "ISNAT" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidityContinuation: burnAmount is more than balance." }] }, { "prim": "FAILWITH" }], []] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "CDR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "SOURCE" }, { "prim": "CONTRACT", "args": [{ "prim": "unit" }] }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "removeLiquidityContinuation: the source contract does not match the expected type (contract Unit)." }] }, { "prim": "FAILWITH" }], []] }]] }, { "prim": "UNIT" }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "SELF" }, { "prim": "ADDRESS" }, { "prim": "DIP", "args": [[{ "prim": "SOURCE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "PAIR" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "LEFT", "args": [{ "prim": "address" }] }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "CONS" }, { "prim": "PAIR" }]] }], [{ "prim": "IF_LEFT", "args": [[{ "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "AMOUNT" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "AMOUNT" }, { "prim": "BALANCE" }, { "prim": "SUB" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "PAIR" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "inputReserve must be greater than zero" }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "outputReserve must be greater than zero" }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "997" }] }, { "prim": "MUL" }, { "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "MUL" }]] }, { "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "CDR" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "1000" }] }, { "prim": "MUL" }]] }, { "prim": "ADD" }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "getInputPrice division by zero" }] }, { "prim": "FAILWITH" }], [{ "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "DIP", "args": [[{ "prim": "CAR" }]] }, { "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "COMPARE" }, { "prim": "GE" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "tezToTokenContinuation: tokens bought is less than the minTokens amount you set." }] }, { "prim": "FAILWITH" }]] }]] }, { "prim": "SELF" }, { "prim": "ADDRESS" }, { "prim": "DIP", "args": [[{ "prim": "SOURCE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "PAIR" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "LEFT", "args": [{ "prim": "address" }] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "PAIR" }], [{ "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "BALANCE" }, { "prim": "DIP", "args": [[{ "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }]] }, { "prim": "PAIR" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DROP" }]] }]] }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "inputReserve must be greater than zero" }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "COMPARE" }, { "prim": "LT" }, { "prim": "IF", "args": [[], [{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "outputReserve must be greater than zero" }] }, { "prim": "FAILWITH" }]] }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "997" }] }, { "prim": "MUL" }, { "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "MUL" }]] }, { "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "CDR" }, { "prim": "CAR" }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "1000" }] }, { "prim": "MUL" }]] }, { "prim": "ADD" }]] }, { "prim": "EDIV" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "getInputPrice division by zero" }] }, { "prim": "FAILWITH" }], [{ "prim": "CAR" }]] }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "1" }] }, { "prim": "MUL" }, { "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "SOURCE" }, { "prim": "CONTRACT", "args": [{ "prim": "unit" }] }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "tokenToTezContinuation: the source does not match the expected contract type (contract unit)." }] }, { "prim": "FAILWITH" }], []] }, { "prim": "SWAP" }, { "prim": "UNIT" }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SOURCE" }, { "prim": "DIP", "args": [[{ "prim": "SELF" }, { "prim": "ADDRESS" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "SWAP" }, { "prim": "CAR" }]] }, { "prim": "PAIR" }]] }, { "prim": "PAIR" }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "LEFT", "args": [{ "prim": "address" }] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "CONS" }, { "prim": "PAIR" }]] }]] }]] }]] }]] }]] }], "storage": { "prim": "Pair", "args": [[], { "prim": "Pair", "args": [{ "prim": "Pair", "args": [{ "string": "KT1XAMU1kn8EJLM2uqrP71Jevvkyo7yyfNTK" }, { "string": "KT1DmCHxit2bQ2GiHVc24McY6meuJPMTrqD8" }] }, { "prim": "Pair", "args": [{ "int": "100000000" }, []] }] }] } }, "counter": "0" }

export const storage = rpcContractResponse.script.code.find(
    x => x.prim === 'storage'
)!.args[0] as any;

export const params = rpcContractResponse.script.code.find(
    x => x.prim === 'parameter'
)!.args[0] as any;