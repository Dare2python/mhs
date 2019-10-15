const m = require("mithril");
const genKey = require("../model/genkey");

module.exports = {
    view: (vnode) =>
        m("section", [
            m("button.genkey", {
                autofocus: true,
                type: "button",
                onclick: () => genKey.testClick()
            }, "gen key"),
            m("textarea[placeholder=Public Key]", {rows:5, cols:33, value:genKey.publicKey}),
            m("textarea[placeholder=Private Key]", {rows:5, cols:33, value:genKey.privateKey})
        ])
};
