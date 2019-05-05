#!/usr/bin/env node
const packagejson = require("../package.json");
const commander = require("commander");

commander
	.version(`v${packagejson.version}`)
	.description(packagejson.description);

commander.parse(process.argv);
