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
const prefixLinks = (hostname: string, linkList: string[]) => {
	if (!hostname) {
		throw "Empty hostname supplied.";
	} else if (linkList.length < 1) {
		throw "No items were provided.";
	}
	return linkList.map((element: string) => {
		if (element.includes(".")) {
			return element;
		}
		const pathname = element.startsWith("/") ? element : "/" + element;
		return hostname + pathname;
	});
};
export default scrapeLinks;
export { prefixLinks };
