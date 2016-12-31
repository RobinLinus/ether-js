window.Ether=(function(){
	var crypto = window.crypto || window.msCrypto;
	var Buffer=require("buffer/").Buffer,
	ethereumjsTx=require("ethereumjs-tx"),
	privateToAddress=require("ethereumjs-util").privateToAddress;



	function generateKeys(){
		var privateKey = crypto.getRandomValues(new Uint8Array(32));
		privateKey = new Buffer(privateKey);
		return {
			 private: privateKey.toString("hex"),
			 public:"0x"+privateToAddress(privateKey).toString("hex")
			}
	}

	function privateToPublic(e){
		return "0x"+privateToAddress(new Buffer(e,"hex")).toString("hex")
	}

	function signTransaction(privateKey,tx){
		privateKey = new Buffer(privateKey,"hex");
		tx = new ethereumjsTx(tx);
		tx.sign(privateKey);
		return "0x"+tx.serialize().toString("hex");
	}

	function generateTx(txTo, valueWei, nonce, gasPrice, gasLimit, data) {
		if(!data){
			data = ""; //is this actually no data and the cheapest transaction? 
		}
        return {
            nonce: sanitizeHex(decimalToHex(nonce)),
            gasPrice: sanitizeHex(decimalToHex(gasPrice)),
            gasLimit: sanitizeHex(decimalToHex(gasLimit)),
            to: sanitizeHex(txTo),
            value: sanitizeHex(decimalToHex(valueWei)),
            data: sanitizeHex(data)
        }
    }

    function sanitizeHex(hex) {
        hex = hex.substring(0, 2) == '0x' ? hex.substring(2) : hex;
        if (hex == "") return "";
        return '0x' + padLeftEven(hex);
    }

    function decimalToHex(dec) {
        return dec.toString(16);
    }

    function padLeftEven(hex) {
        hex = hex.length % 2 != 0 ? '0' + hex : hex;
        return hex;
    }

	return { 
		generateKeys:generateKeys,
	  	privateToPublic:privateToPublic,
		generateTx:generateTx,
	  	signTransaction:signTransaction
	  }
}())