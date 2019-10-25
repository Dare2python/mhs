const crypto = require('crypto');

// const x = require.resolve.paths('crypto');
console.log(crypto);

const GenKey = {
    publicKey: "",
    privateKey: "",
    keyPair: null,
    // generateKey: () => {
    //     let prime_length = 128;
    //     let diffHell = crypto.createDiffieHellman(prime_length);
    //     diffHell.generateKeys('base64');
    //     GenKey.publicKey = diffHell.getPublicKey('base64');
    //     GenKey.privateKey = diffHell.getPrivateKey('base64');
    //     GenKey.keyPair = diffHell;
    //     console.log(GenKey);
    // }
    generateKey: () => {
        console.log(crypto);
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
            console.error(err);
            console.log(publicKey);
            console.log(privateKey);
        });
    }
};

module.exports = GenKey;
