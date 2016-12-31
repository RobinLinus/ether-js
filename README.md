# ether-js
Ready-to-use, lightweight Ethereum library for browsers.

Ether-js is based on `window.crypto`, [ethereum-tx](https://github.com/ethereumjs/ethereumjs-tx) and [ethereum-utils](https://github.com/ethereumjs/ethereumjs-util).

## Features
- Create key pairs 
- Sign transaction
- lightweight (>100kb gziped)
- compatible down to IE10 and iOS Safari 7

## API
generateKeys:
```
Ether.generateKeys() 
>> {
    "private":"a00ea35c50007552817b07cfeede9269e8a011ea8369fd2d7d13b47e47571653",
    "public":"0x417d03a6885fb15b519c207b79609d1db4e04a9e"
   }
```

privateToPublic:
```
Ether.privateToPublic("a00ea35c50007552817b07cfeede9269e8a011ea8369fd2d7d13b47e47571653")
>> 0x417d03a6885fb15b519c207b79609d1db4e04a9e
```

signTransaction:
```
Ether.signTransaction("<<privateKey>>", Ether.generateTx(
		"0x29aa16154a6829a7f22f950d1edb0659d105ccbe",    // receiver address
		420000000,										 // value to send in Wei
		42,												 // nonce
		41000000000,									 // gasPrice
		53000											 // gasLimit
	)
);
>> 0xf8682a85098bca5a0082cf089429aa16154a6829a...
```
