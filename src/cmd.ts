#!/usr/bin/env node
const packagejson = require("../package.json");
const commander = require("commander");

commander.version(`v${packagejson.version}`);
commander.parse(process.argv);
