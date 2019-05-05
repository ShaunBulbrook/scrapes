import { getPage, scrapeSelection, scrapeLinks } from "./app";

describe("exports", () => {
	it("should provide getPage", () => {
		expect(getPage).toBeDefined();
	});
	it("should provide scrapeSelection", () => {
		expect(scrapeSelection).toBeDefined();
	});
	it("should provide scrapeLinks", () => {
		expect(scrapeLinks).toBeDefined();
	});
});
