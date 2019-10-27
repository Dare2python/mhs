const m = require("mithril");

const Layout = require("./view/layout");
const Step1 = require("./view/step1");
const Step2 = require("./view/step2");

m.route(document.body, "step1", {
    "/step1": {
        render: () =>
            m(Layout, m(Step1))
    },
    "/step2": {
        render: () =>
            m(Layout, m(Step2))
    },
});
