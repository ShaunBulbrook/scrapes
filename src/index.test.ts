import { getPage, scrapeSelection } from "./index";
import { markup } from "./stubs/markup";

const fetch = jest.fn();
fetch.mockReturnValue(markup);

describe("getPage", () => {
	it("should return markup", done => {
		getPage("http://example.com").then(html => {
			expect(html).toMatchSnapshot(markup);
			done();
		});
	});
});

describe("scrapeSelection", () => {
	it("should inform the user that if it failed to find results", () => {
		expect(scrapeSelection("", "")).toBe("No results found.");
	});
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
});
