const forge = require('node-forge');

const GenKey = {
    publicKey: "",
    privateKey: "",
    keyPair: null,
    generateKey: () => {
        GenKey.keyPair = forge.pki.rsa.generateKeyPair(1024);
        GenKey.publicKey = forge.pki.publicKeyToPem(GenKey.keyPair.publicKey);
        GenKey.privateKey = forge.pki.privateKeyToPem(GenKey.keyPair.privateKey);
    }
};

module.exports = GenKey;
