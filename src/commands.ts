import { camelCase } from "camel-case";
import { constantCase } from "constant-case";
import { pascalCase } from "pascal-case";
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
];

export { COMMANDS };
