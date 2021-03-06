const m = require("mithril");
const genKey = require("../model/genkey");

module.exports = {
    view: (vnode) =>
        m("#step1",[
            m("button.button#head", {
                autofocus: true,
                type: "button",
                onclick: () => genKey.generateKey()
            }, "generate key"),
            m("textarea[placeholder=Public Key]#public", {rows:6, cols:65, value:genKey.publicKey}),
            m("textarea[placeholder=Private Key]#private", {rows:15, cols:65, value:genKey.privateKey})
        ])
};
