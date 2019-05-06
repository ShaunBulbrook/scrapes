import { markup } from "../stubs/markup";
import getPage from "./getPage";

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
