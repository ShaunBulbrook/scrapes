import scrapeSelection from "./scrapeSelection";
import { markup, hackerNewsMarkup } from "../stubs/markup";
const fetch = jest.fn();
fetch.mockReturnValue(markup);

describe("scrapeSelection", () => {
	it("should return the content of a targeted element", () => {
		expect(scrapeSelection(markup, "h1")[0]).toBe("Example Domain");
	});
	it("should return the content of multiple targeted elements", () => {
		expect(scrapeSelection(markup, "p")).toMatchSnapshot("paragraphs");
	});
	it("should be able to use attribute selectors", () => {
		expect(
			scrapeSelection(
				markup,
				`a[href="http://www.iana.org/domains/example"]`
			)[0]
		).toBe("More information...");
	});
	it("should throw an error if no results can be found", () => {
		function scrapeSelectionFromNothing() {
			scrapeSelection("", "");
		}
		expect(scrapeSelectionFromNothing).toThrowError("No results found.");
	});
	it("should return the content of any matched elements in a list", () => {
		expect(Array.isArray(scrapeSelection(markup, "p"))).toBe(true);
	});
});
