module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "overrides": [
        {
            "files": [ "src/**/*.js" ],
            "rules": {
                "indent": ["error", 2],
                "no-tabs": 0,
                "no-undef": 0,
                "no-console": 0,
                "class-methods-use-this": 0,
                "no-underscore-dangle": 0
            }
        }
    ]
}