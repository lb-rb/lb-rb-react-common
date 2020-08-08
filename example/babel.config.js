module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "loose": true,
        "modules": false,
        "useBuiltIns": "usage",
        "corejs": "2.6.11",
        "shippedProposals": true,
        "targets": {
          "browsers": [">0.25%", "not dead"],
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "useBuiltIns": true,
        "pragma": "React.createElement",
      }
    ],
    "@babel/flow"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    "babel-plugin-macros",
    [
      "@babel/plugin-transform-runtime",
      {
        "helpers": true,
        "regenerator": true
      }
    ],
  ]
}