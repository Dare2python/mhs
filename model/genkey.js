const GenKey = {
    publicKey: "",
    privateKey: "",
    keyPair: null,
    generateKey: () =>
        window.crypto.subtle.generateKey(
            {
                name: "RSA-OAEP",
                // Consider using a 4096-bit key for systems that require long-term security
                modulusLength: 2048,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: "SHA-256",
            },
            true,
            ["encrypt", "decrypt", "wrapKey"]
        ).then( (keyPair) => {
            GenKey.keyPair = keyPair;
            console.log(GenKey.keyPair);
            console.log(GenKey);

            crypto.subtle.exportKey("raw", keyPair.publicKey
            ).then( (res)=> GenKey.publicKey = res );
            GenKey.privateKey =  crypto.subtle.exportKey("raw",keyPair.privateKey);
        })

};

module.exports = GenKey;
