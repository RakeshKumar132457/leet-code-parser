#! /usr/bin/env node

// Imports
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as dotenv from "dotenv";
import { getDailyProblem } from "../src/fetchProblem.js";

// Import Configs
dotenv.config();
const argv = yargs(hideBin(process.argv))
    .boolean("daily")
    .array("lang")
    .demandOption("daily")
    .help().argv;

// Main
const main = async () => {
    // Values from user
    /* const TEMP_PATH = path.join(process.cwd(), "temp");
    const LANG_LIST = new Set([
        "cpp",
        "java",
        "python3",
        "golang",
        "rust",
        "typescript",
    ]); */

    //await getDailyProblem(TEMP_PATH, LANG_LIST);
    //await mapAllProblems("questionMap");
    if (argv.daily === true) {
        let langList = new Set(argv.lang);
        await getDailyProblem(process.cwd(), langList);
    }
};

main();
