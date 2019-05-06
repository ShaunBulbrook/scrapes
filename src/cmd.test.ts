import path from "path";
import { exec } from "child_process";
const { version, description, bin } = require("../package.json");

/**
 * Invokes a process to test items run as execs in a cli.
 * @param args args to be executedoo in the commandline.
 * @param cwd current working directory. Defaults to '.'
 */
function cli(args: string[], cwd: string) {
	return new Promise<{
		code: number;
		error: object;
		stderr: string;
		stdout: string;
	}>(resolve => {
		exec(
			`node ${path.resolve(bin)} ${args.join(" ")}`,
			{ cwd },
			(error: any, stdout: any, stderr: any) => {
				resolve({
					code: error && error.code ? error.code : 0,
					error,
					stdout,
					stderr
				});
			}
		);
	});
}

describe("cmd", () => {
	test("should return correct version number", async () => {
		const result = await cli(["-V"], ".");
		expect(result.stdout).toBe("v" + version + "\n");
	});
	test("should return the correct description", async () => {
		const result = await cli(["--help"], ".");
		expect(result.stdout.includes(description)).toBe(true);
	});
});

describe("selection", () => {
	it("should print an error when it is fed a bad URL", async () => {
		const result = await cli(
			["selection", "http://an1nvalidUR1", "not-even-a-selector"],
			"."
		);
		expect(result.stderr).not.toBe(null);
		expect(result.stderr).not.toBe("");
	});
});

describe("links", () => {
	it("should show an error when it is fed a bad URL", async () => {
		const result = await cli(
			["links", "http://an1nvalidUR1", "not-even-a-selector"],
			"."
		);
		expect(result.stderr).not.toBe(null);
		expect(result.stderr).not.toBe("");
	});
});
