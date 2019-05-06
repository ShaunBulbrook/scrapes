import Cheerio from "cheerio";

/**
 * Takes markup and a query selector. Returns the text under elements that match the selector
 * @param markup string of html
 * @param selector query selector to rip text from
 */
const scrapeSelection = (markup: string, selector: string): string[] => {
	const $: any = Cheerio.load(markup);
	const selectedContent: string[] = [];

	$(selector).each((index: number, element: any) => {
		selectedContent.push($(element).text());
	});

	if (selectedContent.length > 0) {
		return selectedContent;
	} else {
		throw "No results found.";
	}
};

export default scrapeSelection;
