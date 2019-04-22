#!/usr/bin/env node
var packagejson = require("../package.json");
var commander = require("commander");
var getPage = require("./entities/requests").getPage;
var scrape = require("./interactors/scrape");

commander
	.version(`v${packagejson.version}`)
	.description(packagejson.description);

commander
	.command("selection <location> <selector>")
	.action((location: string, selector: string) => {
		getPage(location).then((response: any) => {
			console.log(scrape.scrapeSelection(response, selector));
		});
	});

commander.command("links <location>").action((location: string) => {
	getPage(location).then((response: any) => {
		console.log(scrape.scrapeLinks(response));
	});
});

commander.parse(process.argv);

module.exports = {
	getPage: getPage,
	scrapeLinks: scrape.scrapeLinks,
	scrapeSelection: scrape.scrapeSelection
};
