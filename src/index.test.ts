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
	it("should return the the text value for the heading", () => {
		const value: string = scrapeSelection("http://example.com", "h1");
		expect(value).toBe("Example Domain");
	});
	it("Should return the display test for the anchor tag", () => {
		const value: strung = scrapeSelection("http://example.com", "p a");
		expect(value).toBe("More information...");
	});
	it("Should return the content of multiple elements when required ", () => {
		const value: string = scrapeSelection("http://example.com", "p");
		expect(value)
			.toBe(`This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission.
			More information...`);
	});
});
