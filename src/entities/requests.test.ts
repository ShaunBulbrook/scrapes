import { getPage } from "./requests";
import { markup } from "../stubs/markup";

const fetch = jest.fn();
fetch.mockReturnValue(markup);

describe("getPage", () => {
	it("should return markup", done => {
		getPage("http://example.com").then((html: string) => {
			expect(html).toMatchSnapshot(markup);
			done();
		});
	});
});
