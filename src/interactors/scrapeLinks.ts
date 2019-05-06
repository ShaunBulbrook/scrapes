import Cheerio from "cheerio";

/**
 * Takes markup and returns an array of all links of the page.
 * @param markup string of html
 */
const scrapeLinks = (markup: string): string[] => {
	const $: any = Cheerio.load(markup);
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

export default scrapeLinks;
