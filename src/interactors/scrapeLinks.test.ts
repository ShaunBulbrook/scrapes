import scrapeLinks from "./scrapeLinks";
const { markup, hackerNewsMarkup } = require("../stubs/markup");

const fetch = jest.fn();
fetch.mockReturnValue(markup);

describe("scrapeLinks", () => {
	it("should throw an error if no links are found", () => {
		function scrapeLinksFromNothing() {
			scrapeLinks("");
		}
		expect(scrapeLinksFromNothing).toThrowError("No links could be found.");
	});
	it("should return a link on a page", () => {
		expect(scrapeLinks(markup)[0]).toBe("http://www.iana.org/domains/example");
	});
	it("should return different links", () => {
		expect(scrapeLinks(hackerNewsMarkup)).toContain(
			"http://www.antenna-theory.com/"
		);
	});
});
