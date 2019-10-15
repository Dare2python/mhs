const crypto = require('crypto');

const GenKey = {
    publicKey: "",
    privateKey: "",
    keyPair: null,
    generateKey: () =>
        crypto.generateKeyPair('rsa', {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
                cipher: 'aes-256-cbc',
                passphrase: 'top secret'
            }
        }, (err, publicKey, privateKey) => {
            GenKey.publicKey = publicKey;
            GenKey.privateKey = privateKey;
            console.log(GenKey);
        })
};

module.exports = GenKey;
