#! /usr/bin/env node

// Imports
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import path from "path";
import * as dotenv from "dotenv";
import { getDailyProblem } from "../src/fetchProblem.js";
import { fetchQuestion } from "../src/fetchData.js";
import { getDailyCodingChallenge, getQuestionDetails } from "../src/queries.js";

// User Imports

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
	const TEMP_PATH = path.join(process.cwd(), "temp");
	const LANG_LIST = new Set([
		"cpp",
		"java",
		"python3",
		"golang",
		"rust",
		"typescript",
	]);

	//await getDailyProblem(TEMP_PATH, LANG_LIST);
	//await mapAllProblems("questionMap");
	if (argv.daily === true) {
		let langList = new Set(argv.lang);
		await getDailyProblem(process.cwd(), langList);
	}
	/* const a = await fetchQuestion(getDailyCodingChallenge());
	const b = await a.json();
	console.log(b); */

	/* const questionDetails = await fetchQuestion(getQuestionDetails("two-sum"));
	const a = await questionDetails.json();
	console.log(a); */
};

main();
