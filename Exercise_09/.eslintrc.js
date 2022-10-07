module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      rules: {
        "no-undef": [
          "off",
          {
            typeof: false
          }
        ]
      }
    },
    {
      files: [
        "*.test.ts"
      ],
      rules: {},
      env: {
        jest: true,
        node: true
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "off"
    ],
    "@typescript-eslint/no-var-requires": [
      "off"
    ]
  }
};