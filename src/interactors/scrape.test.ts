const { scrapeSelection, scrapeLinks } = require("./scrape");
const { markup, hackerNewsMarkup } = require("../stubs/markup");

const fetch = jest.fn();
fetch.mockReturnValue(markup);

describe("scrapeSelection", () => {
	it("should return the content of a targeted element", () => {
		expect(scrapeSelection(markup, "h1")).toBe("Example Domain");
	});
	it("should return the content of multiple targeted elements", () => {
		expect(scrapeSelection(markup, "p")).toMatchSnapshot("paragraphs");
	});
	it("should be able to use attribute selectors", () => {
		expect(
			scrapeSelection(markup, `a[href="http://www.iana.org/domains/example"]`)
		).toBe("More information...");
	});
	it("should throw an error if no results can be found", () => {
		function scrapeSelectionFromNothing() {
			scrapeSelection("", "");
		}
		expect(scrapeSelectionFromNothing).toThrowError("No results found.");
	});
});

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
