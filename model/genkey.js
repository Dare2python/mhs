const crypto = require('crypto');

const GenKey = {
    publicKey: "",
    privateKey: "",
    keyPair: null,
    generateKey: () => {
        let prime_length = 60;
        let diffHell = crypto.createDiffieHellman(prime_length);
        diffHell.generateKeys('base64');
        GenKey.publicKey = diffHell.getPublicKey('base64');
        GenKey.privateKey = diffHell.getPrivateKey('base64');
        console.log(GenKey);
    }
};

module.exports = GenKey;
