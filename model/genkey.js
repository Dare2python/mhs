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
            ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
        ).then( (keyPair) => {
            GenKey.keyPair = keyPair;
            window.crypto.subtle.wrapKey(
                "raw",
                keyPair.publicKey,
                keyPair.privateKey,
                "AES-KW"
            ).then( (res)=>{
                console.log(res);
            });
            console.log(GenKey);

        })

};

module.exports = GenKey;
