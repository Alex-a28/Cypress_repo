const baseConfig = require("../cypress.config");

module.export = {
    ...baseConfig,
    e2e: {
        env: {
            pmtool_url: "http://tredgate.com/pmtool/index.php?",
            eshop_url: "https://tredgate.com/eshop/index.php?",
            automation_test_store_url: "https://automationteststore.com/",
        },
    },
};