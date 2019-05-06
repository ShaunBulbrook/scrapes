#!/usr/bin/env node
import { getPage, scrapeLinks, scrapeSelection } from "./app";
const packagejson = require("../package.json");
const commander = require("commander");

commander
	.version(`v${packagejson.version}`)
	.description(packagejson.description);

commander
	.command("selection <location> <selector>")
	.action(async (location: string, selector: string) => {
		const html = await getPage(location);
		process.stdout.write(scrapeSelection(html, "h1").join(","));
	});

commander.command("links <location>").action((location: string) => {
	getPage(location).then((response: any) => {
		console.log(scrapeLinks(response));
	});
});

commander.parse(process.argv);
