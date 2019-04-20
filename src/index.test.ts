import { getPage } from "./index";
import { markup } from "./stubs/markup";

const fetch = jest.fn();

describe("getPage", () => {
	it("should return markup", done => {
		fetch.mockReturnValueOnce(markup);
		getPage("http://example.com").then(html => {
			expect(html).toMatchSnapshot(markup);
			done();
		});
	});
});
