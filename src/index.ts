#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import { getLocalIP } from "./ip";
import { printQR } from "./qr";

const program = new Command();

program
  .name("dev-lan-link")
  .description("Expose your localhost to LAN for dev testing")
  .option("-p, --port <number>", "Local dev server port", "3000")
  .parse(process.argv);

const options = program.opts();
const port = parseInt(options.port);
const name = options.name;

const ip = getLocalIP();
const url = `http://${ip}:${port}`;

console.log(chalk.green(`\n LAN Dev Server:`));
console.log(`→ ${chalk.blue(url)}`);
console.log(
  `→ ${chalk.gray(`(or try http://${name}.local if mDNS is enabled)`)}\n`
);

printQR(url);
