import cheerio from "cheerio";

/**
 * Takes markup and a query selector. Returns the text under elements that match the selector
 * @param markup string of html
 * @param selector query selector to rip text from
 */
export const scrapeSelection = (markup: string, selector: string): string => {
	const $: any = cheerio.load(markup);
	return $(selector).text() || "No results found.";
};

/**
 * Takes markup and returns an array of all links of the page.
 * @param markup string of html
 */
export const scrapeLinks = (markup: string): string[] => {
	const $: any = cheerio.load(markup);
	const links: string[] = [];

	$("a[href]").each((index: number, element: any) =>
		links.push($(element).attr("href"))
	);

	if (links.length > 0) {
		return links;
	} else {
		throw "No links could be found.";
	}
};
