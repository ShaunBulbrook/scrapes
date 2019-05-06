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
		process.stdout.write(scrapeSelection(html, selector).join(","));
	});

commander.command("links <location>").action(async (location: string) => {
	const html = await getPage(location);
	process.stdout.write(scrapeLinks(html).join(","));
});

commander.parse(process.argv);
