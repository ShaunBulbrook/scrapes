import prefixLinks from "./prefixLinks";

describe("prefixLinks", () => {
	it("should throw an error if no hostname is provided", () => {
		function prefixLinksWithNoHostname() {
			prefixLinks("", ["123"]);
		}
		expect(prefixLinksWithNoHostname).toThrowError("Empty hostname supplied.");
	});
	it("should throw if an empty list is provided", () => {
		function prefixLinksWithEmptyList() {
			prefixLinks("http://example.com", []);
		}
		expect(prefixLinksWithEmptyList).toThrowError("No items were provided.");
	});
	it("should return a list of items prefixed with the hostname", () => {
		expect(prefixLinks("example.com", ["/0", "/1", "/2", "/3", "/4"])).toEqual([
			"example.com/0",
			"example.com/1",
			"example.com/2",
			"example.com/3",
			"example.com/4"
		]);
	});
	it("should prefix items with a leading slash if none is present", () => {
		expect(prefixLinks("example.com", ["0", "1", "2", "3", "4"])).toEqual([
			"example.com/0",
			"example.com/1",
			"example.com/2",
			"example.com/3",
			"example.com/4"
		]);
	});
	it("should not prefix a link that already has a hostname", () => {
		expect(
			prefixLinks("example.com", [
				"0",
				"http://1.net",
				"2",
				"https://3.biz",
				"4"
			])
		).toEqual([
			"example.com/0",
			"http://1.net",
			"example.com/2",
			"https://3.biz",
			"example.com/4"
		]);
	});
	it("should be able to handle mailto and ftp protocol links", () => {
		expect(
			prefixLinks("example.com", [
				"0",
				"1",
				"mailto:email@example.com",
				"3",
				"ftp://ftp.example.com"
			])
		).toEqual([
			"example.com/0",
			"example.com/1",
			"mailto:email@example.com",
			"example.com/3",
			"ftp://ftp.example.com"
		]);
	});
});
