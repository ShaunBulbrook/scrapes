# Scrapes

[![CircleCI](https://circleci.com/gh/ShaunBulbrook/scrapes.svg?style=svg)](https://circleci.com/gh/ShaunBulbrook/scrapes) [![codecov](https://codecov.io/gh/ShaunBulbrook/scrapes/branch/master/graph/badge.svg)](https://codecov.io/gh/ShaunBulbrook/scrapes)

---

Scrapes uses [cheerio](https://www.npmjs.com/package/cheerio) to parse the content of webpages and returns it.

## Installation

To install locally run:

```bash
npm install --save scrapes
# Or
npm install -g scrapes
```

## Usage

Scrapes can be used inside of node.js scripts and through the command line.

### CLI

Documentation is provided for cli commands with the `--help` option

```bash
# Install locally
npm install -g scrapes
scrapes --help

# Use from npx
npx scrapes --help
```

### scrapeSelection

Takes provided string and a query selector. Returns the text content of the elements that match the selector.

```js
import { scrapeSelection } from "scrapes";

const markup = `<!doctype html><html><body><h1>A title</h1></body></html>`;

scrapeSelection(markup, "h1");
//=> 'A title'
```

### scrapeLinks

Takes provided string and returns the content of href attributes on any anchor tags in an array.

```js
import { scrapeLinks } from "scrapes";

const markup = `<!doctype html><html><body><a href="/example-path">Link</a></body></html>`;

scrapeLinks(markup);
//=> ['/example-path']
```

### prefixLinks

Returns a list of items prefixed with a provided hostname. The prefixing should autoformat, ignoring existing hostnames where specified and adding the correct pathname syntax where it is / isn't provided.

```js
prefixLinks("example.com", [
	"newsguidelines.html",
	"1",
	"mailto:email@example.com",
	"/3",
	"ftp://ftp.example.com"
]);
/*=>
 *	[
 *		"example.com/newsguidelines.html",
 *		"example.com/1",
 *		"mailto:email@example.com",
 *		"example.com/3",
 *		"ftp://ftp.example.com"
 * 	]
 */
```

---

Maintained by [@ShaunBulbrook](https://github.com/ShaunBulbrook).
