const m = require("mithril");

module.exports = {
    view: (vnode) =>
        m("main.layout", [
            m("nav.menu",[
                m(m.route.Link, {href: "/step1"}, "Step 1" ),
                m(m.route.Link, {href: "/step2"}, "Step 2" ),
            ]),
            m("section", vnode.children)
        ])
};