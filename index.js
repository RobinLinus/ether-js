window.Ether=(function(){
	var crypto = window.crypto || window.msCrypto;
	var Buffer=require("buffer/").Buffer,
	ethereumjsTx=require("ethereumjs-tx"),
	privateToAddress=require("ethereumjs-util").privateToAddress;

	function signTransaction(privateKey,tx){
		tx=new Buffer(tx,"hex");
		var r=new ethereumjsTx(privateKey);
		return r.sign(tx),"0x"+r.serialize().toString("hex")
	}
	function generateKeys(){
		var privateKey = crypto.getRandomValues(new Uint8Array(32));
		privateKey = new Buffer(privateKey);
		return {
			 privateKey: privateKey.toString("hex"),
			 publicKey:"0x"+privateToAddress(privateKey).toString("hex")
			}
	}

	function privateToPublic(e){
		return "0x"+privateToAddress(new Buffer(e,"hex")).toString("hex")
	}

	return { 
		signTransaction:signTransaction,
	  	generateKeys:generateKeys,
	  	privateToPublic:privateToPublic
	  }
}())