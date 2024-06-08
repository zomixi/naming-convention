import { commandBuilder } from "./commandBuilder.js";
import {
  camelCase,
  constantCase,
  kebabCase,
  pascalCase,
  snakeCase,
} from "./utils.js";

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
  {
    id: "naming-convention.kebab-case",
    callback: commandBuilder(kebabCase),
  },
];

export { COMMANDS };
