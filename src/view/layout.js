const m = require("mithril");

module.exports = {
    view: (vnode) =>
        m("main.layout", [
            m("nav.menu",[
                m(m.route.Link, {href: "/step1", class: "mlink"}, "Step 1" ),
                m(m.route.Link, {href: "/step2", class: "mlink"}, "Step 2" ),
            ]),
            m("section.content", vnode.children),
            // m("aside", "side"),
            // m("footer", "(c)")
        ])
};
