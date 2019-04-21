import fetch from "node-fetch";

import { PageResponse } from "../types/types";

/**
 * Return the markup from the specified page.
 * @param location The address of the targeted page.
 */
export const getPage = async (location: string): Promise<string> => {
	const response: PageResponse = await fetch(location, {});
	const responseText: string = await response.text();
	return responseText;
};
