#!/usr/bin/env node
import { getPage, scrapeLinks, scrapeSelection, prefixLinks } from "./app";
const packagejson = require("../package.json");
const commander = require("commander");

commander
	.version(`v${packagejson.version}`)
	.description(packagejson.description);

commander
	.command("selection <location> <selector>")
	.action(async (location: string, selector: string) => {
		const html = await getPage(location);
		process.stdout.write(scrapeSelection(html, selector).join("\n"));
	});

commander
	.command("links <location> [prefix]")
	.action(async (location: string, prefix?: string) => {
		const html = await getPage(location);
		process.stdout.write(
			prefix
				? prefixLinks(prefix, scrapeLinks(html)).join("\n")
				: scrapeLinks(html).join("\n")
		);
	});

commander.parse(process.argv);
