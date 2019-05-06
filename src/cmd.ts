#!/usr/bin/env node
const getPage = require("./app").getPage;
const packagejson = require("../package.json");
const commander = require("commander");

commander
	.version(`v${packagejson.version}`)
	.description(packagejson.description);

commander
	.command("selection <location> <selector>")
	.action((location: string, selector: string) => {
		getPage(location).then((response: any) => {
			process.stdout.write(response);
		});
	});


commander.parse(process.argv);
