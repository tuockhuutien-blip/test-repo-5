module.exports = function (plop) {
  plop.setGenerator("command", {
    description: "Generate a new bot command",

    prompts: [
      {
        type: "input",
        name: "command",
        message: "Command name (vd: ping):",
      },
      {
        type: "input",
        name: "description",
        message: "Description:",
      },
      {
        type: "input",
        name: "category",
        message: "Category (vd: Utility):",
      },
      {
        type: "input",
        name: "aliases",
        message: "Aliases cách nhau bởi dấu phẩy (vd: p,pingg):",
        filter: (input) => input.split(",").map((s) => s.trim()),
      },
    ],

    actions(data) {
      const className =
        data.command.charAt(0).toUpperCase() + data.command.slice(1) + "Command";
      data.className = className;

      return [
        {
          type: "add",
          path: "src/command/{{command}}.command.ts",
          templateFile: "plop-templates/command.hbs",
        },
      ];
    },
  });
};
