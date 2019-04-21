import fetch from "node-fetch";
import cheerio from "cheerio";

import { PageResponse } from "./types/types";

/**
 * Return the markup from the specified page.
 * @param location The address of the targeted page.
 */
export const getPage = async (location: string): Promise<string> => {
	const response: PageResponse = await fetch(location, {});
	const responseText: string = await response.text();
	return responseText;
};

/**
 * Takes markup and a query selector. Returns the text under elements that match the selector
 * @param markup html string
 * @param selector query selector to rip text from
 */
export const scrapeSelection = (markup: string, selector: string): string => {
	const $: any = cheerio.load(markup);
	return $(selector).text() || "No results found.";
};
