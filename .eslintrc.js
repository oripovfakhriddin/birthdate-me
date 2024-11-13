module.exports = {
  //...
  plugin: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    //if we want to group imports can use below.
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^react"], ["^antd"], ["^@?\\w"], ["@/(.*)"], ["^[./]"]],
      },
    ],
  },
};
