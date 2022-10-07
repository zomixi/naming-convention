import { camelCase } from "camel-case";
import { constantCase } from "constant-case";
import { pascalCase } from "pascal-case";
import { snakeCase } from "snake-case";
import { commandBuilder } from "./commandBuilder";

const COMMANDS = [
  {
    id: "naming-convention.camel-case",
    callback: commandBuilder(camelCase),
  },
  {
    id: "naming-convention.pascal-case",
    callback: commandBuilder(pascalCase),
  },
  {
    id: "naming-convention.constant-case",
    callback: commandBuilder(constantCase),
  },
  {
    id: "naming-convention.snake-case",
    callback: commandBuilder(snakeCase),
  },
];

export { COMMANDS };
