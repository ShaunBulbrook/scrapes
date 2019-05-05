let path = require("path");
let exec = require("child_process").exec;
let { version, description, bin } = require("../package.json");

/**
 * Invokes a process to test items run as execs in a cli.
 * @param args args to be executed in the commandline.
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
});
