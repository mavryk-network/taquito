export const script = {"code":[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address","annots":["%0"]},{"prim":"nat","annots":["%1"]}],"annots":["%approve"]},{"prim":"nat","annots":["%burn"]}]},{"prim":"or","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address","annots":["%0"]},{"prim":"address","annots":["%1"]}]},{"prim":"contract","args":[{"prim":"nat"}],"annots":["%2"]}],"annots":["%getAllowance"]},{"prim":"pair","args":[{"prim":"address","annots":["%0"]},{"prim":"contract","args":[{"prim":"nat"}],"annots":["%1"]}],"annots":["%getBalance"]}]}]},{"prim":"or","args":[{"prim":"or","args":[{"prim":"pair","args":[{"prim":"unit","annots":["%0"]},{"prim":"contract","args":[{"prim":"nat"}],"annots":["%1"]}],"annots":["%getTotalSupply"]},{"prim":"nat","annots":["%mint"]}]},{"prim":"or","args":[{"prim":"address","annots":["%setOwner"]},{"prim":"bool","annots":["%setPause"]}]}]}]},{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address","annots":["%0"]},{"prim":"address","annots":["%1"]}]},{"prim":"nat","annots":["%2"]}],"annots":["%transfer"]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"map","args":[{"prim":"address"},{"prim":"nat"}],"annots":["%allowances"]},{"prim":"nat","annots":["%balance"]}]}],"annots":["%ledger"]},{"prim":"address","annots":["%owner"]}]},{"prim":"pair","args":[{"prim":"bool","annots":["%paused"]},{"prim":"nat","annots":["%totalSupply"]}]}]}]},{"prim":"code","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"PUSH","args":[{"prim":"mumav"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"This contract do not accept token"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"unit"},{"prim":"Unit"}]}]]},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Contract paused"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"unit"},{"prim":"Unit"}]}]]},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DUP"}],[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"MAP FIND"}]},{"prim":"FAILWITH"}],[]]},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIP","args":[{"int":"8"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"8"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"SOME"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"}]]}]]},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"SOME"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"SENDER"},{"prim":"UPDATE"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"7"}]}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]}]]}],[{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Contract paused"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"unit"},{"prim":"Unit"}]}]]},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"You must be the owner of the contract to burn tokens"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"EMPTY_MAP","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"DUP"}],[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]}]]}]]},{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"}]]},{"prim":"COMPARE"},{"prim":"GT"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Owner balance is too low"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"unit"},{"prim":"Unit"}]}]]},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]}]]},{"prim":"SUB"},{"prim":"ABS"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"CAR"},{"prim":"CAR"}]]}]]},{"prim":"UPDATE"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"PUSH","args":[{"prim":"int"},{"int":"1"}]},{"prim":"SWAP"},{"prim":"SUB"},{"prim":"ABS"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CAR"}]]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"6"}]}]]}]]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"6"}]}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]}],[{"prim":"DUP"},{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}]]},{"prim":"PAIR"}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"MAP FIND"}]},{"prim":"FAILWITH"}],[]]},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"}]]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"MAP FIND"}]},{"prim":"FAILWITH"}],[]]},{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PUSH","args":[{"prim":"mumav"},{"int":"0"}]}]]},{"prim":"TRANSFER_TOKENS"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"CONS"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"3"}]},{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]}]]}],[{"prim":"DUP"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"MAP FIND"}]},{"prim":"FAILWITH"}],[]]},{"prim":"DUP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"PUSH","args":[{"prim":"mumav"},{"int":"0"}]}]]},{"prim":"TRANSFER_TOKENS"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"CONS"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]},{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]}],[{"prim":"DUP"},{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"PUSH","args":[{"prim":"mumav"},{"int":"0"}]}]]},{"prim":"TRANSFER_TOKENS"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"CONS"},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP"}]]}],[{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Contract paused"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"unit"},{"prim":"Unit"}]}]]},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"You must be the owner of the contract to mint tokens"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"EMPTY_MAP","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"DUP"}],[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]}]]}]]},{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}]]},{"prim":"ADD"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CAR"}]]}]]},{"prim":"UPDATE"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"PUSH","args":[{"prim":"int"},{"int":"1"}]},{"prim":"ADD"},{"prim":"ABS"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CAR"}]]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"5"}]}]]}]]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"6"}]}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]}],[{"prim":"DUP"},{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"You must be the owner of the contract to transfer ownership"}]},{"prim":"FAILWITH"}],[{"prim":"DUP"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"}]]},{"prim":"DUP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"5"}]}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP"}]]}],[{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"You must be the owner of the contract to pause the contract"}]},{"prim":"FAILWITH"}],[{"prim":"DUP"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"}]]},{"prim":"DUP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"5"}]}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"}]]}],[{"prim":"DUP"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}]]},{"prim":"PAIR"}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Contract paused"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"unit"},{"prim":"Unit"}]}]]},{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]}]]},{"prim":"PAIR"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}]]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DUP"}],[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]}]]},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"False"}]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}]]},{"prim":"PAIR"}]]},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"MAP FIND"}]},{"prim":"FAILWITH"}],[]]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"MAP FIND"}]},{"prim":"FAILWITH"}],[]]},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}]]},{"prim":"COMPARE"},{"prim":"GE"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]}]]}],[{"prim":"DUP"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"True"}]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"}]]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"6"}]}]]},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"unit"},{"prim":"Unit"}]}],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Sender not allowed to spend token from source"}]},{"prim":"FAILWITH"}]]},{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"MAP FIND"}]},{"prim":"FAILWITH"}],[]]},{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"}]]},{"prim":"COMPARE"},{"prim":"GT"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Source balance is too low"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"unit"},{"prim":"Unit"}]}]]},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]}]]},{"prim":"SUB"},{"prim":"ABS"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DIP","args":[{"int":"10"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"10"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"CAR"},{"prim":"CAR"}]]}]]},{"prim":"UPDATE"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"EMPTY_MAP","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"10"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"10"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CAR"}]]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"DUP"}],[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]}]]}]]},{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"11"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"11"}]}]]},{"prim":"ADD"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"11"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"11"}]}]]},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"DUP"}],[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"14"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"14"}]}]]},{"prim":"SUB"},{"prim":"ABS"},{"prim":"SOME"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"CAR"}]]},{"prim":"SENDER"},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]}]]}]]},{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIP","args":[{"int":"16"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"16"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"SOME"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CAR"}]]}]]},{"prim":"UPDATE"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"11"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"11"}]},{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CAR"}]]},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"},{"prim":"DIP","args":[{"int":"17"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"17"}]},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"SOME"},{"prim":"DIP","args":[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"}]]}]]},{"prim":"UPDATE"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"CDR"}]]},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"11"}]}]]}]]},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"8"}]}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"2"}]}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP","args":[{"int":"3"}]}]]}]]}],"storage":{"prim":"Pair","args":[{"prim":"Pair","args":[{"int":"72"},{"bytes":"0000e96b9f8b19af9c7ffa0c0480e1977b295850961f"}]},{"prim":"Pair","args":[{"prim":"True"},{"int":"100"}]}]}};

export const script2 = {"code":[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"int","annots":["%decrement"]},{"prim":"int","annots":["%increment"]}]}]},{"prim":"storage","args":[{"prim":"int"}]},{"prim":"code","args":[[{"prim":"UNPAIR"},{"prim":"IF_LEFT","args":[[{"prim":"SWAP"},{"prim":"SUB"}],[{"prim":"ADD"}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}],"storage":{"int":"0"}};