#! /usr/bin/env node

// Imports
import yargs from "yargs";
import path from "path";
import * as dotenv from "dotenv";

// User Imports
import { getDailyProblem } from "../src/getProblems.js";
import { fetchQuestion } from "../src/fetchData.js";
import {
	getAllProblems,
	getCompanyDetails,
	getQuestionDetails,
	getStates,
	getTotal,
} from "../src/queries.js";

// Import Configs
const argv = yargs(process.argv.slice(2)).argv;
dotenv.config();

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

	await getDailyProblem(TEMP_PATH, LANG_LIST);
	//const a = await fetchQuestion(getTotal());
	//console.log(a);
};

main();
