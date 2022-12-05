#! /usr/bin/env node

// Imports
import fs from "fs";
import yargs from "yargs";
import * as dotenv from "dotenv";

// User Imports
import { fetchQuestion } from "../src/fetchData.js";
import { getFileName } from "../utils/fileNaming.js";
import { getLanguageInfo } from "../src/languageInfo.js";
import { getDailyCodingChallenge, getQuestionDetails } from "../src/queries.js";
import path from "path";

// Import Configs
const argv = yargs(process.argv.slice(2)).argv;
dotenv.config();

// Main
const main = async () => {
	// Values from user
	const LANGUAGE = "cpp";
	const TEMP_PATH = path.join(process.cwd(), "temp");
	const LANG_LIST = new Set([
		"cpp",
		"java",
		"python3",
		"golang",
		"rust",
		"typescript",
	]);

	const {
		data: {
			activeDailyCodingChallengeQuestion: { question },
		},
	} = await fetchQuestion(getDailyCodingChallenge());

	const slugTitle = question.titleSlug;

	const questionDetails = await fetchQuestion(getQuestionDetails(slugTitle));

	const quesData = questionDetails.data.question;
	const codeSnippets = quesData.codeSnippets;

	const fileContents = codeSnippets.filter((code) => {
		return LANG_LIST.has(code.langSlug);
	});

	fileContents.forEach((code) => {
		const { languageName, extension, nameType } = getLanguageInfo(
			code.langSlug
		);
		const fileName = getFileName(question.title, nameType, extension);
		fs.writeFile(path.join(TEMP_PATH, fileName), code.code, (err) => {
			console.log(err);
		});
	});
};

main();
