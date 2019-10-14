const m = require("mithril");

const Step1 = require("./view/step1");
const Step2 = require("./view/step2");

m.route(document.body, "step1", {
    "/step1": Step1,
    "/step2": Step2,
});