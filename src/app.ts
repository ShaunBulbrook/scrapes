//const getPage = require("./entities/requests").getPage;
import { getPage } from "./entities/requests";
import { scrapeSelection, scrapeLinks } from "./interactors/scrape";

export { getPage, scrapeSelection, scrapeLinks };
