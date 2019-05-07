import { markup } from "../stubs/markup";
import fetch from "node-fetch";
import getPage from "./getPage";

jest.mock("node-fetch");
((fetch as unknown) as jest.Mock).mockReturnValue({ text: () => markup });

describe("getPage", () => {
	it("should attempt fetch of http://example.com", async () => {
		await getPage("http://example.com");
		expect(fetch).toHaveBeenCalled();
		expect(fetch).toHaveBeenCalledWith("http://example.com", {});
	});
	it("should return markup", done => {
		getPage("http://example.com").then((html: string) => {
			expect(html).toMatchSnapshot(markup);
			done();
		});
	});
});
