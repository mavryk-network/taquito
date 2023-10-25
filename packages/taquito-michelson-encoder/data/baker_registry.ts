/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const rpcContractResponse = { "manager": "tz1aicu922KqrGxpdTpVdSD1Jrqz7fJiUu6L", "balance": "0", "spendable": false, "delegate": { "setable": false }, "script": { "code": [{ "prim": "parameter", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "key_hash", "annots": ["%delegate"] }, { "prim": "pair", "args": [{ "prim": "option", "args": [{ "prim": "bytes" }], "annots": ["%data"] }, { "prim": "option", "args": [{ "prim": "address" }], "annots": ["%reporter"] }] }], "annots": ["%set_data"] }, { "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "mumav", "annots": ["%signup_fee"] }, { "prim": "mumav", "annots": ["%update_fee"] }], "annots": ["%set_fees"] }, { "prim": "contract", "args": [{ "prim": "unit" }], "annots": ["%withdraw"] }] }] }] }, { "prim": "storage", "args": [{ "prim": "pair", "args": [{ "prim": "big_map", "args": [{ "prim": "key_hash" }, { "prim": "pair", "args": [{ "prim": "pair", "args": [{ "prim": "option", "args": [{ "prim": "bytes" }], "annots": ["%data"] }, { "prim": "option", "args": [{ "prim": "address" }], "annots": ["%reporter"] }] }, { "prim": "timestamp", "annots": ["%last_update"] }] }] }, { "prim": "pair", "args": [{ "prim": "address", "annots": ["%owner"] }, { "prim": "pair", "args": [{ "prim": "mumav", "annots": ["%signup_fee"] }, { "prim": "mumav", "annots": ["%update_fee"] }] }] }] }] }, { "prim": "code", "args": [[[[{ "prim": "DUP" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }]], { "prim": "IF_LEFT", "args": [[[[{ "prim": "DUP" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }]], [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], { "prim": "CAR" }, [{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }], { "prim": "GET", "annots": ["@from_storage"] }, { "prim": "IF_NONE", "args": [[{ "prim": "DUP" }, { "prim": "IMPLICIT_ACCOUNT" }, { "prim": "ADDRESS" }, { "prim": "SENDER" }, [[{ "prim": "COMPARE" }, { "prim": "EQ" }], { "prim": "IF", "args": [[], [[{ "prim": "UNIT" }, { "prim": "FAILWITH" }]]] }], [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], [{ "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CAR", "annots": ["%signup_fee"] }], { "prim": "AMOUNT" }, [[{ "prim": "COMPARE" }, { "prim": "EQ" }], { "prim": "IF", "args": [[], [[{ "prim": "UNIT" }, { "prim": "FAILWITH" }]]] }]], [[{ "prim": "CAR" }, { "prim": "CDR", "annots": ["%reporter"] }], { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "bool" }, { "prim": "False" }] }], [{ "prim": "SENDER" }, { "prim": "COMPARE" }, { "prim": "EQ" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "IMPLICIT_ACCOUNT" }, { "prim": "ADDRESS" }, { "prim": "SENDER" }, { "prim": "COMPARE" }, { "prim": "EQ" }]] }, { "prim": "OR" }, [{ "prim": "IF", "args": [[], [[{ "prim": "UNIT" }, { "prim": "FAILWITH" }]]] }], [{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }]] }, { "prim": "SWAP" }], [{ "prim": "CDR" }, { "prim": "CDR" }, { "prim": "CDR", "annots": ["%update_fee"] }], { "prim": "AMOUNT" }, [[{ "prim": "COMPARE" }, { "prim": "EQ" }], { "prim": "IF", "args": [[], [[{ "prim": "UNIT" }, { "prim": "FAILWITH" }]]] }]]] }, { "prim": "DIP", "args": [[{ "prim": "NOW" }, { "prim": "SWAP" }, { "prim": "PAIR" }, { "prim": "SOME" }, { "prim": "DIP", "args": [[[[{ "prim": "DUP" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }]]]] }]] }, { "prim": "UPDATE" }, { "prim": "PAIR" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "PAIR" }], [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }]] }, { "prim": "SWAP" }], [{ "prim": "CDR" }, { "prim": "CAR", "annots": ["%owner"] }], { "prim": "SENDER" }, [[{ "prim": "COMPARE" }, { "prim": "EQ" }], { "prim": "IF", "args": [[], [[{ "prim": "UNIT" }, { "prim": "FAILWITH" }]]] }], { "prim": "AMOUNT" }, { "prim": "PUSH", "args": [{ "prim": "mumav" }, { "int": "0" }] }, [[{ "prim": "COMPARE" }, { "prim": "EQ" }], { "prim": "IF", "args": [[], [[{ "prim": "UNIT" }, { "prim": "FAILWITH" }]]] }], { "prim": "IF_LEFT", "args": [[{ "prim": "SWAP" }, [{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CDR", "annots": ["@%%"] }, [{ "prim": "CAR", "annots": ["@%%"] }, { "prim": "PAIR", "annots": ["%@", "%"] }]]] }, { "prim": "CAR", "annots": ["@%%"] }, { "prim": "PAIR", "annots": ["%@", "%@"] }], { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "PAIR" }], [{ "prim": "BALANCE" }, { "prim": "UNIT" }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "PAIR" }]] }]] }]] }], "storage": { "prim": "Pair", "args": [[], { "prim": "Pair", "args": [{ "string": "tz1aicu922KqrGxpdTpVdSD1Jrqz7fJiUu6L" }, { "prim": "Pair", "args": [{ "int": "8000000" }, { "int": "1000000" }] }] }] } }, "counter": "0" }

export const storage = rpcContractResponse.script.code.find(
    x => x.prim === 'storage'
)!.args[0] as any;

export const params = rpcContractResponse.script.code.find(
    x => x.prim === 'parameter'
)!.args[0] as any;

export const bigMapValue = { "prim": "Pair", "args": [{ "prim": "Pair", "args": [{ "prim": "Some", "args": [{ "bytes": "7b2262616b65724e616d65223a2022457665727374616b65222c2262616b65724163636f756e74223a2022747a314d584672745a6f6158636b453431626a5543536a416a416170334146445372334e222c227265706f727465724163636f756e74223a2022222c226f70656e466f7244656c65676174696f6e223a202274727565222c2262616b65724f6666636861696e526567697374727955726c223a2022222c226665654d6f64656c223a207b227061796f75744163636f756e7473223a205b5d2c22666565223a20223130222c226d696e44656c65676174696f6e223a202230222c227061796f757444656c6179223a20362c227061796f75744672657175656e6379223a202231222c227061796f757446726571756e6563794d696e5061796f7574223a20302c226f76657244656c65676174696f6e223a203130302c226f76657244656c65676174696f6e5374616b6544696c7574696f6e223a20747275652c2262616b6572436861726765735061796f75745472616e73616374696f6e466565223a20747275652c227265776172647350616964223a207b22626c6f636b52657761726473223a20747275652c226d6973736564426c6f636b73223a2066616c73652c2273746f6c656e426c6f636b73223a20747275652c22656e646f72736552657761726473223a20747275652c226d6973736564456e646f7273656d656e7473223a2066616c73652c226c6f775072696f72697479456e646f72736550616964417346756c6c223a2066616c73652c227472616e73616374696f6e46656573223a20747275652c2261636375736174696f6e52657761726473223a20747275652c22616363757365644c6f73744465706f736974223a2066616c73652c22616363757365644c6f737452657761726473223a2066616c73652c22616363757365644c6f737446656573223a2066616c73652c22726576656c6174696f6e52657761726473223a20747275652c226d6973736564526576656c6174696f6e223a2066616c73652c226d6973736564526576656c6174696f6e46656573223a2066616c73657d7d7d" }] }, { "prim": "None" }] }, { "int": "1569309836" }] }