/**
 * Used to auto-prefix lists of links (typically pulled with scrapeLinks)
 * The links will only be prefixed if they do not already have a hostname.
 * @param hostname The hostname that should prefix each item
 * @param linkList The list of links to be prefixed
 */
const prefixLinks = (hostname: string, linkList: string[]) => {
	if (!hostname) {
		throw "Empty hostname supplied.";
	} else if (linkList.length < 1) {
		throw "No items were provided.";
	}
	return linkList.map((element: string) => {
		if (element.includes(":")) {
			return element;
		}
		return hostname + (element.startsWith("/") ? element : "/" + element);
	});
};
export default prefixLinks;
