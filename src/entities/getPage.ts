import { PageResponse } from "../types/types";

const fetch = require("node-fetch");

/**
 * Return the markup from the specified page.
 * @param location The address of the targeted page.
 */
const getPage = async (location: string): Promise<string> => {
	const response: PageResponse = await fetch(location, {});
	const responseText: string = await response.text();
	return responseText;
};

export default getPage;
