#!/usr/bin/env node
var packagejson = require("../package.json");
var commander = require("commander");
var getPage = require("./entities/requests").getPage;
var scrape = require("./interactors/scrape");

commander.version(`v${packagejson.version}`);
commander.parse(process.argv);
